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

export function Plot (position, title, type, data, general_label) {

    /* Set title */
    var chart_title = document.querySelector(`#graph_${position} .graph_title`);
    chart_title.textContent = title;
        
    /* Set chart */

    var chart = new Chart(
        document.querySelector(`#graph_${position} canvas`),
        {
            type: type,
            data: {
                labels: data.map(row => row.x),
                datasets: [
                    {
                        label: general_label,
                        data: data.map(row => row.y)
                    }
                ]
            },
            options: { plugins: { legend: { labels: { font: {
                family: custom.FontFamily,
                size: custom.FontSize
            } } } } }
        }
    );

}
