let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");
var slider = document.getElementsByClassName("img-slider");

var imageNo = 0;

btnNext.addEventListener("click", ()=>{
    if(imageNo<3){
        imageNo+=1;
    }else{
        imageNo = 0;
    }
    slider[0].style.transform="translateX(" + (imageNo)*(-25) + "%)";
})
btnPrev.addEventListener("click", ()=>{
    if(imageNo<1){
        imageNo=3;
    }else{
        imageNo -= 1;
    }
    slider[0].style.transform="translateX(" + (imageNo)*(-25) + "%)";
})