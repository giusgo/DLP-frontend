import * as bootstrap from 'bootstrap';
import { Plot } from './plotter';
import graphs from '../data/graphs.json';

/*
    *
    *   This module edits the chart according to the given parameters
    *
    * */

const graph_editor = new bootstrap.Modal('#graphEditor', {});

export function LaunchEditor (position) {
    
    // Show editor 
    graph_editor.show();

    // Set same graph
    graphs[6].data = graphs[position].data;
    // Fix position in graph 6 data
    graphs[6].data.position = 6;

    Plot(graphs[6]);
}
