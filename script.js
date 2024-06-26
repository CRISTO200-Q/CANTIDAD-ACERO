document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('steelForm');
    const resetButton = document.getElementById('resetButton');
    const ctx = document.getElementById('steelChart').getContext('2d');
    let steelChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Área de Sección (cm²)', 'Factor de Acero', 'Cantidad de Acero (cm²)'],
            datasets: [{
                label: 'Valores',
                data: [0, 0, 0],
                backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                borderColor: ['rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)', 'rgba(255, 206, 86, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const area = parseFloat(document.getElementById('area').value);
        const factor = parseFloat(document.getElementById('factor').value);
        const cantidadAcero = area * factor;

        steelChart.data.datasets[0].data = [area, factor, cantidadAcero];
        steelChart.update();
    });

    resetButton.addEventListener('click', () => {
        document.getElementById('area').value = '';
        document.getElementById('factor').value = '';
        steelChart.data.datasets[0].data = [0, 0, 0];
        steelChart.update();
    });
});
