// ===== Global Değişkenler =====
let currentCategory = 'all';
let currentTab = {};
let searchQuery = '';
let allTemplates = [];

// ===== Sayfa Yüklendiğinde =====
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

// ===== Uygulama Başlatma =====
function initializeApp() {
    allTemplates = [...templates];
    renderCategories();
    renderComponents();
    setupSearch();
}

// ===== Kategorileri Render Et =====
function renderCategories() {
    const categoryNav = document.getElementById('categoryNav');
    
    // "Tümü" kategorisi ekle
    const allItem = createCategoryItem('all', 'Tüm Bileşenler', templates.length);
    categoryNav.appendChild(allItem);
    
    // Diğer kategorileri ekle
    categories.forEach(category => {
        const count = templates.filter(t => t.category === category).length;
        const item = createCategoryItem(category, category, count);
        categoryNav.appendChild(item);
    });
}

// ===== Kategori Item Oluştur =====
function createCategoryItem(id, name, count) {
    const item = document.createElement('div');
    item.className = 'category-item';
    if (id === currentCategory) {
        item.classList.add('active');
    }
    
    item.innerHTML = `
        <span class="category-name">${name}</span>
        <span class="category-count">${count}</span>
    `;
    
    item.addEventListener('click', () => {
        currentCategory = id;
        updateActiveCategory();
        renderComponents();
    });
    
    return item;
}

// ===== Aktif Kategoriyi Güncelle =====
function updateActiveCategory() {
    document.querySelectorAll('.category-item').forEach(item => {
        item.classList.remove('active');
    });
    event.target.closest('.category-item').classList.add('active');
    
    // Başlık güncelle
    const title = currentCategory === 'all' ? 'Tüm Bileşenler' : currentCategory;
    document.getElementById('categoryTitle').textContent = title;
}

// ===== Bileşenleri Render Et =====
function renderComponents() {
    const grid = document.getElementById('componentsGrid');
    grid.innerHTML = '';
    
    // Filtreleme
    let filteredTemplates = currentCategory === 'all' 
        ? allTemplates 
        : allTemplates.filter(t => t.category === currentCategory);
    
    // Arama filtresi
    if (searchQuery) {
        filteredTemplates = filteredTemplates.filter(t => 
            t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            t.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
    
    if (filteredTemplates.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📦</div>
                <h3>Bileşen Bulunamadı</h3>
                <p>${searchQuery ? 'Arama sonuçlarına uygun bileşen yok.' : 'Bu kategoride henüz bileşen bulunmuyor.'}</p>
            </div>
        `;
        return;
    }
    
    // Bileşenleri oluştur
    filteredTemplates.forEach(template => {
        const card = createComponentCard(template);
        grid.appendChild(card);
    });
    
    // Prism.js ile kod renklendirme
    setTimeout(() => {
        if (typeof Prism !== 'undefined') {
            Prism.highlightAll();
        }
    }, 100);
}

// ===== Bileşen Kartı Oluştur =====
function createComponentCard(template) {
    const card = document.createElement('div');
    card.className = 'component-card';
    card.dataset.id = template.id;
    
    // Varsayılan tab
    if (!currentTab[template.id]) {
        currentTab[template.id] = 'preview';
    }
    
    card.innerHTML = `
        <div class="component-header">
            <h3 class="component-title">${template.title}</h3>
        </div>
        
        <div class="component-preview">
            <div class="preview-content" id="preview-${template.id}">
                ${template.html}
            </div>
        </div>
        
        <div class="component-tabs">
            <button class="tab ${currentTab[template.id] === 'preview' ? 'active' : ''}" data-tab="preview">
                👁 Önizleme
            </button>
            <button class="tab ${currentTab[template.id] === 'html' ? 'active' : ''}" data-tab="html">
                HTML
            </button>
            <button class="tab ${currentTab[template.id] === 'css' ? 'active' : ''}" data-tab="css">
                CSS
            </button>
            <button class="tab ${currentTab[template.id] === 'js' ? 'active' : ''}" data-tab="js">
                JavaScript
            </button>
        </div>
        
        <div class="component-code ${currentTab[template.id] === 'html' ? 'active' : ''}" data-code="html">
            <pre class="line-numbers"><code class="language-markup">${escapeHtml(template.html)}</code></pre>
        </div>
        
        <div class="component-code ${currentTab[template.id] === 'css' ? 'active' : ''}" data-code="css">
            <pre class="line-numbers"><code class="language-css">${escapeHtml(template.css)}</code></pre>
        </div>
        
        <div class="component-code ${currentTab[template.id] === 'js' ? 'active' : ''}" data-code="js">
            <pre class="line-numbers"><code class="language-javascript">${escapeHtml(template.js)}</code></pre>
        </div>
        
        <div class="component-actions">
            <button class="btn btn-copy" data-action="copy">
                📋 Kopyala
            </button>
            <button class="btn btn-download" data-action="download">
                ⬇ İndir (.zip)
            </button>
        </div>
    `;
    
    // Event listener'ları ekle
    attachCardEventListeners(card, template);
    
    return card;
}

// ===== Kart Event Listener'ları =====
function attachCardEventListeners(card, template) {
    // Tab değiştirme
    card.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabType = tab.dataset.tab;
            currentTab[template.id] = tabType;
            
            // Tüm tab'ları pasif yap
            card.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            card.querySelectorAll('.component-code').forEach(c => c.classList.remove('active'));
            
            // Seçili tab'ı aktif yap
            tab.classList.add('active');
            
            // Preview göster/gizle
            const preview = card.querySelector('.component-preview');
            if (tabType === 'preview') {
                preview.style.display = 'flex';
            } else {
                preview.style.display = 'none';
                const codeBlock = card.querySelector(`[data-code="${tabType}"]`);
                if (codeBlock) {
                    codeBlock.classList.add('active');
                    // Prism.js ile yeniden renklendir
                    setTimeout(() => {
                        if (typeof Prism !== 'undefined') {
                            Prism.highlightAllUnder(codeBlock);
                        }
                    }, 50);
                }
            }
        });
    });
    
    // Kopyala butonu
    card.querySelector('[data-action="copy"]').addEventListener('click', () => {
        copyCode(template);
    });
    
    // İndir butonu
    card.querySelector('[data-action="download"]').addEventListener('click', () => {
        downloadCode(template);
    });
}

// ===== Kod Kopyalama =====
function copyCode(template) {
    let codeToCopy = '';
    const activeTab = currentTab[template.id];
    
    switch(activeTab) {
        case 'preview':
        case 'html':
            codeToCopy = template.html;
            break;
        case 'css':
            codeToCopy = template.css;
            break;
        case 'js':
            codeToCopy = template.js;
            break;
    }
    
    // Panoya kopyala
    navigator.clipboard.writeText(codeToCopy).then(() => {
        showToast(`${activeTab.toUpperCase()} kodu kopyalandı!`);
    }).catch(err => {
        showToast('Kopyalama başarısız!', 'error');
        console.error('Kopyalama hatası:', err);
    });
}

// ===== Kod İndirme =====
function downloadCode(template) {
    // JSZip kullanarak ZIP oluştur
    if (typeof JSZip === 'undefined') {
        alert('JSZip kütüphanesi yüklenemedi!');
        return;
    }
    
    const zip = new JSZip();
    const fileName = template.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    
    // HTML dosyası
    const htmlContent = `<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${template.title}</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
${template.html}

    <script src="script.js"></script>
</body>
</html>`;
    
    // CSS dosyası
    const cssContent = `/* ${template.title} - CSS */

${template.css}`;
    
    // JS dosyası
    const jsContent = `// ${template.title} - JavaScript

${template.js}`;
    
    // README dosyası
    const readmeContent = `# ${template.title}

Kategori: ${template.category}
Oluşturuldu: CodeUI ile

## Kullanım

1. Tüm dosyaları aynı klasöre çıkarın
2. index.html dosyasını tarayıcınızda açın

3. Kodları projenize göre düzenleyin

---
İyi kodlamalar! 🚀
`;
    
    // Dosyaları ZIP'e ekle
    zip.file('index.html', htmlContent);
    zip.file('style.css', cssContent);
    zip.file('script.js', jsContent);
    zip.file('README.md', readmeContent);
    
    // ZIP'i oluştur ve indir
    zip.generateAsync({type: 'blob'}).then(function(content) {
        saveAs(content, `${fileName}.zip`);
        showToast('🎉 ZIP dosyası indiriliyor...');
    }).catch(function(err) {
        console.error('ZIP oluşturma hatası:', err);
        showToast('ZIP oluşturma başarısız!', 'error');
    });
}

// ===== Dosya İndirme Helper =====
function downloadFile(content, fileName, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ===== Toast Bildirimi =====
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    // 3 saniye sonra gizle
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== HTML Escape =====
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== Arama Fonksiyonu =====
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        renderComponents();
        
        // Arama yapılıyorsa bilgi göster
        updateSearchInfo();
    });
    
    // Enter tuşuna basma
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    });
}

function updateSearchInfo() {
    const description = document.getElementById('categoryDescription');
    if (searchQuery) {
        const count = document.querySelectorAll('.component-card').length;
        description.textContent = `"${searchQuery}" için ${count} sonuç bulundu`;
    } else {
        description.textContent = 'Kullanıma hazır modern web bileşenlerini keşfedin';
    }
}

// ===== Arama Fonksiyonu (Kullanıcı için - API) =====
function searchComponents(query) {
    const results = templates.filter(t => 
        t.title.toLowerCase().includes(query.toLowerCase()) ||
        t.category.toLowerCase().includes(query.toLowerCase())
    );
    return results;
}

// ===== Favori Ekleme (Gelecekte eklenebilir) =====
function toggleFavorite(templateId) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const index = favorites.indexOf(templateId);
    
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(templateId);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// ===== Konsol Bilgisi =====
console.log('%c CodeUI v2.0 Yüklendi! ', 'background: #3b82f6; color: white; font-size: 16px; padding: 8px; font-weight: bold;');
console.log(`📦 Toplam ${templates.length} bileşen yüklendi`);
console.log(`📁 ${categories.length} kategori mevcut`);
console.log('%c Yeni Özellikler: ', 'background: #10b981; color: white; font-size: 12px; padding: 4px;');
console.log('✅ Syntax Highlighting (Prism.js)');
console.log('✅ ZIP Download (JSZip)');
console.log('✅ Live Search');
console.log('---');
console.log('Geliştirici: CodeUI Team | 2026');
