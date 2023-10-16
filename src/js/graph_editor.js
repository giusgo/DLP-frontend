import * as bootstrap from 'bootstrap';
import { Plot } from './plotter';
import graphs from '../data/graphs.json';
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

export function RequestChange () {
     
}

export function LaunchEditor (position) {
    
    // Show editor 
    graph_editor.show();

    // Set range inputs
    top_range.value = graphs[position].top_value;
    date_range.value = graphs[position].date_value;

    // Set labels
    top_label.textContent = graphs[position].top_label;
    date_label.textContent = graphs[position].date_label;

    // Set same graph
    graphs[6].data = graphs[position].data;
    // Fix position in graph 6 data
    graphs[6].data.position = 6;

    Plot(graphs[6]);
}
