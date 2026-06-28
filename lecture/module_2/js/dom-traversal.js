const selectedNode = document.getElementById('selectedNode');
const childRow = selectedNode.parentElement;
const traversalOutput = document.getElementById('traversalOutput');
const traversalButtons = document.querySelectorAll('[data-traversal]');

function clearTraversalHighlights(){
    document.querySelectorAll('.is-active').forEach((node) => {
        node.classList.remove('is-active');
    });
}

function getNodeName(node){
    return node?.dataset.nodeName || node?.tagName.toLowerCase() || 'No element found';
}

function showTraversalResult(property){
    clearTraversalHighlights();

    if(property === 'children'){
        const children = Array.from(childRow.children);

        children.forEach((child) => {
            child.classList.add('is-active');
        });

        traversalOutput.textContent = `element.children returns ${children.length} child elements: ${children.map(getNodeName).join(', ')}.`;
        return;
    }

    const childTraversal = property === 'firstElementChild' || property === 'lastElementChild';
    const sourceElement = childTraversal ? childRow : selectedNode;
    const result = sourceElement[property];

    if(result){
        result.classList.add('is-active');
        traversalOutput.textContent = `element.${property} finds: ${getNodeName(result)}.`;
    }else{
        traversalOutput.textContent = `element.${property} did not find another element from the selected card.`;
    }
}

traversalButtons.forEach((button) => {
    button.addEventListener('click', () => {
        showTraversalResult(button.dataset.traversal);
    });
});

selectedNode.classList.add('is-active');
