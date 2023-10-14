export function RunIntro() {

    const curtain = document.querySelector('.curtain'),
        path = document.querySelector('.line-animated path'),
        length = path.getTotalLength(),
        logoSpan = document.querySelectorAll('.title-parts'),
        time = 4000;

    setTimeout(() => {
        /* ==== LOGO ANIMATION ==== (~3500 ms) */
        path.style.transition = path.style.WebkitTransition = 'none';

        path.style.strokeDasharray = length + ' ' + length;
        path.style.strokeDashoffset = length;
        path.getBoundingClientRect();
        path.style.transition = path.style.WebkitTransition =
            'stroke-dashoffset 7s ease-in-out';

        path.style.strokeDashoffset = '0';

        /* ==== SHOW TITLE ==== */
        logoSpan.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (index + 1) * 100);
        });

        /* ==== CURTAIN REMOVAL ==== */ 
        setTimeout(() => {
            curtain.style.top = '-100vh';
        }, time);

    });

    return time;

}
