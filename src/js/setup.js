import { Plot } from "./plotter";
import { Request } from "./requests"
import graphs from '../data/graphs.json'
import { LaunchEditor, RequestChange } from "./graph_editor";

/*
    *
    *   Module to be executed once
    *
    * */

const dropdown = document.getElementById('artists-dropdown');
const request_button = document.getElementById('request-button');

// Sets all the buttons on the page
function SetButtons () {
    
    // To display graph editor for all graphs
    for (let i = 1; i <= 5; i++) {
        let button = document.getElementById(`graph_${i}`);
        button.onclick = function() { LaunchEditor(i) };
    }

    // To request data for an individual graph
    request_button.onclick = function() { RequestChange() };

    // To set elements on dropdown input
    const artists = graphs["artists"];
    for (const artist of artists) {
        const option = document.createElement('option');
        option.text = artist;
        option.value = artist; // You can set a value for each option if needed
        dropdown.appendChild(option);
    }

}

export function RunInitialSetup () {

    // Request all data from the backend
    for (let i = 1; i <= 5; i++) {
        Request(i, 10, 2023)
            .then(data => {
                // Save all the data in graph.json
                graphs[i].data = data; 

                // Graph 
                Plot(graphs[i]);
            })
            .catch(error => {
                console.error(error);
            }); 
    } 

    // Request artists
    Request("artists")
        .then(data => {
            graphs["artists"] = data.x;  

            SetButtons();
        })
}


