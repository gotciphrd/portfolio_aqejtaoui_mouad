const PROJECTS = [
    {
        id: 1,
        name: 'E-Commerce Platform',
        description: 'A full-stack e-commerce store with shopping cart and checkout',
        image: 'assets/logo.png',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
        id: 2,
        name: 'Weather Application',
        description: 'Real-time weather app with location-based forecasts',
        image: 'assets/logo.png',
        tech: ['HTML', 'CSS', 'JavaScript', 'API'],
    },
    {
        id: 3,
        name: 'Task Management System',
        description: 'Collaborative task management tool with real-time updates',
        image: 'assets/logo.png',
        tech: ['Vue.js', 'Firebase', 'Vuex'],
    },
    {
        id: 4,
        name: 'Social Media Dashboard',
        description: 'Analytics dashboard for managing multiple social accounts',
        image: 'assets/logo.png',
        tech: ['Angular', 'TypeScript', 'RxJS', 'Chart.js'],
    },
    {
        id: 5,
        name: 'Music Streaming App',
        description: 'Mobile-friendly music player with playlist management',
        image: 'assets/logo.png',
        tech: ['React', 'Redux', 'Web Audio API'],
    }
];

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function createProjectCard(project) {
    const imageUrl = project.image;

    const techBadges = project.tech && project.tech.length > 0
        ? `<div class="project-tech-list">
                ${project.tech.map(t => `<span class="tech-badge">${escapeHtml(t)}</span>`).join('')}
            </div>`
        : '';

    return `
        <div class="project-card">
            <img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(project.name)}" class="project-image" onerror="this.src='assets/logo.png'">
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

    if (!PROJECTS || PROJECTS.length === 0) {
        container.innerHTML = '<p class="empty-state">No projects to display.</p>';
        return;
    }

    container.innerHTML = PROJECTS.map(createProjectCard).join('');
}

renderProjects();