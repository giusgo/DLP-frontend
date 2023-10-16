import * as bootstrap from 'bootstrap'
import { RunIntro } from './curtain'
import { RunInitialSetup } from './setup';

/*
    *
    *   Main file
    *
    * */

window.addEventListener('DOMContentLoaded', () => {

    
    /* ==== RUN ANIMATED INTRO ==== */
    var elapsed_time = RunIntro();

    /* ==== TIME WRAPPER FOR INITIAL SETUP ==== */
    setTimeout(function() {
        RunInitialSetup();
    }, elapsed_time + 500);

});
