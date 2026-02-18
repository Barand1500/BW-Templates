const nunjucks = require('nunjucks');
const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const chokidar = require('chokidar');

const SRC_DIR = 'src';
const DIST_DIR = 'dist';
const LAYOUTS_DIR = path.join(SRC_DIR, 'layouts');
const PAGES_DIR = path.join(SRC_DIR, 'pages');
const COMPONENTS_DIR = path.join(SRC_DIR, 'components');

const env = new nunjucks.Environment(
    new nunjucks.FileSystemLoader([LAYOUTS_DIR, PAGES_DIR, COMPONENTS_DIR]),
    { noCache: true }
);

async function renderPages() {
    console.log('Building components...');
    await fs.ensureDir(DIST_DIR);

    const files = glob.sync('src/pages/**/*.njk');

    for (const file of files) {
        const relativePath = path.relative(PAGES_DIR, file);
        const destPath = path.join(DIST_DIR, relativePath.replace('.njk', '.html'));

        // Nunjucks render expects the template name relative to one of the configured loader paths
        const rendered = env.render(relativePath);
        await fs.ensureDir(path.dirname(destPath));
        await fs.writeFile(destPath, rendered);
        console.log(`Rendered: ${destPath}`);
    }
}

// Simple build for components as standalone pages for preview
async function renderComponentsForPreview() {
    const files = glob.sync('src/components/**/*.njk');
    const previewDist = path.join(DIST_DIR, 'preview-components');
    await fs.ensureDir(previewDist);

    for (const file of files) {
        const relativePath = path.relative(COMPONENTS_DIR, file);
        const componentName = path.basename(file, '.njk');
        const destPath = path.join(previewDist, `${componentName}.html`);

        // Wrap component in a mini-layout for preview
        const content = env.render(relativePath);
        const wrapper = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../global.css">
    <style>
        body { margin: 0; padding: 20px; font-family: sans-serif; background: #f4f4f4; transition: background 0.3s; }
        .preview-label { font-size: 12px; color: #888; margin-bottom: 20px; display: block; border-bottom: 1px solid #ddd; padding-bottom: 5px; }
    </style>
</head>
<body>
    <span class="preview-label">Component: ${componentName}</span>
    <div id="component-preview-root">
    ${content}
    </div>
    <script>
        window.addEventListener('message', (event) => {
            if (event.data.type === 'change-variant') {
                const root = document.querySelector('[class^="c-"]'); // Select the main component class
                if (root) {
                    // Find the variant class (e.g., c-header--light) and replace it
                    const componentName = root.className.split(' ')[0].split('--')[0];
                    const classes = Array.from(root.classList);
                    const newClasses = classes.filter(c => !c.includes('--'));
                    newClasses.push(\`\${componentName}--\${event.data.variant}\`);
                    root.className = newClasses.join(' ');
                }
            }
        });
    </script>
</body>
</html>`;
        await fs.writeFile(destPath, wrapper);
    }
}

// Extract component source code to JSON for copy functionality
async function extractComponentSources() {
    const files = glob.sync('src/components/**/*.njk');
    const componentSources = {};

    for (const file of files) {
        const componentName = path.basename(file, '.njk');
        const content = await fs.readFile(file, 'utf-8');
        
        // Extract HTML, CSS, and JS
        const htmlMatch = content.match(/^[\s\S]*?(?=<style>|<script>|$)/);
        const cssMatch = content.match(/<style>([\s\S]*?)<\/style>/);
        const jsMatch = content.match(/<script>([\s\S]*?)<\/script>/);
        
        componentSources[componentName] = {
            name: componentName,
            html: htmlMatch ? htmlMatch[0].trim() : '',
            css: cssMatch ? cssMatch[1].trim() : '',
            js: jsMatch ? jsMatch[1].trim() : '',
            full: content
        };
    }

    await fs.writeFile(
        path.join(DIST_DIR, 'component-sources.json'),
        JSON.stringify(componentSources, null, 2)
    );
    console.log('Extracted component sources to component-sources.json');
}

const build = async () => {
    await renderPages();
    await renderComponentsForPreview();
    await extractComponentSources();
    
    // Copy static assets
    if (await fs.exists('src/static')) {
        console.log('Copying static assets...');
        await fs.copy('src/static', 'dist/static');
    }
    
    // Create a base global.css if it doesn't exist (for backwards compatibility)
    if (!await fs.exists('dist/global.css')) {
        await fs.writeFile('dist/global.css', '/* See dist/static/global.css for styles */\n@import url("/static/global.css");');
    }
    
    // Create main.js redirect if it doesn't exist
    if (!await fs.exists('dist/main.js')) {
        await fs.writeFile('dist/main.js', '// See dist/static/main.js for scripts\nimport "/static/main.js";');
    }
    
    console.log('✨ Build complete!');
};

if (process.argv.includes('--watch')) {
    console.log('Watching for changes...');
    chokidar.watch(SRC_DIR).on('all', async (event, path) => {
        console.log(`Event ${event} on ${path}`);
        await build();
    });
} else {
    build();
}
