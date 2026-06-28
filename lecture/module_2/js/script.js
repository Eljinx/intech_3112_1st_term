const syncButton = document.getElementById('syncDemoBtn');
const asyncButton = document.getElementById('asyncDemoBtn');
const syncOutput = document.getElementById('syncOutput');
const asyncOutput = document.getElementById('asyncOutput');
const clock = document.getElementById('clock');
const fetchButton = document.getElementById('fetchDemoBtn');
const fetchStatus = document.getElementById('fetchStatus');
const fetchList = document.getElementById('fetchList');
const fetchRaw = document.getElementById('fetchRaw');
const apiUrl = 'api/objects.php';

function updateClock(){
    clock.textContent = new Date().toLocaleTimeString();
}

updateClock();
setInterval(updateClock, 1000);

syncButton.addEventListener('click', () => {
    syncOutput.textContent = 'Running synchronous task... the page is blocked for 3 seconds.';

    const start = Date.now();
    while(Date.now() - start < 3000){
        // This intentionally blocks the browser to demonstrate synchronous work.
    }

    syncOutput.textContent = 'Done. Even the "running" message had to wait because the browser was blocked.';
});

asyncButton.addEventListener('click', async () => {
    asyncButton.disabled = true;
    asyncOutput.textContent = 'Running asynchronous task... keep typing or watch the clock.';

    await new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });

    asyncOutput.textContent = 'Done. The page stayed responsive while the task waited.';
    asyncButton.disabled = false;
});

fetchButton.addEventListener('click', async () => {
    fetchButton.disabled = true;
    fetchStatus.textContent = 'Fetching data through a local PHP proxy... the page is still responsive.';
    fetchList.replaceChildren();
    fetchRaw.textContent = 'Loading...';

    try{
        const response = await fetch(apiUrl);

        if(!response.ok){
            throw new Error(`Request failed with status ${response.status}`);
        }

        const objects = await response.json();
        const previewObjects = objects.slice(0, 5);

        previewObjects.forEach((object) => {
            const card = document.createElement('article');
            card.className = 'object-card';

            const name = document.createElement('strong');
            name.textContent = object.name;

            const id = document.createElement('span');
            id.textContent = `ID: ${object.id}`;

            const data = document.createElement('span');
            data.textContent = object.data ? `Data: ${Object.keys(object.data).join(', ')}` : 'Data: none';

            card.append(name, id, data);
            fetchList.append(card);
        });

        fetchRaw.textContent = JSON.stringify(previewObjects, null, 2);
        fetchStatus.textContent = `Loaded ${objects.length} objects with fetch(). Showing the first ${previewObjects.length}.`;
    }catch(error){
        fetchStatus.textContent = `Fetch failed: ${error.message}`;
        fetchRaw.textContent = '[]';
    }finally{
        fetchButton.disabled = false;
    }
});
