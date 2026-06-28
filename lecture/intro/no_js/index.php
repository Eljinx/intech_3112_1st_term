<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#0f766e">

        <title>No JavaScript Demo | CLSU IT Department</title>

        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/style.css">

    </head>
    <body>

        <nav aria-label="Main navigation">
            <div class="nav-inner">
                <div class="brand">
                    <span class="logo" aria-hidden="true"></span>
                    <span class="brand-text">CLSU IT</span>
                </div>

                <div class="nav-links" aria-label="Page sections">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#courses">Courses</a>
                    <a href="#contact">Contact</a>

                    <a href="../with_js/index.php" class="nav-link">See with JS</a>
                    <a href="../../index.php" class="nav-link" style="background:black;">Back to Lecture Modules</a>
                </div>
            </div>
        </nav>

        <main>
            <section id="home">
                <div class="hero">
                    <div class="hero-copy">
                        <p class="eyebrow">HTML + CSS only</p>
                        <h1>Welcome to CLSU IT</h1>
                        <p>This static version proves a page can still be responsive, readable, and useful without JavaScript.</p>
                        <a class="btn" href="#courses">View Courses</a>
                    </div>

                    <aside class="feature-panel" aria-label="No JavaScript highlights">
                        <h2>No JavaScript Required</h2>
                        <p>Anchor links move between sections, CSS handles the layout, and the content remains available even when scripts are unavailable.</p>
                        <dl>
                            <div>
                                <dt>0</dt>
                                <dd>script files</dd>
                            </div>
                            <div>
                                <dt>4</dt>
                                <dd>working sections</dd>
                            </div>
                        </dl>
                    </aside>
                </div>
            </section>

            <section id="about">
                <p class="section-label">About</p>
                <h1>About the Department</h1>
                <p>The Department of Information Technology offers industry-relevant programs designed to prepare students for modern careers in tech.</p>
            </section>

            <section id="courses">
                <p class="section-label">Programs</p>
                <h1>Courses Offered</h1>

                <div class="cards">
                    <div class="card">
                        <h3>Web Development</h3>
                        <p>HTML, CSS, JavaScript, PHP, and Laravel fundamentals for building complete web experiences.</p>
                    </div>

                    <div class="card">
                        <h3>Database Systems</h3>
                        <p>MySQL, SQL Server, and database design for organizing, querying, and protecting information.</p>
                    </div>

                    <div class="card">
                        <h3>System Analysis & Design</h3>
                        <p>Requirements gathering, process modeling, and software planning for real-world systems.</p>
                    </div>
                </div>
            </section>

            <section id="contact">
                <p class="section-label">Contact</p>
                <h1>Contact Us</h1>
                <address>
                    <p>Email: <a href="mailto:dit@clsu.edu.ph">dit@clsu.edu.ph</a></p>
                    <p>Phone: <a href="tel:+63441234567">(044) 123-4567</a></p>
                </address>
            </section>
        </main>

        <footer>
            <p>&copy; 2026 CLSU Department of Information Technology</p>
            </footer>

    </body>
</html>