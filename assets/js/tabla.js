$(document).ready(function() {
    $('#tabla').DataTable( {
        "ajax": '/diario_de_inmersiones/assets/ajax/data/buceo.txt',
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
        },
        "scrollY": "300px",
    } );
} );