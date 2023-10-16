import { Plot } from "./plotter";
import { Request } from "./requests"
import graphs from '../data/graphs.json'
import top_data from '../data/top_data.json'
import date_data from '../data/date_data.json'
import { LaunchEditor, RequestChange } from "./graph_editor";
import { RunTutorial } from "./tutorial"

/*
    *
    *   Module to be executed once
    *
    * */

const dropdown = document.getElementById('artists-dropdown');
const request_button = document.getElementById('request-button');
const top_range = document.getElementById('top-range');
const date_range = document.getElementById('date-range');
const top_label = document.getElementById('top-number');
const date_label = document.getElementById('date-number');

// Sets all the buttons on the page
function SetButtons () {
    
    // To display graph editor for all graphs
    for (let i = 1; i <= 5; i++) {
        let button = document.getElementById(`graph_${i}`);
        button.onclick = function() { LaunchEditor(i) };
    }

    // To request data for an individual graph
    request_button.onclick = function() { RequestChange() };

    // Dynamic labels
    top_range.oninput = function() { top_label.textContent = top_data[top_range.value] };
    date_range.oninput = function() { date_label.textContent = date_data[date_range.value] };

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

                if (i == 5) {
                    RunTutorial(); 
                }
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


