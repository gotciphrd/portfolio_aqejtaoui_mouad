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

// UI Manager
const ProjectUI = {
    container: null,
    PROJECTS_TO_SHOW: 3,

    init() {
        this.container = document.getElementById('projects-container');

        // Initial render
        this.render();
    },

    render() {
        const projects = ProjectDB.getAll();

        if (projects.length === 0) {
            this.container.innerHTML = '<div class="empty-state">No projects yet.</div>';
            return;
        }
        
        // Show only first 3 projects
        const visibleProjects = projects.slice(0, this.PROJECTS_TO_SHOW);
        
        let html = visibleProjects
            .map(project => this.createCard(project))
            .join('');
        
        // Add Show More button if there are more projects than the limit
        if (projects.length > this.PROJECTS_TO_SHOW) {
            html += this.createShowMoreButton();
        }
        
        this.container.innerHTML = html;
    },

    createCard(project) {
        const imageUrl = project.image || 'assets/logo.png';
        
        return `
            <div class="project-card">
                <img src="${this.escapeHtml(imageUrl)}" alt="${this.escapeHtml(project.name)}" class="project-image" onerror="this.src='assets/logo.png'">
                <div class="project-content">
                    <h3 class="project-title">${this.escapeHtml(project.name)}</h3>
                    <p class="project-desc">${this.escapeHtml(project.description)}</p>
                    
                    ${project.tech && project.tech.length > 0 ? `
                        <div class="project-tech-list">
                            ${project.tech.map(t => `<span class="tech-badge">${this.escapeHtml(t)}</span>`).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    },

    createShowMoreButton() {
        return `
            <div class="show-more-container">
                <a href="projects.html" class="show-more-btn">Show More Projects</a>
            </div>
        `;
    },

    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }
};