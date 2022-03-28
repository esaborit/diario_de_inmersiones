$(function () {


    /*
     * Gráfica que representa las inmersiones por profundidades y año 
     */
    
    // Datos de la gráfica profundidades
    const datosInmersionProfundidad = {
        // Estas etiquetas aparecen en la leyenda y en la información del eje x
        labels: ["2003", "2004", "2005", "2006", "2007", "2008", "2009", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],
        datasets: [
            {
                label: "-10m", //
                backgroundColor: "rgba(255, 159, 64, 0.2)",
                borderColor:"rgba(255, 159, 64, 1)",
                borderWidth: 1,// Ancho del borde
                data: [7, 9, 3, 3, 19, 7, 12, 5, 0, 5, 3, 4, 0, 1, 3, 0, 0]//
            },
            {
                label: "-20m",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor:"rgba(75, 192, 192, 1)",
                borderWidth: 1,
                data: [9, 20, 52, 35, 15, 16, 18, 15, 13, 5, 4, 4, 6, 3, 6, 3, 2]
            },
            {
                label: "-30m",
                backgroundColor: "rgba(153, 102, 255, 0.5)",
                borderColor: "rgba(153, 102, 255, 1)",
                borderWidth: 1,// Ancho del borde
                data: [8, 9, 5, 7, 0, 7, 4, 3, 0, 0, 4, 1, 0, 1, 1, 1, 0]
            },
            {
                label: "-40m",
                backgroundColor: "rgba(159, 255, 64, 0.5)",
                borderColor: "rgba(159, 255, 64, 1)",
                borderWidth: 1,
                data: [0, 2, 4, 11, 0, 2, 1, 1, 0, 0, 4, 0, 2, 0, 0, 0, 0]
            }
        ]
    };
    
    // Opciones de representación de los datos
    const opciones = {
        responsive: true,
        transitions: {
            show: {
              animations: {
                x: {
                  from: 0
                },
                y: {
                  from: 0
                }
              }
            },
            hide: {
              animations: {
                x: {
                  to: 0
                },
                y: {
                  to: 0
                }
              }
            }
          },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };
   
    // Obtengo la referencia al elemento canvas que quiero seleccionar
    const ctx = document.getElementById("profundidades").getContext('2d');

    // Represento la gráfica
    const profundidades = new Chart(ctx, {
        type: "line",
        data: datosInmersionProfundidad,
        options: opciones
      });



    /*
     * Gráfica que representa inmersiones por lugares de inmersión 
     */

    // Datos de las inmersiones por lugares de inmersión
    const datosInmersionLugar = {
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
            borderWidth: 1
        }],

        // Estas etiquetas aparecen en la leyenda y en la información del eje x
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

    // Represento la gráfica de las inmersiones por lugares de inmersión
    const myPieChart = new Chart("lugares",{
        type: 'pie',
        data: datosInmersionLugar,
        options: opciones
    });


    /*
     * Gráfica que representa inmersiones por anualidades 
     */

    // Datos de inmersiones por año para la gráfica
    const datosInmersionAnualidad = {
        datasets: [{
            label: "Inmersiones totales por año",
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
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(120, 63, 4, 1)',
                'rgba(41, 134, 204, 1)',
                'rgba(241, 194, 50, 1)',
                'rgba(56, 118, 29, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(120, 63, 4, 1)',
                'rgba(41, 134, 204, 1)',
                'rgba(241, 194, 50, 1)',
                'rgba(56, 118, 29, 1)'
                ],
            borderWidth: 1
        }],

        // Estas etiquetas aparecen en la leyenda y en la información del eje x
        labels: ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
    };

    // Represento la gráfica de las inmersiones por año
    const diagramaBarras = new Chart("anualidades", {
        type: 'bar',
        data: datosInmersionAnualidad,
        options: opciones
        });
});