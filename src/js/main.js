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

    const data = [
        { x: 2010, y: 10 },
        { x: 2011, y: 20 },
        { x: 2012, y: 15 },
        { x: 2013, y: 25 },
        { x: 2014, y: 22 },
        { x: 2015, y: 30 },
        { x: 2016, y: 28 },
        { x: 2017, y: 54 },
        { x: 2018, y: 18 },
    ];

    /* Tutorial start before because of timing */
    setTimeout(function() {
        RunTutorial();
    }, elapsed_time - 1000);

    /* ==== TIME WRAPPER FOR GRAPHS ==== */
    setTimeout(function() {

        Plot(3, 'Years', 'pie', data, 'Jeje');
        Plot(2, 'Years', 'line', data, 'Jeje');
        
    }, elapsed_time + 500);

});
