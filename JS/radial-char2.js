
var options = {
  series: [44, 55, 67, 83],
  chart: {
    height: 300,
    type: 'radialBar',
  },
  fill: {
    colors: ['rgba(153, 105, 252)', 'rgba(246, 103, 119)', 'rgba(59,204,198)', 'rgba(82,167,254)']
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '14px',
        },
        value: {
          fontSize: '16px',
        },
        total: {
          show: true,
          fontSize: '12px',
          label: 'Total',
          formatter: function (w) {
            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
            return 60
          }
        }
      }
    }
  },
  labels: ['Total Upsell Pages', 'Total Upsell Pages', 'Total Upsell Pages', 'Total Upsell Pages'],
};

var chart = new ApexCharts(document.querySelector("#radialBar"), options);
chart.render();
