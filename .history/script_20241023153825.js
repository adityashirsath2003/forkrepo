document.getElementById('recommendationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const newRec = document.getElementById('newRecommendation').value;
    if (newRec) {
        const recSection = document.querySelector('#recommendations');
        const newRecElement = document.createElement('div');
        newRecElement.classList.add('recommendation');
        newRecElement.innerHTML = `<p>"${newRec}"</p>`;
        recSection.appendChild(newRecElement);
        document.getElementById('newRecommendation').value = '';
        alert('Recommendation added successfully!');
    }
});
