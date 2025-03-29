document.addEventListener('DOMContentLoaded', function() {
   
    const storedData = JSON.parse(localStorage.getItem('mealData')) || {
        totalProteins: 0,
        totalFats: 0,
        totalCarbs: 0,
        lastReset: new Date().getTime()
    };

    function resetIf24HoursPassed() {
        const now = new Date().getTime();
        const hoursElapsed = (now - storedData.lastReset) / (1000 * 60 * 60); 
        
        if (hoursElapsed >= 24) {
            storedData.totalProteins = 0;
            storedData.totalFats = 0;
            storedData.totalCarbs = 0;
            storedData.lastReset = now; 
            localStorage.setItem('mealData', JSON.stringify(storedData));
        }
    }

    resetIf24HoursPassed();

    document.getElementById('totalProteins').innerText = storedData.totalProteins.toFixed(2);
    document.getElementById('totalFats').innerText = storedData.totalFats.toFixed(2);
    document.getElementById('totalCarbs').innerText = storedData.totalCarbs.toFixed(2);

    const form = document.getElementById('macro-form');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const proteins = parseFloat(document.getElementById('proteins').value);
            const fats = parseFloat(document.getElementById('fats').value);
            const carbs = parseFloat(document.getElementById('carbs').value);

            storedData.totalProteins += proteins;
            storedData.totalFats += fats;
            storedData.totalCarbs += carbs;

            localStorage.setItem('mealData', JSON.stringify(storedData));

            document.getElementById('totalProteins').innerText = storedData.totalProteins.toFixed(2);
            document.getElementById('totalFats').innerText = storedData.totalFats.toFixed(2);
            document.getElementById('totalCarbs').innerText = storedData.totalCarbs.toFixed(2);

            document.getElementById('proteins').value = '';
            document.getElementById('fats').value = '';
            document.getElementById('carbs').value = '';
        });
    } else {
        console.error('Form not found!');
    }
});
