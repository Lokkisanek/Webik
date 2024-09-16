document.getElementById('openCaseBtn').addEventListener('click', function() {
    const items = ['Common Item', 'Uncommon Item', 'Rare Item', 'Epic Item', 'Legendary Item'];
    const randomItem = items[Math.floor(Math.random() * items.length)];
    document.getElementById('result').innerText = `You got: ${randomItem}`;
});
