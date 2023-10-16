import * as bootstrap from 'bootstrap';
import { Plot } from './plotter';
import graphs from '../data/graphs.json';

/*
    *
    *   This module edits the chart according to the given parameters
    *
    * */

const graph_editor = new bootstrap.Modal('#graphEditor', {});
const dropdown = document.getElementById('artists-dropdown');
const request_button = document.getElementById('request-button');
const top_range = document.getElementById('top-range');
const date_range = document.getElementById('date-range');

// Sets all the buttons on the page
export function SetButtons () {
    
    // To display graph editor for all graphs
    for (let i = 1; i <= 5; i++) {
        let button = document.getElementById(`graph_${i}`);
        button.onclick = function() { LaunchEditor(i) };
    }

    // To set range inputs at initial values
    top_range.value = 0;
    date_range.value = 23;

    // To request data for an individual graph
    request_button.onclick = '';

    // To set elements on dropdown input
    const artists = graphs["artists"];
    for (const artist of artists) {
        const option = document.createElement('option');
        option.text = artist;
        option.value = artist; // You can set a value for each option if needed
        dropdown.appendChild(option);
    }

}

function LaunchEditor (position) {
    
    // Show editor 
    graph_editor.show();

    // Set same graph
    graphs[6].data = graphs[position].data;
    // Fix position in graph 6 data
    graphs[6].data.position = 6;

    Plot(graphs[6]);
}
