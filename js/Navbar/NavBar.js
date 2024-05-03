let activeLink = window.location.pathname;
let hamburger = document.getElementsByClassName("img-hamburger");
let navContainer = document.getElementsByClassName("nav-container")
let count=0;
hamburger[0].addEventListener("click",()=>{
    if(count%2==0){
        navContainer[0].style.marginLeft = "0%";
        count++;
    }else{
        navContainer[0].style.marginLeft = "-100%";
        count++;
    }
})
console.log(activeLink.pathname)
let anchor = document.querySelectorAll("nav li a").forEach(element => {
    if(element.href.includes(activeLink)){
        // console.log(element.href);
        element.classList.add("active");
    }  
 });
