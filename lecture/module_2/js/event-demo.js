const eventOutput = document.getElementById('eventOutput');
const clickDemo = document.getElementById('clickDemo');
const doubleClickDemo = document.getElementById('doubleClickDemo');
const hoverDemo = document.getElementById('hoverDemo');
const keyDemo = document.getElementById('keyDemo');
const inputDemo = document.getElementById('inputDemo');
const changeDemo = document.getElementById('changeDemo');
const eventForm = document.getElementById('eventForm');

function showEvent(name, detail){
    eventOutput.textContent = detail ? `${name}: ${detail}` : `${name} event fired.`;
}

clickDemo.addEventListener('click', () => {
    showEvent('click', 'The button was clicked once.');
});

doubleClickDemo.addEventListener('dblclick', () => {
    showEvent('dblclick', 'The button was clicked twice quickly.');
});

hoverDemo.addEventListener('mouseover', () => {
    showEvent('mouseover', 'The pointer entered the hover box.');
});

hoverDemo.addEventListener('mouseout', () => {
    showEvent('mouseout', 'The pointer left the hover box.');
});

keyDemo.addEventListener('keydown', (event) => {
    showEvent('keydown', `Key pressed: ${event.key}`);
});

keyDemo.addEventListener('keyup', (event) => {
    showEvent('keyup', `Key released: ${event.key}`);
});

inputDemo.addEventListener('input', () => {
    showEvent('input', `Current value: ${inputDemo.value || 'empty'}`);
});

changeDemo.addEventListener('change', () => {
    showEvent('change', `Selected value: ${changeDemo.value || 'none'}`);
});

eventForm.addEventListener('submit', (event) => {
    event.preventDefault();
    showEvent('submit', 'The form submit was caught with preventDefault().');
});
