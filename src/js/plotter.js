import Chart from 'chart.js/auto';
import * as custom from './custom';

/*
    *
    *   Graph 1 ~ 5 are for display on the DASHBOARD
    *   Graph 6 is for expanded graph
    *
    * */

/*
    *
    *   Data must have this structure (json format):
    *   - [{x: value, y: value}, { ... }]
    *
* */

export function Plot (response) {

    /* Set title */
    var chart_title = document.querySelector(`#graph_${response.position} .graph_title`);
    chart_title.textContent = response.title;

    /* Set chart */
    var data;

    // For bar, line, pie or radar
    if ( response.type != 'scatter' ) {
        data = {
            labels: response.datasets.x,
            datasets: response.datasets.y.map(item => ({
                label: item.description,
                data: item.y
            }))
        }

    // For scatter
    } else if ( response.type === 'scatter' ) {
        data = {
            label: response.dataset.description,
            data: response.dataset.data
        }
    }

    new Chart(
        document.querySelector(`#graph_${response.position} canvas`),
        {
            type: response.type,
            data: data,
            options: { plugins: { legend: { labels: { font: {
                family: custom.FontFamily,
                size: custom.FontSize
            } } } } }
        }
    );

}
