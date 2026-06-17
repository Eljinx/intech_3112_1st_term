<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#006633">

        <title>With JavaScript Demo | CLSU IT Department</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>

        <nav aria-label="Main navigation">
            <div class="nav-inner">
                <div class="brand">
                    <span class="logo" aria-hidden="true"></span>
                    <span>CLSU IT</span>
                </div>

                <div class="nav-actions" role="tablist" aria-label="Page sections">
                    <button type="button" data-page="home">Home</button>
                    <button type="button" data-page="about">About</button>
                    <button type="button" data-page="courses">Courses</button>
                    <button type="button" data-page="contact">Contact</button>

                    <button type="button" id="goToBtn" class="nav-link">
                        See no JS
                    </button>
                </div>
            </div>
        </nav>

        <main>
            <section id="content" aria-live="polite"></section>
        </main>

        <footer>
            <p>&copy; 2026 CLSU Department of Information Technology</p>
        </footer>

        <script src="js/script.js"></script>

    </body>
</html>
