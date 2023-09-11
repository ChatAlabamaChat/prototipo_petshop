'use strict';

/* botão para voltar para cima */

const backTopBtn = document.querySelector("[data-back-top-btn]")

const activeElemOnScroll = function (){
    if (window.scrollY > 100){
        backTopBtn.classList.add("active");
    }else{
        backTopBtn.classList.remove("active");
    }
}
addEventOnElem(window,"scroll",activeElemOnScroll);

