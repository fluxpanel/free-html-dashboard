/**
 * Flux Admin Panel - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sidebar Toggle Logic
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    // Sub-menu Toggle Logic
    const hasSubmenu = document.querySelectorAll('.has-submenu');
    hasSubmenu.forEach(item => {
        const link = item.querySelector('.menu-link');
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Toggle current
            item.classList.toggle('open');
            
            // Optional: Close other submenus (Accordion style)
            hasSubmenu.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('open');
                }
            });
        });
    });

    // 2. Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const html = document.documentElement;

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            html.setAttribute('data-theme', newTheme);
            
            // Update icon
            if (newTheme === 'dark') {
                themeIcon.setAttribute('data-lucide', 'sun');
            } else {
                themeIcon.setAttribute('data-lucide', 'moon');
            }
            lucide.createIcons();
        });
    }

    // 3. Initialize Charts (Conditional)
    
    // Revenue Chart (Analytics Dashboard)
    const revenueCanvas = document.getElementById('revenueChart');
    if (revenueCanvas) {
        const revenueCtx = revenueCanvas.getContext('2d');
        new Chart(revenueCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                datasets: [{
                    label: 'Revenue',
                    data: [30, 45, 35, 50, 40, 60, 55, 70, 65, 80],
                    borderColor: '#6366f1',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0,
                    pointHoverRadius: 6,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { color: '#64748b' } },
                    x: { grid: { display: false }, ticks: { color: '#64748b' } }
                }
            }
        });
    }

    // User Distribution Chart (Analytics Dashboard)
    const userCanvas = document.getElementById('userChart');
    if (userCanvas) {
        const userCtx = userCanvas.getContext('2d');
        new Chart(userCtx, {
            type: 'doughnut',
            data: {
                labels: ['Desktop', 'Mobile', 'Tablet'],
                datasets: [{
                    data: [55, 35, 10],
                    backgroundColor: ['#6366f1', '#ec4899', '#8b5cf6'],
                    borderWidth: 0,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { usePointStyle: true, padding: 20, color: '#64748b' }
                    }
                }
            }
        });
    }

    // Sales Performance Chart (Ecommerce Dashboard)
    const salesCanvas = document.getElementById('salesPerformanceChart');
    if (salesCanvas) {
        const salesCtx = salesCanvas.getContext('2d');
        new Chart(salesCtx, {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Sales',
                    data: [400, 600, 500, 800, 700, 900, 850],
                    backgroundColor: '#6366f1',
                    borderRadius: 8,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { color: '#64748b' } },
                    x: { grid: { display: false }, ticks: { color: '#64748b' } }
                }
            }
        });
    }

    // Category Distribution Chart (Ecommerce Dashboard)
    const categoryCanvas = document.getElementById('categoryChart');
    if (categoryCanvas) {
        const categoryCtx = categoryCanvas.getContext('2d');
        new Chart(categoryCtx, {
            type: 'polarArea',
            data: {
                labels: ['Electronics', 'Fashion', 'Home', 'Audio'],
                datasets: [{
                    data: [40, 25, 20, 15],
                    backgroundColor: ['rgba(99, 102, 241, 0.7)', 'rgba(236, 72, 153, 0.7)', 'rgba(139, 92, 246, 0.7)', 'rgba(16, 185, 129, 0.7)'],
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom', labels: { usePointStyle: true, color: '#64748b' } }
                }
            }
        });
    }

    // Pipeline Chart (CRM Dashboard)
    const pipelineCanvas = document.getElementById('pipelineChart');
    if (pipelineCanvas) {
        const pipelineCtx = pipelineCanvas.getContext('2d');
        new Chart(pipelineCtx, {
            type: 'bar',
            data: {
                labels: ['Prospecting', 'Qualification', 'Proposal', 'Negotiation', 'Closed'],
                datasets: [{
                    label: 'Deals',
                    data: [120, 90, 60, 40, 30],
                    backgroundColor: ['#6366f1', '#ec4899', '#8b5cf6', '#10b981', '#f59e0b'],
                    borderRadius: 8,
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { color: '#64748b' } },
                    y: { grid: { display: false }, ticks: { color: '#64748b' } }
                }
            }
        });
    }

    // Lead Source Chart (CRM Dashboard)
    const leadSourceCanvas = document.getElementById('leadSourceChart');
    if (leadSourceCanvas) {
        const leadSourceCtx = leadSourceCanvas.getContext('2d');
        new Chart(leadSourceCtx, {
            type: 'doughnut',
            data: {
                labels: ['Social Media', 'Referral', 'Email', 'Organic'],
                datasets: [{
                    data: [35, 25, 25, 15],
                    backgroundColor: ['#6366f1', '#ec4899', '#8b5cf6', '#10b981'],
                    borderWidth: 0,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '75%',
                plugins: {
                    legend: { position: 'bottom', labels: { usePointStyle: true, padding: 20, color: '#64748b' } }
                }
            }
        });
    }

    // Cash Flow Chart (Finance Dashboard)
    const cashFlowCanvas = document.getElementById('cashFlowChart');
    if (cashFlowCanvas) {
        const cashFlowCtx = cashFlowCanvas.getContext('2d');
        new Chart(cashFlowCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Income',
                        data: [5000, 7000, 6000, 8000, 7500, 9000],
                        borderColor: '#10b981',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'Expenses',
                        data: [3000, 4000, 3500, 5000, 4500, 5500],
                        borderColor: '#ef4444',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'top', labels: { color: '#64748b' } } },
                scales: {
                    y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { color: '#64748b' } },
                    x: { grid: { display: false }, ticks: { color: '#64748b' } }
                }
            }
        });
    }

    // Budget Allocation Chart (Finance Dashboard)
    const budgetCanvas = document.getElementById('budgetChart');
    if (budgetCanvas) {
        const budgetCtx = budgetCanvas.getContext('2d');
        new Chart(budgetCtx, {
            type: 'doughnut',
            data: {
                labels: ['Housing', 'Food', 'Transport', 'Entertainment', 'Others'],
                datasets: [{
                    data: [40, 20, 15, 15, 10],
                    backgroundColor: ['#6366f1', '#ec4899', '#8b5cf6', '#10b981', '#f59e0b'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: { position: 'bottom', labels: { usePointStyle: true, padding: 20, color: '#64748b' } }
                }
            }
        });
    }

    // Project Progress Chart (Project Dashboard)
    const projectProgressCanvas = document.getElementById('projectProgressChart');
    if (projectProgressCanvas) {
        const projectProgressCtx = projectProgressCanvas.getContext('2d');
        new Chart(projectProgressCtx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
                datasets: [{
                    label: 'Completion Rate',
                    data: [10, 25, 45, 60, 75, 85],
                    borderColor: '#6366f1',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 4,
                    pointBackgroundColor: '#6366f1',
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: true, max: 100, grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { color: '#64748b', callback: value => value + '%' } },
                    x: { grid: { display: false }, ticks: { color: '#64748b' } }
                }
            }
        });
    }

    // Task Status Chart (Project Dashboard)
    const taskStatusCanvas = document.getElementById('taskStatusChart');
    if (taskStatusCanvas) {
        const taskStatusCtx = taskStatusCanvas.getContext('2d');
        new Chart(taskStatusCtx, {
            type: 'bar',
            data: {
                labels: ['To Do', 'In Progress', 'In Review', 'Completed'],
                datasets: [{
                    data: [15, 25, 10, 50],
                    backgroundColor: ['#f59e0b', '#6366f1', '#8b5cf6', '#10b981'],
                    borderRadius: 8,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { color: '#64748b' } },
                    x: { grid: { display: false }, ticks: { color: '#64748b' } }
                }
            }
        });
    }

    // 5. Active Link Handling
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.parentElement.classList.contains('has-submenu')) return;
            menuLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
