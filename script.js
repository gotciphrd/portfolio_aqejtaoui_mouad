const PROJECTS = [
    {
        id: 1,
        name: 'E-Commerce Platform',
        description: 'A full-stack e-commerce store with shopping cart and checkout flow.',
        image: 'assets/logo.png',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
        id: 2,
        name: 'Weather Application',
        description: 'Real-time weather app with location-based forecasts and alerts.',
        image: 'assets/logo.png',
        tech: ['HTML', 'CSS', 'JavaScript', 'API'],
    },
    {
        id: 3,
        name: 'Task Management System',
        description: 'Collaborative task management tool with real-time updates.',
        image: 'assets/logo.png',
        tech: ['Vue.js', 'Firebase', 'Vuex'],
    },
    {
        id: 4,
        name: 'Social Media Dashboard',
        description: 'Analytics dashboard for managing multiple social accounts.',
        image: 'assets/logo.png',
        tech: ['Angular', 'TypeScript', 'RxJS', 'Chart.js'],
    },
    {
        id: 5,
        name: 'Music Streaming App',
        description: 'Mobile-friendly music player with playlist management.',
        image: 'assets/logo.png',
        tech: ['React', 'Redux', 'Web Audio API'],
    }
];

function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function createProjectCard(project) {
    const techBadges = project.tech && project.tech.length > 0
        ? `<div class="project-tech-list">
                ${project.tech.map(t => `<span class="tech-badge">${escapeHtml(t)}</span>`).join('')}
            </div>`
        : '';

    return `
        <div class="project-card">
            <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.name)}" class="project-image" onerror="this.src='assets/logo.png'">
            <div class="project-content">
                <h3 class="project-title">${escapeHtml(project.name)}</h3>
                <p class="project-desc">${escapeHtml(project.description)}</p>
                ${techBadges}
            </div>
        </div>
    `;
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    if (!PROJECTS || PROJECTS.length === 0) {
        container.innerHTML = '<p class="empty-state">No projects to display.</p>';
        return;
    }

    container.innerHTML = PROJECTS.map(createProjectCard).join('');
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                document.querySelector('nav')?.classList.remove('active');
            }
        });
    });
}

function initMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            toggle.textContent = nav.classList.contains('active') ? '✕' : '☰';
        });
    }
}

function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

function initDynamicHeader() {
    const header = document.getElementById('main-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

function initCommissionForm() {
    const form = document.getElementById('commission-form');
    const status = document.getElementById('form-status');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        if (!data.name || !data.email || !data.type || !data.budget || !data.message) {
            status.textContent = 'Please fill in all fields.';
            status.className = 'form-status error';
            return;
        }

        status.textContent = 'Sending your request...';
        status.className = 'form-status';

        setTimeout(() => {
            status.textContent = 'Request sent successfully! I will get back to you within 24 hours.';
            status.className = 'form-status success';
            form.reset();
        }, 1500);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    initSmoothScroll();
    initMobileMenu();
    initActiveNav();
    initDynamicHeader();
    initCommissionForm();
});