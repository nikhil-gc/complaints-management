console.log(weekchart)
var ctx3 = document.getElementById('WeekChart').getContext('2d');
// console.log("linechart")
var myChart = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['week 1', 'week 2', 'week 3', 'week 4', 'week 5'],
        datasets: [{
            label: 'Complaints',
            data: weekchart,
            backgroundColor: [
                'rgba(85,85,85, 1)'

            ],
        
            borderColor: 'rgb(41, 155, 99)',

            borderWidth: 2
        }]
    },
    options: {
        responsive: true
    }
});