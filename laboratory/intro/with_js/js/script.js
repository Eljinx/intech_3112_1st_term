(function(){
const pages = {
    home: `
        <div class="page">
            <div class="hero">
                <p class="eyebrow">With JavaScript</p>
                <h1>CLSU Department of Information Technology</h1>
                <p style="font-size:1.05rem;color:#374151;max-width:760px">A fast, dynamic demo where JavaScript swaps views instantly without full page loads. Use the top buttons to switch sections.</p>
                <a class="btn" href="#" data-page-link="courses">Explore Programs</a>
            </div>

            <aside class="panel">
                <h2>Why this demo?</h2>
                <p>JavaScript lets us inject only the content that changes. This improves perceived performance and enables richer interactivity.</p>
                <div class="notice">
                    <p>Try switching sections and then compare with the static version.</p>
                </div>
            </aside>
        </div>
    `,

    about: `
        <div class="page">
            <div class="hero">
                <p class="eyebrow">About</p>
                <h1>About the Department</h1>
                <p>We combine practical labs with industry-relevant coursework to prepare students for real projects.</p>
            </div>
            <aside class="panel">
                <h2>JavaScript's role</h2>
                <p>The About view is created at runtime by <strong>script.js</strong> and inserted into the page container.</p>
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
                    <p>Responsive front-end, modern JS, PHP backends, and deployment workflows.</p>
                </article>
                <article class="card">
                    <h3>Database Systems</h3>
                    <p>Design, normalize, and secure data using SQL and transaction patterns.</p>
                </article>
                <article class="card">
                    <h3>Systems Analysis</h3>
                    <p>Problem framing, UML, and practical software planning for teams.</p>
                </article>
            </div>
            <div class="notice">
                <p>This section is rendered by JavaScript and placed inside <strong>#content</strong>.</p>
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
                <p>JavaScript updates content, manages active states, and improves responsiveness without reloading the page.</p>
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

showPage('home');
})();
