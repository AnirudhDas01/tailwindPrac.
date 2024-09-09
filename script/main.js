function toggleMenu() {
    var navBox = document.querySelector('#nav-box');
    navBox.classList.toggle('hidden');
}

const initialTranslateLTR = -48*4;
const initialTranslateRTL = 36*4;

function setUpIntersectionObserver(element, isLTR, speed) {
    const intersectionCallback = (entries) => {
            const isIntersecting = entries[0].isIntersecting;
            if (isIntersecting) {
                document.addEventListener('scroll', scrollHandler);
            }
            else {
                document.removeEventListener('scroll', scrollHandler);
            }
    };
    const intersectionOberver = new IntersectionObserver(intersectionCallback);
    intersectionOberver.observe(element);

    function scrollHandler() {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
       
        let totalTranslate = 0; 
        if (isLTR) 
        {
            totalTranslate = translateX + initialTranslateLTR;
        
        }
        else {
            totalTranslate = -(translateX + initialTranslateRTL);
        }
        element.style.transform = `translateX(${totalTranslate}px)`;
    }
}
const line1 = document.getElementById('line-1');
const line2 = document.getElementById('line-2');
const line3 = document.getElementById('line-3');

setUpIntersectionObserver(line1, true , 0.15)
setUpIntersectionObserver(line2, false , 0.15)
setUpIntersectionObserver(line3, true , 0.15)