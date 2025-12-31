// ==========================================
// MENU TOGGLE
// ==========================================
const menuToggle = document.getElementById('menu-toggle');
const navOverlay = document.getElementById('nav-overlay');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navOverlay.classList.toggle('active');
});

// ==========================================
// LOGO BUTTON - RETURN TO HOME
// ==========================================
const logoBtn = document.getElementById('logo-btn');
const mainContent = document.getElementById('main-content');
const sectionLayer = document.getElementById('section-layer');

logoBtn.addEventListener('click', () => {
    // Close section layer if open
    sectionLayer.classList.remove('active');
    mainContent.classList.remove('collapsed');

    // Close menu if open
    menuToggle.classList.remove('active');
    navOverlay.classList.remove('active');
});

// ==========================================
// SECTION NAVIGATION
// ==========================================
const navItems = document.querySelectorAll('[data-section]');
const sectionContent = document.getElementById('section-content');

// Section content data
const sections = {
    work: {
        title: 'Work',
        content: `
            <h2>Selected Work</h2>
            <p>A collection of projects and experiments in development, design, and technology.</p>
            <div class="work-grid">
                <div class="work-item">
                    <h3>Project One</h3>
                    <p>Description of your first project. Add details about what you built and the technologies used.</p>
                </div>
                <div class="work-item">
                    <h3>Project Two</h3>
                    <p>Description of your second project. Highlight the key features and impact.</p>
                </div>
                <div class="work-item">
                    <h3>Project Three</h3>
                    <p>Description of your third project. Share what you learned and accomplished.</p>
                </div>
            </div>
        `
    },
    about: {
        title: 'About',
        content: `
            <h2>About Me</h2>
            <p>I'm Adwait Rajagopal, a developer and creator passionate about building innovative solutions and exploring new technologies.</p>
            <p>My work focuses on creating meaningful digital experiences and pushing the boundaries of what's possible with code.</p>
            <p>When I'm not coding, you can find me exploring new ideas, learning new skills, and connecting with other creators.</p>
        `
    },
    contact: {
        title: 'Contact',
        content: `
            <h2>Get in Touch</h2>
            <p>I'm always interested in hearing about new projects and opportunities.</p>
            <p>Feel free to reach out via email or connect with me on X.</p>
            <div style="margin-top: 3rem;">
                <p><strong>Email:</strong> <a href="mailto:adwaitedu@gmail.com" style="text-decoration: underline;">adwaitedu@gmail.com</a></p>
                <p><strong>X / Twitter:</strong> <a href="https://x.com/adwaitr_" target="_blank" rel="noopener" style="text-decoration: underline;">@adwaitr_</a></p>
            </div>
        `
    }
};

// Handle section navigation
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionName = item.dataset.section;

        if (sections[sectionName]) {
            // Populate content
            sectionContent.innerHTML = sections[sectionName].content;

            // Show section layer
            mainContent.classList.add('collapsed');
            sectionLayer.classList.add('active');

            // Close menu if open
            menuToggle.classList.remove('active');
            navOverlay.classList.remove('active');
        }
    });
});

// ==========================================
// OVERLAY MENU LINKS
// ==========================================
const overlayLinks = document.querySelectorAll('.overlay-link[data-section]');

overlayLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionName = link.dataset.section;

        if (sections[sectionName]) {
            // Populate content
            sectionContent.innerHTML = sections[sectionName].content;

            // Show section layer
            mainContent.classList.add('collapsed');
            sectionLayer.classList.add('active');

            // Close menu
            menuToggle.classList.remove('active');
            navOverlay.classList.remove('active');
        }
    });
});

// ==========================================
// KEYBOARD SHORTCUTS
// ==========================================
document.addEventListener('keydown', (e) => {
    // ESC key - close everything
    if (e.key === 'Escape') {
        sectionLayer.classList.remove('active');
        mainContent.classList.remove('collapsed');
        menuToggle.classList.remove('active');
        navOverlay.classList.remove('active');
    }

    // M key - toggle menu
    if (e.key === 'm' || e.key === 'M') {
        if (!sectionLayer.classList.contains('active')) {
            menuToggle.classList.toggle('active');
            navOverlay.classList.toggle('active');
        }
    }
});

// ==========================================
// CLOSE SECTION LAYER ON OVERLAY CLICK
// ==========================================
sectionLayer.addEventListener('click', (e) => {
    if (e.target === sectionLayer) {
        sectionLayer.classList.remove('active');
        mainContent.classList.remove('collapsed');
    }
});

// ==========================================
// SMOOTH SCROLL FOR SECTION LAYER
// ==========================================
sectionLayer.addEventListener('wheel', (e) => {
    // Prevent default only if we're at scroll boundaries
    const { scrollTop, scrollHeight, clientHeight } = sectionLayer;
    const isAtTop = scrollTop === 0;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight;

    if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
        e.preventDefault();
    }
});

// ==========================================
// INITIALIZATION
// ==========================================
console.log('Site initialized ✨');
console.log('Press M to toggle menu');
console.log('Press ESC to close overlays');
