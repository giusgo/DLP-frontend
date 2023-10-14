export function RunIntro() {

    let curtain = document.querySelector('.curtain');


    setTimeout(() => {
        /* ==== LOGO ANIMATION ==== (~3500 ms) */ 
            var path = document.querySelector('.line-animated path');
        var length = path.getTotalLength();

        path.style.transition = path.style.WebkitTransition = 'none';

        path.style.strokeDasharray = length + ' ' + length;
        path.style.strokeDashoffset = length;
        path.getBoundingClientRect();
        path.style.transition = path.style.WebkitTransition =
            'stroke-dashoffset 7s ease-in-out';

        path.style.strokeDashoffset = '0';

        /* ==== SHOW TITLE ==== */
            let logoSpan = document.querySelectorAll('.title-parts');

        logoSpan.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (index + 1) * 100);
        });

        /* ==== CURTAIN REMOVAL ==== */ 
            setTimeout(() => {
                curtain.style.top = '-100vh';
            }, 4000);

    });


}
