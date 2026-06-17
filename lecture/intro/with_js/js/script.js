const pages = {
    home: `
        <div class="page">
            <div class="hero">
                <p class="eyebrow">With JavaScript</p>
                <h1>Welcome to CLSU IT</h1>
                <p>This version uses JavaScript to swap content instantly when a navigation button is selected.</p>
                <a class="btn" href="#" data-page-link="courses">View Courses</a>
            </div>

            <aside class="panel">
                <h2>What changed?</h2>
                <p>HTML still provides the container, CSS still controls the look, but JavaScript controls what appears inside the page.</p>
                <div class="stats">
                    <div class="stat">
                        <strong>1</strong>
                        <span>content area</span>
                    </div>
                    <div class="stat">
                        <strong>4</strong>
                        <span>views loaded by JS</span>
                    </div>
                </div>
                <div class="notice">
                    <p>Turn JavaScript off and this dynamic content will not be created.</p>
                </div>
            </aside>
        </div>
    `,

    about: `
        <div class="page">
            <div class="hero">
                <p class="eyebrow">About</p>
                <h1>About the Department</h1>
                <p>The Department of Information Technology develops competent IT professionals equipped with modern technological skills.</p>
            </div>
            <aside class="panel">
                <h2>JavaScript's role</h2>
                <p>The About view is not written directly in the visible HTML body. It is stored in <strong>script.js</strong> and inserted only after the script runs.</p>
            </aside>
        </div>
    `,

    courses: `
        <div>
            <p class="eyebrow">Programs</p>
            <h1>Courses Offered</h1>
            <div class="cards">
                <article class="card">
                    <h3>Web Development</h3>
                    <p>HTML, CSS, JavaScript, PHP, and Laravel fundamentals for building complete web experiences.</p>
                </article>
                <article class="card">
                    <h3>Database Systems</h3>
                    <p>MySQL, SQL Server, and database design for organizing, querying, and protecting information.</p>
                </article>
                <article class="card">
                    <h3>System Analysis & Design</h3>
                    <p>Requirements gathering, process modeling, and software planning for real-world systems.</p>
                </article>
            </div>
            <div class="notice">
                <p>This whole course section is generated from a JavaScript template, then placed inside <strong>#content</strong>.</p>
            </div>
        </div>
    `,

    contact: `
        <div class="page">
            <div class="hero">
                <p class="eyebrow">Contact</p>
                <h1>Contact Us</h1>
                <p>Email: <a href="mailto:dit@clsu.edu.ph">dit@clsu.edu.ph</a></p>
                <p>Phone: <a href="tel:+63441234567">(044) 123-4567</a></p>
            </div>
            <aside class="panel">
                <h2>Modern behavior</h2>
                <p>JavaScript can update content, active buttons, forms, menus, maps, animations, and data without loading a new page.</p>
            </aside>
        </div>
    `
};

const content = document.getElementById('content');
const buttons = document.querySelectorAll('[data-page]');

function showPage(page){
    content.innerHTML = pages[page];

    buttons.forEach((button) => {
        const isActive = button.dataset.page === page;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-selected', isActive);
    });
}

buttons.forEach((button) => {
    button.addEventListener('click', () => showPage(button.dataset.page));
});

content.addEventListener('click', (event) => {
    const link = event.target.closest('[data-page-link]');

    if(!link){
        return;
    }

    event.preventDefault();
    showPage(link.dataset.pageLink);
});

document.getElementById('goToBtn').addEventListener('click', () => {
    window.location.href = '../no_js/index.php';

});

document.getElementById('modules').addEventListener('click', () => {
    window.location.href = '../../index.php';
});

showPage('home');
