import { series } from './data.js';
function renderSeriesTable() {
    console.log("Renderizando la tabla...");
    console.log(series); // Esto mostrará los datos en la consola para verificar si están cargando
    var seriesTable = document.getElementById('series-table');
    series.forEach(function (serie) {
        var row = seriesTable.insertRow();
        row.innerHTML = "\n            <td>".concat(serie.id, "</td>\n            <td><a href=\"").concat(serie.link, "\" target=\"_blank\">").concat(serie.name, "</a></td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>\n        ");
    });
    // Calcular el promedio de temporadas
    var totalSeasons = series.reduce(function (sum, serie) { return sum + serie.seasons; }, 0);
    var averageSeasons = totalSeasons / series.length;
    // Crear un elemento para mostrar el promedio de temporadas
    var container = document.querySelector('.container');
    var averageElement = document.createElement('p');
    averageElement.textContent = "Seasons average: ".concat(averageSeasons.toFixed(1));
    container === null || container === void 0 ? void 0 : container.appendChild(averageElement);
}
// Ejecutar la función cuando la página esté cargada
document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM completamente cargado");
    renderSeriesTable();
});
//# sourceMappingURL=app.js.map