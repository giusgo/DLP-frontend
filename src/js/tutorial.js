/*
    *
    *   Interactive tutorial for the user
    *
    * */

function Loop(mouse, circle, pointer) {

    var tutorial_loop = setInterval(function() {

        /* start */
        circle.classList.remove('active');

        pointer.classList.remove('fa-hand-pointer');
        pointer.classList.add('fa-arrow-pointer');

        mouse.classList.remove('paused');
        mouse.classList.add('active'); 

        /* stop at almost the end */
            /* point and clic */
        setTimeout(function() {
            mouse.classList.add('paused');

            pointer.classList.remove('fa-arrow-pointer');
            pointer.classList.add('fa-hand-pointer');

            setTimeout(function() {
                circle.classList.add('active'); // + 0.4 anim

                /* end of animation */
                setTimeout(function() {
                    mouse.classList.remove('active');
                }, 400);
            }, 500)
        }, 950);
    }, 2000);

    return tutorial_loop;

}

function DeleteMouse (mouse, loop) {
    document.addEventListener('click', function() {
        mouse.remove();
        clearInterval(loop);
    }, { once: true }); 
}

export function RunTutorial () {

    const mouse = document.getElementById('mouse'),
         circle = document.querySelector('#mouse .circle'),
        pointer = document.querySelector('#mouse i');

    var loop = Loop(mouse, circle, pointer);
    
    DeleteMouse(mouse, loop); 
}
