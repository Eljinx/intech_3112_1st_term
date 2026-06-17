<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <meta name="theme-color" content="#006633">
        <title>Laboratory - JavaScript Basics</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <header class="site-header">
            <div>
                <p class="eyebrow">Laboratory Module 1</p>
                <h1>JavaScript Basics</h1>
                <p class="lead">Try each concept with live inputs. Every demo shows multiple variants so you can compare how JavaScript behaves.</p>
            </div>
            <a class="back-link" href="../index.php">Back to Laboratory</a>
        </header>

        <main>
            <section class="concept-grid" aria-label="Interactive JavaScript concept demos">
                <article class="concept-card">
                    <div class="concept-heading">
                        <span>01</span>
                        <h2>Variables &amp; Data Types</h2>
                    </div>
                    <p>Compare strings, numbers, booleans, arrays, and objects.</p>
                    <div class="field-grid">
                        <label for="varName">Name</label>
                        <input id="varName" type="text" placeholder="Alice">
                        <label for="varAge">Age</label>
                        <input id="varAge" type="number" placeholder="20">
                    </div>
                    <button id="btnVariables" type="button">Show Variants</button>
                </article>

                <article class="concept-card">
                    <div class="concept-heading">
                        <span>02</span>
                        <h2>Operators &amp; Expressions</h2>
                    </div>
                    <p>See arithmetic, comparison, and logical expressions together.</p>
                    <div class="field-grid two-columns">
                        <label for="opA">First number</label>
                        <input id="opA" type="number" placeholder="5">
                        <label for="opB">Second number</label>
                        <input id="opB" type="number" placeholder="3">
                    </div>
                    <button id="btnOperators" type="button">Calculate Variants</button>
                </article>

                <article class="concept-card">
                    <div class="concept-heading">
                        <span>03</span>
                        <h2>Conditional Statements</h2>
                    </div>
                    <p>Check age groups, pass/fail logic, and sign detection.</p>
                    <div class="field-grid">
                        <label for="condAge">Age or score</label>
                        <input id="condAge" type="number" placeholder="18">
                    </div>
                    <button id="btnCondition" type="button">Check Variants</button>
                </article>

                <article class="concept-card">
                    <div class="concept-heading">
                        <span>04</span>
                        <h2>Loops</h2>
                    </div>
                    <p>Generate values using for, while, and array loop patterns.</p>
                    <div class="field-grid">
                        <label for="loopCount">Item count</label>
                        <input id="loopCount" type="number" min="1" max="12" placeholder="5">
                    </div>
                    <button id="btnLoop" type="button">Run Loop Variants</button>
                </article>

                <article class="concept-card">
                    <div class="concept-heading">
                        <span>05</span>
                        <h2>Functions</h2>
                    </div>
                    <p>Compare a declaration, expression, and arrow function.</p>
                    <div class="field-grid">
                        <label for="fnName">Name</label>
                        <input id="fnName" type="text" placeholder="Student">
                    </div>
                    <button id="btnFunction" type="button">Run Function Variants</button>
                </article>
            </section>

            <section class="output-panel" aria-live="polite">
                <div class="output-header">
                    <p class="eyebrow">Output</p>
                    <button id="clearBtn" class="ghost-button" type="button">Clear</button>
                </div>
                <div id="output">
                    <p>Select any concept to see its examples here.</p>
                </div>
            </section>
        </main>

        <script src="js/script.js"></script>
    </body>
</html>
