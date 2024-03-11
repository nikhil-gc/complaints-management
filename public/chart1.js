var ctx = document.getElementById('lineChart').getContext('2d');
console.log("linechart")
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Complaints',
            data: linechart,
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
// var data = '<%= linechart %>'
// console.log(linechart)
// console.log(typeof(linechart))
