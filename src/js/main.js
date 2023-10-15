import * as bootstrap from 'bootstrap'
import { RunIntro } from './curtain'
import { RunTutorial } from './tutorial'
import { Plot } from './plotter';

/*
    *
    *   Main file
    *   DO NOT do anything important here.
    *
    * */

window.addEventListener('DOMContentLoaded', () => {
    
    /* ==== RUN ANIMATED INTRO ==== */
    var elapsed_time = RunIntro();

    const response = {
        "title": "Title of the graph",
        "position": 1,
        "type": "pie",
        "datasets": {
            x: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
            y: [
                {y: [50, 22, 33, 14, 15, 7, 11], description: "Jeje"},
                {y: [40, 22, 13, 41, 45, 1, 34], description: "LOLOL"}
            ]
        }
    };

    /* Tutorial start before because of timing */
    setTimeout(function() {
        RunTutorial();
    }, elapsed_time - 1000);

    /* ==== TIME WRAPPER FOR GRAPHS ==== */
    setTimeout(function() {

        Plot(response);
        
    }, elapsed_time + 500);

});
