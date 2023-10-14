import Chart from 'chart.js/auto'
import * as bootstrap from 'bootstrap'
import { RunIntro } from './curtain'
import * as defaults from './defaults';

window.addEventListener('DOMContentLoaded', () => {
    
    /* ==== RUN ANIMATED INTRO ==== */
    RunIntro();
    const data = [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
    ];

    new Chart(
        document.getElementById('chart_1'),
        {
            type: 'line',
            data: {
                labels: data.map(row => row.year),
                datasets: [
                    {
                        label: 'Acquisitions by year',
                        data: data.map(row => row.count),
                        borderColor: defaults.defaultBgColor,
                        backgroundColor: defaults.defaultBgColor
                    }
                ],
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'A title',
                        font: defaults.defaultFontFamily,
                        fullSize: false
                    },
                    legend: {
                        labels: {
                            // This more specific font property overrides the global property
                            font: {
                                family: defaults.defaultFontFamily,
                                size: defaults.defaultFontSize
                            }
                        }
                    }
                }
            }
        }
    );

    new Chart(
        document.getElementById('chart_2'),
        {
            type: 'bar',
            data: {
                labels: data.map(row => row.year),
                datasets: [
                    {
                        label: 'Acquisitions by year',
                        data: data.map(row => row.count),
                        backgroundColor: defaults.defaultBgColor,
                    }
                ]
            }
        }
    );


});
