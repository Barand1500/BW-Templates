/**
 * Main JavaScript Entry Point
 * Initializes all interactive features
 */

// Import theme manager
if (typeof require !== 'undefined') {
    require('./js/theme.js');
    require('./js/animations.js');
}

(function() {
    'use strict';

    // Mobile menu toggle
    function initMobileMenu() {
        const menuToggles = document.querySelectorAll('[data-menu-toggle]');
        
        menuToggles.forEach(toggle => {
            toggle.addEventListener('click', function() {
                const targetId = this.getAttribute('data-menu-toggle');
                const menu = document.getElementById(targetId);
                
                if (menu) {
                    menu.classList.toggle('is-open');
                    this.classList.toggle('is-active');
                    
                    // Manage aria-expanded
                    const isExpanded = this.getAttribute('aria-expanded') === 'true';
                    this.setAttribute('aria-expanded', !isExpanded);
                }
            });
        });
    }

    // Form validation
    function initFormValidation() {
        const forms = document.querySelectorAll('form[data-validate]');
        
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const isValid = this.checkValidity();
                
                if (isValid) {
                    console.log('Form is valid, submitting...');
                    // Add your form submission logic here
                    showNotification('Success! Form submitted.', 'success');
                } else {
                    showNotification('Please fill all required fields.', 'error');
                }
            });
        });
    }

    // Simple notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 2rem;
            right: 2rem;
            padding: 1rem 1.5rem;
            background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#007bff'};
            color: white;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            animation: slideInRight 0.3s ease-out;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Lazy loading images
    function initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const src = img.getAttribute('data-src');
                        
                        if (src) {
                            img.src = src;
                            img.removeAttribute('data-src');
                            imageObserver.unobserve(img);
                        }
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // Back to top button
    function initBackToTop() {
        const backToTop = document.querySelector('[data-back-to-top]');
        
        if (!backToTop) {
            // Create it if it doesn't exist
            const btn = document.createElement('button');
            btn.setAttribute('data-back-to-top', '');
            btn.innerHTML = '↑';
            btn.style.cssText = `
                position: fixed;
                bottom: 5rem;
                right: 2rem;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: var(--color-primary);
                color: white;
                font-size: 1.5rem;
                box-shadow: var(--shadow-lg);
                opacity: 0;
                pointer-events: none;
                transition: all 0.3s ease;
                z-index: var(--z-fixed);
            `;
            document.body.appendChild(btn);
        }
        
        const btn = document.querySelector('[data-back-to-top]');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                btn.style.opacity = '1';
                btn.style.pointerEvents = 'auto';
            } else {
                btn.style.opacity = '0';
                btn.style.pointerEvents = 'none';
            }
        });
        
        btn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Copy to clipboard
    function initCopyButtons() {
        document.querySelectorAll('[data-copy]').forEach(button => {
            button.addEventListener('click', async function() {
                const text = this.getAttribute('data-copy');
                
                try {
                    await navigator.clipboard.writeText(text);
                    showNotification('Copied to clipboard!', 'success');
                } catch (err) {
                    console.error('Failed to copy:', err);
                    showNotification('Failed to copy', 'error');
                }
            });
        });
    }

    // Initialize all features
    function init() {
        initMobileMenu();
        initFormValidation();
        initLazyLoading();
        initBackToTop();
        initCopyButtons();
        
        console.log('✨ StaticRepo initialized');
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose notification function globally
    window.showNotification = showNotification;
})();
