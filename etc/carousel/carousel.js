const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector(".slider__item:first-child");
function slide() {
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`)
    if(currentSlide){
        currentSlide.classList.remove(SHOWING_CLASS);
        const nextSlide = currentSlide.nextElementSibling;
        // 다음 형제 el을 찾아줌
        if(nextSlide){
            nextSlide.classList.add(SHOWING_CLASS);
        } else {
            firstSlide.classList.add(SHOWING_CLASS);
        }
    } else {
        firstSlide.classList.add(SHOWING_CLASS);
    }
}

slide()
setInterval(slide ,2000)
// 2초마다 슬라이드를 부르도록 설정 2sec = 2000 milisec
<<<<<<< HEAD
set
=======
>>>>>>> efb8678e255ae41d0410c6fa7e512dad4ff974d4
