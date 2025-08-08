// Main JavaScript for Heng Yang's Portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initLoader();
    initNavigation();
    initScrollAnimations();
    initParticleSystem();
    initCounterAnimations();
    initTypingEffect();
    initThemeToggle();
    initSmoothScrolling();
    initDownloadCountAnimation();
});

// Loading Screen
function initLoader() {
    const loader = document.getElementById('loading-screen');

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            // Remove loader from DOM after animation
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 1500); // Show loader for 1.5 seconds
    });
}

// Navigation functionality
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active nav link
        updateActiveNavLink();
    });

    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Update active navigation link based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 150;

        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${id}"]`);

            if (scrollPos >= top && scrollPos <= bottom) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }
}

// Scroll animations with Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add animation classes and observe elements
    const animatedElements = document.querySelectorAll('.research-card, .project-card, .publication-item, .about-text, .contact-item');

    animatedElements.forEach((element, index) => {
        element.classList.add('fade-in');
        element.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(element);
    });
}

// Particle system for hero background
function initParticleSystem() {
    const particleContainer = document.querySelector('.particle-container');
    if (!particleContainer) return;

    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        // Random animation delay and duration
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';

        particleContainer.appendChild(particle);
    }
}

// Counter animations for hero stats
function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 4000; // 延长为4秒
        const steps = 400;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            // Format number with commas
            element.textContent = Math.floor(current).toLocaleString();
        }, duration / steps);
    }
}

// Typing effect for hero subtitle
function initTypingEffect() {
    const subtitle = document.querySelector('.hero-subtitle');
    if (!subtitle) return;

    const text = subtitle.textContent;
    subtitle.textContent = '';
    subtitle.style.borderRight = '2px solid';

    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // Remove cursor after typing is complete
            setTimeout(() => {
                subtitle.style.borderRight = 'none';
            }, 1000);
        }
    };

    // Start typing effect after a delay
    setTimeout(typeWriter, 1000);
}

// Theme toggle functionality
function initThemeToggle() {
    // Create theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.setAttribute('aria-label', 'Toggle dark mode');

    // Add to navigation
    const navContainer = document.querySelector('.nav-container');
    if (navContainer) {
        navContainer.appendChild(themeToggle);
    }

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }

    // Theme toggle event
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 100; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Download count animation
function animateDownloadCounts() {
    const counters = document.querySelectorAll('.download-count');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        let current = 0;
        const increment = Math.max(1, Math.floor(target / 100));
        function updateCounter() {
            if (current < target) {
                current += increment;
                if (current > target) current = target;
                counter.textContent = current.toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString();
            }
        }
        updateCounter();
    });
}

// Initialize download count animation on scroll
function initDownloadCountAnimation() {
    let triggered = false;
    function checkAndAnimate() {
        const modelsSection = document.getElementById('models');
        if (!triggered && modelsSection) {
            const rect = modelsSection.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                animateDownloadCounts();
                triggered = true;
            }
        }
    }
    window.addEventListener('scroll', checkAndAnimate);
    checkAndAnimate();
}

// Additional interactive features
class InteractiveFeatures {
    constructor() {
        this.initProjectCardHovers();
        this.initSkillTagHovers();
        this.initResearchNetworkAnimation();
    }

    initProjectCardHovers() {
        const projectCards = document.querySelectorAll('.project-card');

        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                this.addCardGlow(card);
            });

            card.addEventListener('mouseleave', () => {
                this.removeCardGlow(card);
            });
        });
    }

    addCardGlow(card) {
        card.style.boxShadow = '0 20px 40px rgba(99, 102, 241, 0.1)';
        card.style.transform = 'translateY(-8px)';
    }

    removeCardGlow(card) {
        card.style.boxShadow = '';
        card.style.transform = '';
    }

    initSkillTagHovers() {
        const skillTags = document.querySelectorAll('.skill-tag');

        skillTags.forEach(tag => {
            tag.addEventListener('mouseenter', () => {
                tag.style.background = 'linear-gradient(135deg, #6366f1, #8b5cf6)';
                tag.style.color = 'white';
                tag.style.transform = 'scale(1.05)';
            });

            tag.addEventListener('mouseleave', () => {
                tag.style.background = '';
                tag.style.color = '';
                tag.style.transform = '';
            });
        });
    }

    initResearchNetworkAnimation() {
        const networkNodes = document.querySelectorAll('.network-node:not(.center)');
        const centerNode = document.querySelector('.network-node.center');

        if (!centerNode) return;

        networkNodes.forEach((node, index) => {
            // Animate nodes in sequence
            setTimeout(() => {
                node.style.opacity = '0';
                node.style.transform = 'scale(0)';

                // Animate in
                setTimeout(() => {
                    node.style.transition = 'all 0.5s ease';
                    node.style.opacity = '1';
                    node.style.transform = 'scale(1)';
                }, 100);
            }, index * 200);
        });

        // Add hover interactions
        networkNodes.forEach(node => {
            node.addEventListener('mouseenter', () => {
                centerNode.style.transform = 'translate(-50%, -50%) scale(1.1)';
                centerNode.style.boxShadow = '0 0 30px rgba(99, 102, 241, 0.3)';
            });

            node.addEventListener('mouseleave', () => {
                centerNode.style.transform = 'translate(-50%, -50%) scale(1)';
                centerNode.style.boxShadow = '';
            });
        });
    }
}

// Performance optimization
class PerformanceOptimizer {
    constructor() {
        this.throttle = this.throttle.bind(this);
        this.debounce = this.debounce.bind(this);
        this.initLazyLoading();
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    debounce(func, delay) {
        let timeoutId;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(context, args), delay);
        };
    }

    initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');

        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// Easter eggs and fun interactions
class EasterEggs {
    constructor() {
        this.initKonamiCode();
        this.initProfileImageInteraction();
    }

    initKonamiCode() {
        const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
        let userInput = [];

        document.addEventListener('keydown', (e) => {
            userInput.push(e.keyCode);

            if (userInput.length > konamiCode.length) {
                userInput.shift();
            }

            if (JSON.stringify(userInput) === JSON.stringify(konamiCode)) {
                this.activateEasterEgg();
                userInput = [];
            }
        });
    }

    activateEasterEgg() {
        // Add rainbow effect to the gradient text
        const gradientText = document.querySelector('.gradient-text');
        if (gradientText) {
            gradientText.style.animation = 'rainbow 2s linear infinite';

            // Add CSS animation if not exists
            if (!document.querySelector('#rainbow-animation')) {
                const style = document.createElement('style');
                style.id = 'rainbow-animation';
                style.textContent = `
                    @keyframes rainbow {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                `;
                document.head.appendChild(style);
                gradientText.style.backgroundSize = '400% 400%';
            }

            // Show notification
            this.showNotification('🎉 Easter egg activated! Rainbow mode enabled!');
        }
    }

    initProfileImageInteraction() {
        const profileImage = document.getElementById('profile-avatar');
        const resumeButtonEn = document.getElementById('resume-button-en');
        const resumeButtonCn = document.getElementById('resume-button-cn');

        if (profileImage && resumeButtonEn && resumeButtonCn) {
            let clickCount = 0;
            const requiredClicks = 5;

            profileImage.addEventListener('click', () => {
                clickCount++;

                // Add some visual feedback on each click
                profileImage.style.transition = 'transform 0.2s ease-in-out';
                profileImage.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    profileImage.style.transform = 'scale(1)';
                }, 200);

                if (clickCount >= requiredClicks) {
                    if (resumeButtonEn.style.opacity !== '1') {
                        this.showNotification('✨ Surprise! Resume buttons unlocked!');
                        resumeButtonEn.style.opacity = '1';
                        resumeButtonEn.style.pointerEvents = 'auto';
                        resumeButtonCn.style.opacity = '1';
                        resumeButtonCn.style.pointerEvents = 'auto';
                        resumeButtonEn.style.transition = 'opacity 0.5s ease';
                        resumeButtonCn.style.transition = 'opacity 0.5s ease';
                    }
                    // Reset for other animations or future interactions
                    clickCount = 0;
                } else if (clickCount === 1) {
                     this.showNotification(`Click ${requiredClicks - clickCount} more times...`);
                }
            });
        }
    }

    showNotification(message) {
        const existingNotification = document.querySelector('.easter-egg-notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.className = 'easter-egg-notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            z-index: 10000;
            animation: slideInRight 0.5s ease;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.5s ease';
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    }
}

// Initialize all interactive features after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new InteractiveFeatures();
    new PerformanceOptimizer();
    new EasterEggs();
});

// Add CSS animations for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    .theme-toggle {
        background: none;
        border: 2px solid var(--border-color);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
        color: var(--text-primary);
    }
    
    .theme-toggle:hover {
        border-color: var(--primary-color);
        color: var(--primary-color);
        transform: scale(1.1);
    }
    
    @media (max-width: 768px) {
        .nav-menu.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
            padding: 1rem;
            box-shadow: var(--shadow-md);
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
`;

document.head.appendChild(notificationStyles);
