const out = document.getElementById('output');

const varName = document.getElementById('varName');
const varAge = document.getElementById('varAge');
const btnVariables = document.getElementById('btnVariables');

const opA = document.getElementById('opA');
const opB = document.getElementById('opB');
const btnOperators = document.getElementById('btnOperators');

const condAge = document.getElementById('condAge');
const btnCondition = document.getElementById('btnCondition');

const loopCount = document.getElementById('loopCount');
const btnLoop = document.getElementById('btnLoop');

const fnName = document.getElementById('fnName');
const btnFunction = document.getElementById('btnFunction');
const clearBtn = document.getElementById('clearBtn');

function escapeHtml(value){
    return String(value)
        .replaceAll('&','&amp;')
        .replaceAll('<','&lt;')
        .replaceAll('>','&gt;')
        .replaceAll('"','&quot;')
        .replaceAll("'","&#039;");
}

function numberFromInput(input, fallback){
    const parsed = Number(input.value);
    return Number.isFinite(parsed) ? parsed : fallback;
}

function show(title, cards){
    out.innerHTML = `
        <h3>${title}</h3>
        <div class="result-stack">
            ${cards.map((card) => `
                <article class="result-card">
                    <span class="result-label">${card.label}</span>
                    ${card.body}
                </article>
            `).join('')}
        </div>
    `;
}

btnVariables.addEventListener('click', () => {
    const name = varName.value.trim() || 'Alice';
    const safeName = escapeHtml(name);
    const age = numberFromInput(varAge, 20);
    const enrolledCourses = ['Web Development','Database Systems','System Analysis'];
    const student = {
        name,
        age,
        active: true
    };

    show('Variables & Data Types', [
        {
            label:'Variant 1: Primitive values',
            body:`
                <p><code>let name = "${safeName}"</code> creates a <strong>${typeof name}</strong>.</p>
                <p><code>const age = ${age}</code> creates a <strong>${typeof age}</strong>.</p>
                <p><code>let isActive = true</code> creates a <strong>${typeof true}</strong>.</p>
            `
        },
        {
            label:'Variant 2: Array value',
            body:`
                <p><code>courses</code> stores multiple values in one variable.</p>
                <ul>${enrolledCourses.map((course) => `<li>${course}</li>`).join('')}</ul>
            `
        },
        {
            label:'Variant 3: Object value',
            body:`
                <p><code>student.name</code> is <strong>${safeName}</strong>.</p>
                <p><code>student.age</code> is <strong>${student.age}</strong>.</p>
                <p><code>typeof student</code> returns <strong>${typeof student}</strong>.</p>
            `
        }
    ]);
});

btnOperators.addEventListener('click', () => {
    const a = numberFromInput(opA, 5);
    const b = numberFromInput(opB, 3);
    const division = b === 0 ? 'Cannot divide by zero' : (a / b).toFixed(2);
    const remainder = b === 0 ? 'NaN' : a % b;
    const bothPositive = a > 0 && b > 0;

    show('Operators & Expressions', [
        {
            label:'Variant 1: Arithmetic operators',
            body:`
                <p><code>${a} + ${b}</code> = <strong>${a + b}</strong></p>
                <p><code>${a} - ${b}</code> = <strong>${a - b}</strong></p>
                <p><code>${a} * ${b}</code> = <strong>${a * b}</strong></p>
                <p><code>${a} / ${b}</code> = <strong>${division}</strong></p>
                <p><code>${a} % ${b}</code> = <strong>${remainder}</strong></p>
            `
        },
        {
            label:'Variant 2: Comparison operators',
            body:`
                <p><code>${a} > ${b}</code> is <strong>${a > b}</strong>.</p>
                <p><code>${a} === ${b}</code> is <strong>${a === b}</strong>.</p>
                <p><code>${a} !== ${b}</code> is <strong>${a !== b}</strong>.</p>
            `
        },
        {
            label:'Variant 3: Logical expression',
            body:`
                <p><code>${a} > 0 && ${b} > 0</code> is <strong>${bothPositive}</strong>.</p>
                <p>This checks if both numbers are positive at the same time.</p>
            `
        }
    ]);
});

btnCondition.addEventListener('click', () => {
    const value = numberFromInput(condAge, 18);
    let ageGroup = 'Child';
    if(value >= 18){
        ageGroup = 'Adult';
    } else if(value >= 13){
        ageGroup = 'Teenager';
    }

    const passFail = value >= 75 ? 'Passed' : 'Needs improvement';
    let sign = 'Zero';
    if(value > 0){
        sign = 'Positive';
    } else if(value < 0){
        sign = 'Negative';
    }

    show('Conditional Statements', [
        {
            label:'Variant 1: if / else if / else',
            body:`<p>Using age logic, <code>${value}</code> is classified as <strong>${ageGroup}</strong>.</p>`
        },
        {
            label:'Variant 2: Ternary operator',
            body:`<p><code>${value} >= 75 ? "Passed" : "Needs improvement"</code> returns <strong>${passFail}</strong>.</p>`
        },
        {
            label:'Variant 3: Nested decision',
            body:`<p>The value <code>${value}</code> is <strong>${sign}</strong>.</p>`
        }
    ]);
});

btnLoop.addEventListener('click', () => {
    const count = Math.min(12, Math.max(1, Math.trunc(numberFromInput(loopCount, 5))));
    const forItems = [];
    for(let i = 1; i <= count; i++){
        forItems.push(`Item ${i}`);
    }

    const whileItems = [];
    let current = count;
    while(current >= 1){
        whileItems.push(current);
        current--;
    }

    const courses = ['HTML','CSS','JavaScript'].map((course, index) => `${index + 1}. ${course}`);

    show('Loops', [
        {
            label:'Variant 1: for loop',
            body:`<p>Counts upward from 1 to ${count}.</p><ol>${forItems.map((item) => `<li>${item}</li>`).join('')}</ol>`
        },
        {
            label:'Variant 2: while loop',
            body:`<p>Counts downward while the value is still at least 1.</p><ol>${whileItems.map((item) => `<li>${item}</li>`).join('')}</ol>`
        },
        {
            label:'Variant 3: array map loop',
            body:`<p>Transforms each course name into a numbered label.</p><ul>${courses.map((course) => `<li>${course}</li>`).join('')}</ul>`
        }
    ]);
});

btnFunction.addEventListener('click', () => {
    const name = fnName.value.trim() || 'Student';
    const safeName = escapeHtml(name);

    function greetDeclaration(person){
        return `Hello, ${person}.`;
    }

    const greetExpression = function(person){
        return `${person}, your lab activity is ready.`;
    };

    const greetArrow = (person) => `Welcome back, ${person}!`;

    show('Functions', [
        {
            label:'Variant 1: Function declaration',
            body:`<p><code>greetDeclaration("${safeName}")</code> returns <strong>${escapeHtml(greetDeclaration(name))}</strong></p>`
        },
        {
            label:'Variant 2: Function expression',
            body:`<p><code>greetExpression("${safeName}")</code> returns <strong>${escapeHtml(greetExpression(name))}</strong></p>`
        },
        {
            label:'Variant 3: Arrow function',
            body:`<p><code>greetArrow("${safeName}")</code> returns <strong>${escapeHtml(greetArrow(name))}</strong></p>`
        }
    ]);
});

clearBtn.addEventListener('click', () => {
    out.innerHTML = '<p>Select any concept to see its examples here.</p>';
});
