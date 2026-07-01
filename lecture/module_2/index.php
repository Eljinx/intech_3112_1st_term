<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#006633">

        <title>Module 2 - Synchronous and Asynchronous JavaScript</title>
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

                <div class="nav-actions">
                    <a href="../index.php">Lecture Modules</a>
                    <a href="../../index.php">Home</a>
                </div>
            </div>
        </nav>

        <main>
            <section class="hero" aria-labelledby="lesson-title">
                <p class="eyebrow">Module 2</p>
                <h1 id="lesson-title">Synchronous vs Asynchronous JavaScript</h1>
                <p>Synchronous work finishes one step at a time and can pause the whole website. Asynchronous work waits in the background so the page can keep responding.</p>
            </section>

            <section class="demo-layout" aria-label="Interactive JavaScript timing demo">
                <article class="demo-panel" aria-labelledby="sync-title">
                    <div class="demo-heading">
                        <span class="badge sync">Sync</span>
                        <h2 id="sync-title">Synchronous task</h2>
                    </div>
                    <p>This task uses a blocking loop for three seconds. While it runs, clicking, typing, clock updates, and status messages must wait.</p>
                    <button type="button" class="demo-btn" id="syncDemoBtn">Run synchronous task</button>
                    <div class="output" id="syncOutput" aria-live="polite">Waiting to run.</div>
                </article>

                <article class="demo-panel" aria-labelledby="async-title">
                    <div class="demo-heading">
                        <span class="badge async">Async</span>
                        <h2 id="async-title">Asynchronous task</h2>
                    </div>
                    <p>This task uses a timed promise for three seconds. While it waits, the page stays usable and the clock keeps moving.</p>
                    <button type="button" class="demo-btn" id="asyncDemoBtn">Run asynchronous task</button>
                    <div class="output" id="asyncOutput" aria-live="polite">Waiting to run.</div>
                </article>
            </section>

            <section class="playground" aria-label="Responsiveness test">
                <div>
                    <p class="eyebrow">Try it</p>
                    <h2>Test page responsiveness</h2>
                    <p>Run each task, then try typing below and watching the live clock. The synchronous task freezes the browser; the asynchronous task lets it keep working.</p>
                </div>

                <label class="test-field">
                    <span>Can you type?</span>
                    <input type="text" id="typingTest" placeholder="Try typing during each task">
                </label>

                <div class="clock" aria-live="polite">
                    <span>Live clock</span>
                    <strong id="clock">--:--:--</strong>
                </div>
            </section>

            <section class="fetch-demo" aria-labelledby="fetch-title">
                <div class="fetch-copy">
                    <p class="eyebrow">Real async request</p>
                    <h2 id="fetch-title">Using fetch()</h2>
                    <p><code>fetch()</code> asks for data and returns a promise, so JavaScript can wait for the response without freezing the page. This demo calls a local PHP proxy that reads <code>https://api.restful-api.dev/objects</code>.</p>
                    <button type="button" class="demo-btn fetch-btn" id="fetchDemoBtn">Fetch objects from API</button>
                    <div class="output" id="fetchStatus" aria-live="polite">No request yet.</div>
                </div>

                <div class="fetch-results" aria-label="Fetched API objects">
                    <div id="fetchList" class="object-list">
                        <p>Fetched objects will appear here.</p>
                    </div>
                    <pre id="fetchRaw" aria-label="Raw JSON preview">[]</pre>
                </div>
            </section>

            <section class="traversal-demo" aria-labelledby="traversal-title">
                <div class="traversal-copy">
                    <p class="eyebrow">DOM traversal</p>
                    <h2 id="traversal-title">Moving between related elements</h2>
                    <p>Click a traversal property to highlight the related element JavaScript finds in the card row.</p>
                </div>

                <div class="family-tree" id="familyTree" aria-label="DOM traversal sample">
                    <article class="tree-card parent" data-node-name="Parent element">
                        <strong>Parent element</strong>
                        <span><code>&lt;article&gt;</code> wraps the row parent</span>

                        <div class="children-row" data-node-name="Parent element">
                            <div class="tree-card child first-child" data-node-name="First child">
                                <strong>First child</strong>
                                <span>Previous sibling of selected</span>
                            </div>

                            <div class="tree-card child selected-child" id="selectedNode" data-node-name="Selected element">
                                <strong>Selected element</strong>
                                <span>The starting point</span>
                            </div>

                            <div class="tree-card child last-child" data-node-name="Last child">
                                <strong>Last child</strong>
                                <span>Next sibling of selected</span>
                            </div>
                        </div>
                    </article>
                </div>

                <div class="traversal-controls" aria-label="DOM traversal buttons">
                    <button type="button" data-traversal="parentElement">element.parentElement</button>
                    <button type="button" data-traversal="children">element.children</button>
                    <button type="button" data-traversal="firstElementChild">element.firstElementChild</button>
                    <button type="button" data-traversal="lastElementChild">element.lastElementChild</button>
                    <button type="button" data-traversal="previousElementSibling">element.previousElementSibling</button>
                    <button type="button" data-traversal="nextElementSibling">element.nextElementSibling</button>
                </div>

                <div class="output traversal-output" id="traversalOutput" aria-live="polite">
                    Selected element is the starting point.
                </div>
            </section>

            <section class="event-demo" aria-labelledby="event-title">
                <div class="event-copy">
                    <p class="eyebrow">DOM events</p>
                    <h2 id="event-title">Common event listeners</h2>
                    <p>Use each control once to see when that browser event runs.</p>
                </div>

                <div class="event-grid">
                    <button type="button" class="event-card" id="clickDemo">
                        <strong>click</strong>
                        <span>Click this button</span>
                    </button>

                    <button type="button" class="event-card" id="doubleClickDemo">
                        <strong>dblclick</strong>
                        <span>Double-click this button</span>
                    </button>

                    <div class="event-card hover-card" id="hoverDemo" tabindex="0">
                        <strong>mouseover / mouseout</strong>
                        <span>Move the mouse in and out</span>
                    </div>

                    <label class="event-field">
                        <span>keydown / keyup</span>
                        <input type="text" id="keyDemo" placeholder="Press any key">
                    </label>

                    <label class="event-field">
                        <span>input</span>
                        <input type="text" id="inputDemo" placeholder="Type text">
                    </label>

                    <form class="event-form" id="eventForm">
                        <label class="event-field">
                            <span>change</span>
                            <select id="changeDemo">
                                <option value="">Choose a status</option>
                                <option value="ready">Ready</option>
                                <option value="reviewing">Reviewing</option>
                                <option value="done">Done</option>
                            </select>
                        </label>

                        <button type="submit" class="demo-btn event-submit">submit</button>
                    </form>
                </div>

                <div class="output event-output" id="eventOutput" aria-live="polite">
                    Waiting for an event.
                </div>
            </section>

            <section class="timeline" aria-label="Execution comparison">
                <div>
                    <strong>Sync flow</strong>
                    <span>Click button -> browser waits -> result appears -> page responds again</span>
                </div>
                <div>
                    <strong>Async flow</strong>
                    <span>Click button -> timer starts -> page keeps responding -> result appears later</span>
                </div>
                <div>
                    <strong>fetch() flow</strong>
                    <span>Click button -> request starts -> API responds -> JSON is displayed</span>
                </div>
            </section>
        </main>

        <footer>
            <p>&copy; 2026 CLSU Department of Information Technology</p>
        </footer>

        <script src="js/script.js"></script>
        <script src="js/dom-traversal.js"></script>
        <script src="js/event-demo.js"></script>

        <script type="text/javascript" src="js/jquery.min.js">

            $.ajax({
                method: "GET",
                url: "api/objects.php",
                dataType: "json",
                success: function(data) {

                }
                error: function() {
                    
                }
            })

        </script>

        <script>
            
        </script>
    </body>
</html>
