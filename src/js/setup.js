import { Plot } from "./plotter";
import { Request } from "./requests"
import graphs from '../data/graphs.json'

/*
    *
    *   Module to be executed once
    *
    * */

export function RunInitialSetup () {

    // Request all data from the backend
    for (let i = 1; i <= 5; i++) {
        Request(i, 10, 2023)
            .then(data => {
                // Save all the data in graph.json
                graphs[i].data = data; 
                
                console.log(graphs[i]);

                // Graph 
                Plot(graphs[i]);
            })
            .catch(error => {
                console.error(error);
            }); 
    } 

    Request("artists")
        .then(data => {
            graphs["artists"] = data.x;  
        })

    // Plot all the 5 graphs
    // It is important to pass the entire object (data + chartjsObject)
    
    // Plot(graphs[1]); 

}
