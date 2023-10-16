import { Plot } from "./plotter";
import { Request } from "./requests"
import graphs from '../data/graphs.json'

/*
    *
    *   Module to be executed once
    *
    * */

export function RunInitialSetup () {
    // request all data from the backend
    // (WIP)
    //
    // save all the data in graphs.json
    // (WIP)
    //
    // Plot all the 5 graphs
    // It is important to pass the entire object (data + chartjsObject)
    
    Plot(graphs[1]); 
    Plot(graphs[2]);
    Plot(graphs[3]);
    Plot(graphs[4]);
    Plot(graphs[5]);

}
