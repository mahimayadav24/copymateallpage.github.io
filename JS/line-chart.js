

var options = {
    series: [{
        name: "AI based",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]

    },
    {
        name: "Template based",
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
    },
    {
        name: 'Designed based',
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
    }
    ],
    chart: {
        height: 400,
        type: 'line',
        foreColor: '#fff',
        zoom: {
            enabled: false
        },
    },
    dataLabels: {
        enabled: false
    },
    colors: ["#ECF9FF", "#FF7070", "#FEF98C"],
    stroke: {
        width: [3, 3, 3],
        curve: 'straight',
        dashArray: [0, 0, 0]
    },
    title: {
        text: 'Page Statistics',
        align: 'left'
    },
    legend: {
       
        tooltipHoverFormatter: function (val, opts) {
            return val + '  ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
         
        }
    },
    markers: {
        size: 0,
        hover: {
            sizeOffset: 6
        }
    },
    xaxis: {
        categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
            '10 Jan', '11 Jan', '12 Jan'
        ],
    },
    tooltip: {
        y: [
            {
                title: {
                    formatter: function (val) {
                        return val + " (mins)"
                    }
                }
            },
            {
                title: {
                    formatter: function (val) {
                        return val + " per session"
                    }
                }
            },
            {
                title: {
                    formatter: function (val) {
                        return val;
                    }
                }
            }
        ]
    },
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 0.9,
        padding: {
            bottom: 10,
            top: 10,
            right: 50
        }
    }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

