document.addEventListener('DOMContentLoaded', (event) => {
    const ctx = document.getElementById('myPieChart').getContext('2d');

    const data = {
        labels: ['Green', 'Light Gray'],
        datasets: [{
            data: [70, 30],
            backgroundColor: [
                'rgb(144, 238, 144)',
                'rgba(211, 211, 211, 0.2)'
            ],
            borderColor: [
                'rgb(255, 255, 255)',
                'rgb(255, 255, 255)'
            ],
            borderWidth: 1
        }]
    };

    const options = {
        cutout: '80%',
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                    }
                }
            }
        }
    };

    const myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
    });
});