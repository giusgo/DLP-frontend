import Chart from 'chart.js/auto';
import * as custom from './custom';

/*
    *
    *   Graph 1 ~ 5 are for display on the DASHBOARD
    *   Graph 6 is for expanded graph
    *
    * */

export function Plot (graph) {

    /* Set title */
    var chart_title = document.querySelector(`#graph_${graph.data.position} .graph_title`);
    chart_title.textContent = graph.data.title;

    /* Set chart */
    var data;

    // For bar, line, pie or radar
    if ( graph.data.type != 'scatter' ) {
        
        data = {
            labels: graph.data.datasets.x,
            datasets: graph.data.datasets.y.map(item => ({
                label: item.description,
                data: item.y
            }))
        }

        if (graph.data.type == 'pie') {
            data.datasets.forEach(dataset => {
                dataset.backgroundColor = custom.Colors;
            });
        } else if (graph.data.type == 'bar') {
            data.datasets.forEach(dataset => {
                dataset.backgroundColor = custom.PrimaryColor;
            });
        } else if (graph.data.type == 'line') {
            data.datasets.forEach(dataset => {
                dataset.backgroundColor = custom.PrimaryColor;
                dataset.borderColor = custom.PrimaryColor;
            });
        }

        // For scatter
    } else if ( graph.data.type == 'scatter' ) {
        data = {
            datasets: graph.data.datasets.map(item => ({
                label: item.description,
                data: item.data,
                backgroundColor: custom.PrimaryColor
            }))
        }
    }

    if (graph.chartjsObject != null) {
        graph.chartjsObject.destroy();
    }

    graph.chartjsObject = new Chart(
        document.querySelector(`#graph_${graph.data.position} canvas`),
        {
            type: graph.data.type,
            data: data,
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: graph.data.xlabel
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: graph.data.ylabel
                        }
                    }
                },
                plugins: { legend: { labels: { font: {
                    family: custom.FontFamily,
                    size: custom.FontSize
                } } } } }
        }
    );

}
