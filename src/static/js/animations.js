/**
 * Animation Utilities
 * Provides smooth animations and transitions for components
 */

(function() {
    'use strict';

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Optional: unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animate class
    function initAnimations() {
        const animateElements = document.querySelectorAll('[data-animate]');
        animateElements.forEach(el => observer.observe(el));
    }

    // Smooth scroll to anchor links
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Add stagger animation to children
    function initStaggerAnimations() {
        const staggerContainers = document.querySelectorAll('[data-stagger]');
        
        staggerContainers.forEach(container => {
            const children = Array.from(container.children);
            const delay = parseInt(container.getAttribute('data-stagger')) || 100;
            
            children.forEach((child, index) => {
                child.style.animationDelay = `${index * delay}ms`;
            });
        });
    }

    // Parallax effect
    function initParallax() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        if (parallaxElements.length === 0) return;
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(el => {
                const speed = parseFloat(el.getAttribute('data-parallax')) || 0.5;
                const yPos = -(scrolled * speed);
                el.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    // Page load animation
    function initPageLoad() {
        document.body.classList.add('page-loaded');
    }

    // Initialize all animations
    function init() {
        initAnimations();
        initSmoothScroll();
        initStaggerAnimations();
        initParallax();
        
        // Delay page load animation slightly
        setTimeout(initPageLoad, 100);
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose utilities
    window.AnimationUtils = {
        observe: (element) => observer.observe(element),
        unobserve: (element) => observer.unobserve(element),
        refresh: initAnimations
    };
})();
