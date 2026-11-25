/* ==========================================================================
   Anjalie Wickramasinghe — Portfolio Interactions
   ========================================================================== */

const PROJECT_DETAILS = {
    bloodcare: {
        category: 'Tri-Lingual Healthcare Web App',
        title: 'BloodCare — Blood Donation Management System',
        description:
            'A web-based Blood Donation Management System designed for Sri Lanka to connect blood donors with hospitals and patients across all 25 districts, featuring full English, Sinhala, and Tamil localization.',
        features: [
            'Donor registration & profile management with localStorage persistence',
            'One-click blood group search across all 8 blood types and 25 Sri Lankan districts',
            'Hospital urgent request posting (Critical / Urgent / Normal) with live notification center',
            'Custom tri-lingual i18n translation engine supporting English, Sinhala, and Tamil'
        ],
        tech: ['HTML5', 'CSS3', 'JavaScript', 'i18n (EN/SI/TA)', 'localStorage']
    },
    micromate: {
        category: 'Web Application',
        title: 'MicroMate — Student Microservice Marketplace',
        description:
            'A student-focused marketplace connecting university students who need quick digital help with student freelancers across design, development, tutoring, content, and marketing.',
        features: [
            'Role-based signup & login with dedicated Customer and Developer dashboards',
            'Post-request builder with live preview and localStorage saving',
            'Service discovery with search, category, max-price, and sorting filters',
            'Shared dark & light theme toggle across all marketplace pages'
        ],
        tech: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'Role Dashboards', 'Theme Switcher']
    },
    ricelink: {
        category: 'Full-Stack PHP & MySQL',
        title: 'RiceLink — Smart Farmer Platform',
        description:
            'A full-stack agricultural platform connecting Sri Lankan paddy farmers with administrators to manage harvests, daily paddy pricing, sales tracking, and payout approvals.',
        features: [
            'Farmer portal for submitting paddy sales (Samba, Nadu, Kekulu, Red Rice) with Sinhala UI support',
            'Interactive Chart.js monthly revenue analytics and real-time approval/payment notifications',
            'Admin dashboard for farmer management, daily price updates, and sale status workflows (Pending/Approved/Paid)',
            'Relational MySQL database schema (ricelink1) with PHP session authentication'
        ],
        tech: ['PHP', 'MySQL', 'Chart.js', 'HTML5', 'CSS3']
    },
    dermocare: {
        category: 'Full-Stack & Node.js API',
        title: 'DermoCare — Clinic Slot Reservation System',
        description:
            'A dermatology and aesthetic skincare clinic platform combining a multi-page frontend with a Node.js + Nodemailer API for appointment slot reservations and automated SMTP confirmations.',
        features: [
            'Treatment catalogue & detail pages (CO2 Laser, Carbon Laser Peel, Chemical Peeling, Pigmentation)',
            'Interactive date picker & clinic slot booking routed to POST /api/appointments',
            'Automated confirmation emails via Node.js & Nodemailer SMTP integration',
            'Skincare product catalogue, shopping cart/checkout, and cross-tab synced Admin dashboard'
        ],
        tech: ['HTML / CSS / JS', 'Node.js', 'Nodemailer', 'REST API', 'localStorage']
    },
    cinemate: {
        category: 'Web Application',
        title: 'CineMate — Movie & TV Discovery App',
        description:
            'A movie and TV discovery web application crafted for seamless browsing across curated film & series catalogues, genre filtering, and a personal favourites watchlist.',
        features: [
            'Multi-view navigation across Home, Movies, TV Shows, and Favourites',
            'Live title search and genre dropdown filtering',
            '20+ dedicated movie & series description pages with rich poster artwork'
        ],
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Layout']
    },
    codegenie: {
        category: 'Python & GUI',
        title: 'CodeGenie',
        description:
            'A Python Tkinter-based programming assistant chatbot structured as a multi-file GUI application to help learners explore programming concepts and snippets.',
        features: [
            'Modular multi-file Python project architecture',
            'Interactive desktop chat interface built with Tkinter',
            'Quick programming Q&A guidance for beginner-friendly workflows'
        ],
        tech: ['Python', 'Tkinter', 'Multi-File GUI', 'Problem Solving']
    },
    campinglk: {
        category: 'Web Application Concept',
        title: 'Camping.lk',
        description:
            'A dedicated web application concept for renting and purchasing camping gear and outdoor essentials tailored for adventure enthusiasts in Sri Lanka.',
        features: [
            'Dual rental and direct-purchase gear catalog structure',
            'Category-oriented layout for tents, packs, and outdoor essentials',
            'Clean e-commerce storefront UI built with core web technologies'
        ],
        tech: ['HTML5', 'CSS3', 'JavaScript', 'E-Commerce UX']
    }
};

// Toast Notification Helper
function showToast(message, isError = false) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast${isError ? ' error' : ''}`;
    toast.innerHTML = `
        <i class="fa-solid ${isError ? 'fa-circle-exclamation' : 'fa-circle-check'}" style="color: ${isError ? '#f87171' : '#2dd4bf'};"></i>
        <span>${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.style.transition = 'all 0.25s ease';
        setTimeout(() => toast.remove(), 260);
    }, 3600);
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. AOS & Typed.js
    if (window.AOS) {
        AOS.init({
            duration: 680,
            once: true,
            easing: 'ease-out-cubic'
        });
    }

    if (window.Typed && document.querySelector('.typing-text')) {
        new Typed('.typing-text', {
            strings: [
                'Software Engineering Undergraduate',
                'Web & Mobile App Developer',
                'UI/UX Design Enthusiast',
                'Creative Problem Solver'
            ],
            typeSpeed: 75,
            backSpeed: 40,
            backDelay: 1800,
            loop: true
        });
    }

    // 2. Dynamic Years
    const currentYear = new Date().getFullYear();
    const eduDate = document.getElementById('edu-date');
    if (eduDate && currentYear >= 2024) {
        eduDate.innerHTML = `<i class="fa-solid fa-calendar-days"></i> 2024 - ${currentYear}`;
    }
    const footerYear = document.getElementById('footer-year');
    if (footerYear) {
        footerYear.textContent = String(currentYear);
    }

    // 3. Live Sri Lanka Time
    const timeEl = document.getElementById('sri-lanka-time');
    function updateColomboTime() {
        if (!timeEl) return;
        try {
            const formatted = new Intl.DateTimeFormat('en-US', {
                timeZone: 'Asia/Colombo',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            }).format(new Date());
            timeEl.textContent = `${formatted} · LK`;
        } catch {
            timeEl.textContent = 'GMT +5:30';
        }
    }
    updateColomboTime();
    setInterval(updateColomboTime, 30000);

    // 4. Online / Offline Status
    function checkConnection() {
        const badge = document.getElementById('status-badge');
        const text = document.getElementById('status-text');
        if (!badge || !text) return;

        if (navigator.onLine) {
            badge.className = 'status-badge online';
            text.textContent = 'Active';
        } else {
            badge.className = 'status-badge offline';
            text.textContent = 'Offline';
        }
    }
    window.addEventListener('online', checkConnection);
    window.addEventListener('offline', checkConnection);
    checkConnection();

    // 5. Scroll Progress, Navbar Shadow & Back-to-Top
    const scrollProgress = document.getElementById('scrollProgress');
    const mainNav = document.getElementById('main-nav');
    const backToTopBtn = document.getElementById('backToTop');
    let scrollTicking = false;

    window.addEventListener('scroll', () => {
        if (scrollTicking) return;
        scrollTicking = true;
        requestAnimationFrame(() => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollProgress && maxScroll > 0) {
                scrollProgress.style.width = `${Math.min(100, (scrollY / maxScroll) * 100)}%`;
            }
            if (mainNav) {
                mainNav.classList.toggle('scrolled', scrollY > 36);
            }
            if (backToTopBtn) {
                backToTopBtn.style.display = scrollY > 340 ? 'flex' : 'none';
            }
            scrollTicking = false;
        });
    }, { passive: true });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 6. Active Nav Link Highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('#nav-menu li a');

    if (sections.length && navLinks.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const id = entry.target.getAttribute('id');
                navLinks.forEach((link) => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            });
        }, { rootMargin: '-25% 0px -65% 0px', threshold: 0 });

        sections.forEach((sec) => observer.observe(sec));
    }

    // 7. Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars', !isOpen);
                icon.classList.toggle('fa-xmark', isOpen);
            }
        });

        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-xmark');
                }
            });
        });
    }

    // 8. Interactive Skills Orbit Label
    const orbitLabel = document.getElementById('orbitActiveLabel');
    const orbitIcons = document.querySelectorAll('.orbit-icon');
    orbitIcons.forEach((btn) => {
        const label = btn.getAttribute('data-skill');
        btn.addEventListener('mouseenter', () => {
            if (orbitLabel && label) orbitLabel.textContent = label;
        });
        btn.addEventListener('focus', () => {
            if (orbitLabel && label) orbitLabel.textContent = label;
        });
        btn.addEventListener('mouseleave', () => {
            if (orbitLabel) orbitLabel.textContent = 'Hover a skill';
        });
        btn.addEventListener('blur', () => {
            if (orbitLabel) orbitLabel.textContent = 'Hover a skill';
        });
    });

    // 9. Project Category & Skill Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const skillChips = document.querySelectorAll('button.skill-chip[data-skill-filter]');
    const skillFilterBanner = document.getElementById('skillFilterBanner');
    const skillFilterName = document.getElementById('skillFilterName');
    const clearSkillFilterBtn = document.getElementById('clearSkillFilterBtn');

    const SKILL_PROJECT_MAP = {
        html: ['bloodcare', 'micromate', 'ricelink', 'dermocare', 'cinemate', 'campinglk'],
        css: ['bloodcare', 'micromate', 'ricelink', 'dermocare', 'cinemate', 'campinglk'],
        javascript: ['bloodcare', 'micromate', 'dermocare', 'cinemate', 'campinglk'],
        web: ['bloodcare', 'micromate', 'ricelink', 'dermocare', 'cinemate', 'campinglk'],
        php: ['ricelink'],
        mysql: ['ricelink'],
        nodejs: ['dermocare'],
        python: ['codegenie'],
        tkinter: ['codegenie'],
        systems: ['bloodcare', 'ricelink', 'dermocare']
    };

    function clearSkillFilter() {
        skillChips.forEach((c) => c.classList.remove('active-skill'));
        if (skillFilterBanner) skillFilterBanner.hidden = true;
    }

    filterButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            clearSkillFilter();
            const filter = btn.getAttribute('data-filter');
            filterButtons.forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');

            projectCards.forEach((card) => {
                const category = card.getAttribute('data-category');
                const matches = filter === 'all' || category === filter;
                card.classList.toggle('hidden-card', !matches);
            });
        });
    });

    skillChips.forEach((chip) => {
        chip.addEventListener('click', () => {
            const skillKey = chip.getAttribute('data-skill-filter');
            const matchingKeys = SKILL_PROJECT_MAP[skillKey] || [];

            skillChips.forEach((c) => c.classList.remove('active-skill'));
            chip.classList.add('active-skill');
            filterButtons.forEach((b) => b.classList.remove('active'));

            projectCards.forEach((card) => {
                const key = card.getAttribute('data-project');
                card.classList.toggle('hidden-card', !matchingKeys.includes(key));
            });

            if (skillFilterBanner && skillFilterName) {
                skillFilterName.textContent = chip.textContent.trim();
                skillFilterBanner.hidden = false;
            }

            const projectsSec = document.getElementById('projects');
            if (projectsSec) projectsSec.scrollIntoView({ behavior: 'smooth' });
        });
    });

    if (clearSkillFilterBtn) {
        clearSkillFilterBtn.addEventListener('click', () => {
            clearSkillFilter();
            const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
            if (allBtn) allBtn.click();
        });
    }

    // 10. Project Case Study Modal (with Prev/Next navigation)
    const PROJECT_KEYS = Object.keys(PROJECT_DETAILS);
    let currentProjectIndex = 0;

    const modalOverlay = document.getElementById('projectModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalCategory = document.getElementById('modalCategory');
    const modalCounter = document.getElementById('modalCounter');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalFeatures = document.getElementById('modalFeatures');
    const modalTech = document.getElementById('modalTech');
    const prevProjectBtn = document.getElementById('prevProjectBtn');
    const nextProjectBtn = document.getElementById('nextProjectBtn');

    function openProjectModal(projectKey) {
        const data = PROJECT_DETAILS[projectKey];
        if (!data || !modalOverlay) return;

        currentProjectIndex = Math.max(0, PROJECT_KEYS.indexOf(projectKey));
        modalCategory.textContent = data.category;
        if (modalCounter) {
            modalCounter.textContent = `${currentProjectIndex + 1} / ${PROJECT_KEYS.length}`;
        }
        modalTitle.textContent = data.title;
        modalDescription.textContent = data.description;
        modalFeatures.innerHTML = data.features.map((f) => `<li>${f}</li>`).join('');
        modalTech.innerHTML = data.tech.map((t) => `<span>${t}</span>`).join('');

        modalOverlay.hidden = false;
        document.body.style.overflow = 'hidden';
    }

    function closeProjectModal() {
        if (!modalOverlay || modalOverlay.hidden) return;
        modalOverlay.hidden = true;
        document.body.style.overflow = '';
    }

    if (prevProjectBtn) {
        prevProjectBtn.addEventListener('click', () => {
            const prevIdx = (currentProjectIndex - 1 + PROJECT_KEYS.length) % PROJECT_KEYS.length;
            openProjectModal(PROJECT_KEYS[prevIdx]);
        });
    }

    if (nextProjectBtn) {
        nextProjectBtn.addEventListener('click', () => {
            const nextIdx = (currentProjectIndex + 1) % PROJECT_KEYS.length;
            openProjectModal(PROJECT_KEYS[nextIdx]);
        });
    }

    projectCards.forEach((card) => {
        const key = card.getAttribute('data-project');
        card.addEventListener('click', () => openProjectModal(key));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openProjectModal(key);
            }
        });
    });

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeProjectModal);
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeProjectModal();
        });
    }

    // 10b. Hero Card Portrait / Dev Spec Switcher
    const switchBtns = document.querySelectorAll('.card-switch-btn');
    const portraitView = document.getElementById('heroPortraitView');
    const specView = document.getElementById('heroSpecView');

    switchBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const view = btn.getAttribute('data-view');
            switchBtns.forEach((b) => {
                const isActive = b === btn;
                b.classList.toggle('active', isActive);
                b.setAttribute('aria-selected', String(isActive));
            });
            if (portraitView && specView) {
                portraitView.hidden = view !== 'portrait';
                specView.hidden = view !== 'spec';
            }
        });
    });

    // 10c. Theme Switcher (Dark / Light)
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const savedTheme = localStorage.getItem('anjalie-theme') || 'dark';

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('anjalie-theme', theme);
        if (themeIcon) {
            themeIcon.className = theme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        }
    }
    applyTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const nextTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            applyTheme(nextTheme);
            showToast(`Switched to ${nextTheme === 'light' ? 'Pearl Lavender Light' : 'Midnight Aurora Dark'} theme.`);
        });
    }

    // 10d. CV Summary Modal & Print
    const cvModal = document.getElementById('cvModal');
    const openCvModalBtn = document.getElementById('openCvModalBtn');
    const closeCvModalBtn = document.getElementById('closeCvModalBtn');
    const printCvBtn = document.getElementById('printCvBtn');

    function closeCvModal() {
        if (!cvModal || cvModal.hidden) return;
        cvModal.hidden = true;
        document.body.style.overflow = '';
    }

    if (openCvModalBtn && cvModal) {
        openCvModalBtn.addEventListener('click', () => {
            cvModal.hidden = false;
            document.body.style.overflow = 'hidden';
        });
    }
    if (closeCvModalBtn) closeCvModalBtn.addEventListener('click', closeCvModal);
    if (cvModal) {
        cvModal.addEventListener('click', (e) => {
            if (e.target === cvModal) closeCvModal();
        });
    }
    if (printCvBtn) {
        printCvBtn.addEventListener('click', () => window.print());
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProjectModal();
            closeCvModal();
        }
    });

    // 11. Copy Portfolio Link Button
    const copyBtn = document.getElementById('copyPortfolioBtn');
    const copySubtitle = document.getElementById('copyPortfolioSubtitle');
    if (copyBtn) {
        copyBtn.addEventListener('click', async () => {
            const url = window.location.href.startsWith('http')
                ? window.location.href
                : 'https://anjalie-wickramasinghe.web.app/';
            try {
                await navigator.clipboard.writeText(url);
                if (copySubtitle) copySubtitle.textContent = 'Link copied to clipboard!';
                showToast('Portfolio link copied to clipboard.');
                setTimeout(() => {
                    if (copySubtitle) copySubtitle.textContent = 'Click to copy portfolio link';
                }, 2500);
            } catch {
                showToast('Copy not supported in this browser context.', true);
            }
        });
    }

    // 12. EmailJS Contact Form with Toast Feedback
    if (window.emailjs) {
        emailjs.init('zEDA7fLYScvC8_Nnt');
    }

    const contactForm = document.getElementById('contact-form');
    const sendBtn = document.getElementById('send-btn');

    if (contactForm && sendBtn) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            if (!window.emailjs) {
                showToast('Email service is unavailable offline. Connect via LinkedIn or GitHub!', true);
                return;
            }

            sendBtn.innerHTML = '<span>Sending...</span> <i class="fa-solid fa-spinner fa-spin"></i>';
            sendBtn.disabled = true;

            emailjs.sendForm('service_mrtx1k4', 'template_7e6ruba', this)
                .then(() => {
                    showToast('Thank you! Your message has been sent.');
                    contactForm.reset();
                })
                .catch((error) => {
                    console.error('EmailJS Error:', error);
                    showToast('Could not send right now. Please reach out on LinkedIn or GitHub.', true);
                })
                .finally(() => {
                    sendBtn.innerHTML = '<span>Send Message</span> <i class="fa-solid fa-paper-plane"></i>';
                    sendBtn.disabled = false;
                });
        });
    }

    // 13. Interactive Constellation Particle Canvas (#bg-animation)
    const canvas = document.getElementById('bg-animation');
    if (canvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const ctx = canvas.getContext('2d');
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const particleCount = Math.min(60, Math.floor((width * height) / 24000));
        const pointer = { x: null, y: null };
        const particles = Array.from({ length: particleCount }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            radius: Math.random() * 1.6 + 0.7
        }));

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        window.addEventListener('mousemove', (e) => {
            pointer.x = e.clientX;
            pointer.y = e.clientY;
        }, { passive: true });

        function drawParticles() {
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(196, 181, 253, 0.5)';
                ctx.fill();

                for (let j = i + 1; j < particles.length; j++) {
                    const q = particles[j];
                    const dx = p.x - q.x;
                    const dy = p.y - q.y;
                    const dist = Math.hypot(dx, dy);
                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(q.x, q.y);
                        ctx.strokeStyle = `rgba(167, 139, 250, ${(1 - dist / 120) * 0.14})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }

                if (pointer.x !== null) {
                    const dx = p.x - pointer.x;
                    const dy = p.y - pointer.y;
                    const dist = Math.hypot(dx, dy);
                    if (dist < 140) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(pointer.x, pointer.y);
                        ctx.strokeStyle = `rgba(244, 114, 182, ${(1 - dist / 140) * 0.22})`;
                        ctx.lineWidth = 0.9;
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(drawParticles);
        }
        requestAnimationFrame(drawParticles);
    }

    // 14. Custom Glowing Cursor (Desktop Fine Pointer)
    if (!window.matchMedia('(pointer: coarse)').matches) {
        const dot = document.getElementById('cursorDot');
        const outline = document.getElementById('cursorOutline');
        if (dot && outline) {
            let mouseX = -100;
            let mouseY = -100;
            let outlineX = -100;
            let outlineY = -100;
            let isVisible = false;

            window.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                if (!isVisible) {
                    dot.style.opacity = '1';
                    outline.style.opacity = '1';
                    outlineX = mouseX;
                    outlineY = mouseY;
                    isVisible = true;
                }
                dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
            }, { passive: true });

            function renderCursor() {
                if (isVisible) {
                    outlineX += (mouseX - outlineX) * 0.16;
                    outlineY += (mouseY - outlineY) * 0.16;
                    outline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0) translate(-50%, -50%)`;
                }
                requestAnimationFrame(renderCursor);
            }
            requestAnimationFrame(renderCursor);

            window.addEventListener('mousedown', () => {
                dot.classList.add('cursor-active');
                outline.classList.add('cursor-active');
            });

            window.addEventListener('mouseup', () => {
                dot.classList.remove('cursor-active');
                outline.classList.remove('cursor-active');
            });

            window.addEventListener('click', (e) => {
                if (!isVisible) return;
                const ripple = document.createElement('div');
                ripple.className = 'cursor-ripple';
                ripple.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
                document.body.appendChild(ripple);
                setTimeout(() => ripple.remove(), 500);
            });

            const interactiveSelector = 'a, button, .project-card, .filter-btn, .orbit-icon, .cyber-social-row, [role="button"]';
            document.addEventListener('mouseover', (e) => {
                if (e.target.closest(interactiveSelector)) {
                    dot.classList.add('cursor-hover');
                    outline.classList.add('cursor-hover');
                }
            });
            document.addEventListener('mouseout', (e) => {
                if (e.target.closest(interactiveSelector)) {
                    dot.classList.remove('cursor-hover');
                    outline.classList.remove('cursor-hover');
                }
            });
        }
    }
});
