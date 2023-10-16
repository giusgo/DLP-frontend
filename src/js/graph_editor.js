import * as bootstrap from 'bootstrap';
import { Plot } from './plotter';
import graphs from '../data/graphs.json';
import top_data from '../data/top_data.json'
import date_data from '../data/date_data.json'
import { Request } from './requests';

/*
    *
    *   This module edits the chart according to the given parameters
    *
    * */

const dropdown = document.getElementById('artists-dropdown');
const top_range = document.getElementById('top-range');
const date_range = document.getElementById('date-range');
const top_label = document.getElementById('top-number');
const date_label = document.getElementById('date-number');
const graph_editor = new bootstrap.Modal('#graphEditor', {});
const graph_6 = document.getElementById('graph_6');

export function RequestChange () {
    let top = top_data[top_range.value],
        date = date_data[date_range.value],
        artist = dropdown.value;

    var position = graph_6.getAttribute("current-graph");

    Request(position, top, date, artist).then(data => {
        // Set data to both graphs 
        // (original + editor)
        graphs[position].data = data;
        graphs[6].data = data;

        // Fix position & plot editor
        graphs[6].data.position = 6;
        Plot(graphs[6]);
        
        // Fix position & plot current
        graphs[position].data.position = position;
        Plot(graphs[position]);

        // Set new values
        graphs[position].top_value = top_range.value;
        graphs[position].date_value = date_range.value;
        graphs[position].top_label = top_data[top_range.value];
        graphs[position].date_label = date_data[date_range.value];
        graphs[position].artist = artist;
    });
}

export function LaunchEditor (position) {
    
    // Show editor 
    graph_editor.show();

    // Set current graph attribute
    graph_6.setAttribute("current-graph", position);

    // Set range inputs
    top_range.value = graphs[position].top_value;
    date_range.value = graphs[position].date_value;

    // Set labels
    top_label.textContent = graphs[position].top_label;
    date_label.textContent = graphs[position].date_label;

    // Set artist
    dropdown.value = graphs[position].artist

    // Set same graph
    graphs[6].data = graphs[position].data;
    // Fix position in graph 6 data
    graphs[6].data.position = 6;

    Plot(graphs[6]);
    
}
