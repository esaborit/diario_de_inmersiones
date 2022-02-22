$(function () {
    var data = {
    labels: ["2003", "2004", "2005", "2006", "2007", "2008", "2009", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],
    datasets: [
        {
            label: "-10m",
            fillColor: "rgba(220,220,220,0.2)",
            backgroundColor: "rgba(255, 159, 64, 0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [7, 9, 3, 3, 19, 7, 12, 5, 0, 5, 3, 4, 0, 1, 3, 0, 0]
        },
        {
            label: "-20m",
            fillColor: "rgba(220,220,220,0.2)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [9, 20, 52, 35, 15, 16, 18, 15, 13, 5, 4, 4, 6, 3, 6, 3, 2]
        },
        {
            label: "-30m",
            fillColor: "rgba(220,220,220,0.2)",
            backgroundColor: "rgba(153, 102, 255, 0.5)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [8, 9, 5, 7, 0, 7, 4, 3, 0, 0, 4, 1, 0, 1, 1, 1, 0]
        },
        {
            label: "-40m",
            fillColor: "rgba(204,169,151,0.2)",
            backgroundColor: "rgba(159, 255, 64, 0.5)",
            strokeColor: "rgba(204,169,151,1)",
            pointColor: "rgba(204,169,151,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(204,169,151,1)",
            data: [0, 2, 4, 11, 0, 2, 1, 1, 0, 0, 4, 0, 2, 0, 0, 0, 0]
        }
        ]
    };
   
    var option = {
    responsive: true,
    };
   
    // Get the context of the canvas element we want to select
    var ctx = document.getElementById("myChart").getContext('2d');
   // var myLineChart = new Chart(ctx).line(data, option); //'Line' defines type of the chart.
    var myChart = new Chart("myChart", {
        type: "line",
        data: data,
        options: option
      });



// GRafico de inmersiones por lugares


/*var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("mypieChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    }
  }
});*/

// otro de pruebas
var data2 = {
    datasets: [{
        data: [294, 2, 7, 2, 9, 1, 10, 3, 18, 1, 5, 8, 1, 19, 1, 8, 1, 2, 5, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(255, 205, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(120, 63, 4, 0.5)',
            'rgba(41, 134, 204, 0.5)',
            'rgba(241, 194, 50, 0.5)',
            'rgba(56, 118, 29, 0.5)',
            'rgba(159, 255, 64, 0.5)',
            'rgba(205, 255, 86, 0.5)',
            'rgba(192, 75, 192, 0.5)',
            'rgba(99, 255, 132, 0.5)',
            'rgba(162, 54, 235, 0.5)',
            'rgba(102, 54, 255, 0.5)',
            'rgba(63, 120, 4, 0.5)',
            'rgba(134, 41, 204, 0.5)',
            'rgba(194, 241, 50, 0.5)',
            'rgba(118, 56, 29, 0.5)'
          ],
          hoverOffset: 1
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'I. de Mouro',
        'Tablas de Daimiel',
        'P. Riomiera',
        'Niño Reef',
        'I. Mauricio',
        'Mutriku',
        'Jávea',
        'Bálamo',
        'Maldivas',
        'Moi Reef',
        'Mogan',
        'Goleta San Sebastian',
        'C. de Palos',
        'Tenerife',
        'Aspiro Reef',
        'Lanzarote',
        'Cuba',
        'Ibiza',
        'Granada',
        'Bustio'
    ]
};

var myPieChart = new Chart("mypie",{
    type: 'pie',
    data: data2,
    options: option
});


// Inmersiones por años en barras

var data3 = {
  datasets: [{
      data: [ 24, 40, 63, 71, 34, 32, 35, 28, 9, 24, 13, 10, 15, 9, 8, 5, 10, 4, 2],
      backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 205, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(120, 63, 4, 0.5)',
          'rgba(41, 134, 204, 0.5)',
          'rgba(241, 194, 50, 0.5)',
          'rgba(56, 118, 29, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 205, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(120, 63, 4, 0.5)',
          'rgba(41, 134, 204, 0.5)',
          'rgba(241, 194, 50, 0.5)',
          'rgba(56, 118, 29, 0.5)'
        ],
        hoverOffset: 4
  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
      '2003',
      '2004',
      '2005',
      '2006',
      '2007',
      '2008',
      '2009',
      '2010',
      '2011',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
      '2019',
      '2020',
      '2021'
  ]
};

var diagramaBarras = new Chart("misbarras", {
  type: 'bar',
  data: data3,
  options: option
});









});
