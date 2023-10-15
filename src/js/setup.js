import { Plot } from "./plotter";
import { Request } from "./requests"

/*
    *
    *   Module to be executed once
    *
    * */

const response = {
    "title": "Title of the graph",
    "position": 1,
    "type": "bar",
    "datasets": {
        x: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
        y: [
            {y: [50, 22, 33, 14, 15, 7, 11], description: "Jeje"},
            {y: [40, 22, 13, 41, 45, 1, 34], description: "LOLOL"}
        ]
    }
},
    response2 = {
    "title": "Title of the graph",
    "position": "2",
    "type": "line",
    "datasets": {
        x: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
        y: [
            {y: [50, 22, 33, 14, 15, 7, 11], description: "Jeje"},
            {y: [40, 22, 13, 41, 45, 1, 34], description: "LOLOL"}
        ]
    }
},
    response3 = {
    "title": "Title of the graph",
    "position": 3,
    "type": "pie",
    "datasets": {
        x: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
        y: [
            {y: [50, 22, 33, 14, 15, 7, 11], description: "Jeje"},
            {y: [40, 22, 13, 41, 45, 1, 34], description: "LOLOL"}
        ]
    }
},
    response4 = {
    "title": "Title of the graph",
    "position": 4,
    "type": "radar",
    "datasets": {
        x: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
        y: [
            {y: [50, 22, 33, 14, 15, 7, 11], description: "Jeje"},
            {y: [40, 22, 13, 41, 45, 1, 34], description: "LOLOL"}
        ]
    }
},
    response5 = {
    "title": "Title of the graph",
    "position": 5,
    "type": "scatter",
    "datasets": [{
        "data": [
            {x: 6, y: 5},
            {x: 1, y: 7},
            {x: 5, y: 10},
            {x: 1, y: 18}
        ],
        "description": "descripcion"
    }]
};


export function RunInitialSetup () {
    // request all data from the backend 
    
    Plot(response); 
    Plot(response2);
    Plot(response3);
    Plot(response4);
    Plot(response5);
}
