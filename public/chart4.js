var ctx4 = document.getElementById('barChart').getContext('2d');
var myChart2 = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['General Isssue','Intrest Rate','Loan Issue','Payment Issue','Personal Details Updation'],

        datasets: [{
            label: 'Categories',
            data: piechart,
            backgroundColor: [
                'rgba(41, 155, 99, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(120, 46, 139,1)',
                'rgba(255, 0, 0, 1)'

            ],
            borderColor: [
                'rgba(41, 155, 99, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(120, 46, 139,1)',
                'rgba(255, 0, 0, 1)'   
            ],
            borderWidth: 1
        }]

    },
    options: {
        responsive: true
    }
});

console.log("enti ra mava idi avvateldu")