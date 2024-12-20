function showResults(results) {
    const resultsContainer = document.getElementById('results');
    const resultCards = document.getElementById('resultCards');
    resultCards.innerHTML = '';

    results.forEach(result => {
        const card = createResultCard(result);
        resultCards.appendChild(card);
    });

    resultsContainer.classList.remove('hidden');
}

function createResultCard(result) {
    const card = document.createElement('div');
    card.className = 'result-card';

    const header = document.createElement('div');
    header.className = 'result-header';

    const category = document.createElement('span');
    category.className = 'result-category';
    category.textContent = result.category;

    const percentage = document.createElement('span');
    percentage.className = 'result-percentage';
    percentage.textContent = `${result.percentage.toFixed(1)}%`;

    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';

    const progressFill = document.createElement('div');
    progressFill.className = 'progress-fill';
    progressFill.style.width = `${result.percentage}%`;

    header.appendChild(category);
    header.appendChild(percentage);
    progressBar.appendChild(progressFill);
    card.appendChild(header);
    card.appendChild(progressBar);

    return card;
}