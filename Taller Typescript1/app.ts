import { series } from './data.js';

function renderSeriesTable(): void {
    console.log("Renderizando la tabla...");
    console.log(series); // Esto mostrará los datos en la consola para verificar si están cargando

    const seriesTable = document.getElementById('series-table') as HTMLTableElement;
    series.forEach(serie => {
        const row = seriesTable.insertRow();
        row.innerHTML = `
            <td>${serie.id}</td>
            <td><a href="${serie.link}" target="_blank">${serie.name}</a></td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
    });

    // Calcular el promedio de temporadas
    const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
    const averageSeasons = totalSeasons / series.length;

    // Crear un elemento para mostrar el promedio de temporadas
    const container = document.querySelector('.container');
    const averageElement = document.createElement('p');
    averageElement.textContent = `Seasons average: ${averageSeasons.toFixed(1)}`;
    container?.appendChild(averageElement);
}

// Ejecutar la función cuando la página esté cargada
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM completamente cargado");
    renderSeriesTable();
});
