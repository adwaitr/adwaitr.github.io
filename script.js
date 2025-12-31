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
            <h2>Work</h2>
            <div class="work-grid">
                <div class="work-item">
                    <h3>Artha</h3>
                </div>
                <div class="work-item">
                    <h3>Cravetown</h3>
                </div>
                <div class="work-item">
                    <h3>Riot City</h3>
                </div>
            </div>
        `
    },
    writing: {
        title: 'Writing',
        content: `
            <h2>Writing</h2>
            <p>Coming soon.</p>
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
