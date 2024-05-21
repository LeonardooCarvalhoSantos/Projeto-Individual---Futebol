document.addEventListener('DOMContentLoaded', (event) => {
    // Set KPI values
    document.getElementById('total-sales').innerText = '43';
    document.getElementById('new-customers').innerText = '12.940 ';

    // Chart.js configuration
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Mundial de Clubes', 'Libertadores', 'Copa do Brasil', 'Brasileirão', 'Paulistão', 'Recopa Sul-Americana', 'Copa CONMEBOL', 'Torneio Rio–São Paulo'],
            datasets: [{
                label: 'Principais Títulos do Santos Futebol Clube',
                data: [2, 3, 1, 8, 22, 1, 1, 5],
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderColor: 'rgba(0, 0, 0, 2)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
