import * as bootstrap from 'bootstrap'
import { RunIntro } from './curtain'
import { RunTutorial } from './tutorial'
import { RunInitialSetup } from './setup';

/*
    *
    *   Main file
    *
    * */

window.addEventListener('DOMContentLoaded', () => {
    
    /* ==== RUN ANIMATED INTRO ==== */
    var elapsed_time = RunIntro();

    
    /* Tutorial start before because of timing */
    setTimeout(function() {
        RunTutorial();
    }, elapsed_time - 1000);

    /* ==== TIME WRAPPER FOR INITIAL SETUP ==== */
    setTimeout(function() {
        RunInitialSetup();
    }, elapsed_time + 500);

});
