let container0 = document.getElementsByClassName("container-0");
let container = document.getElementsByClassName("container-1");
let btnSelectPlan = document.querySelectorAll(".card-btn-3");
let containerWrapper = document.getElementsByClassName("container-wrapper");
let joinUs = document.getElementsByClassName("btn-0");
let btnClose = document.getElementsByClassName("close-btn");


let pathName = window.location.pathname;
if(pathName == "/src/html/Main.html")
{
    btnSelectPlan[0].addEventListener("click", ()=>{
        // console.log("sadad")
        container0[0].style.display = "flex";
    })
    btnSelectPlan[1].addEventListener("click", ()=>{
        // console.log("sadad")
        container0[0].style.display = "flex";
    })
    btnSelectPlan[2].addEventListener("click", ()=>{
        // console.log("sadad")
        container0[0].style.display = "flex";
    })
    joinUs[0].addEventListener("click", ()=>{
        // console.log("sadad")
        container0[0].style.display = "flex";
    })
    btnClose[0].addEventListener("click", ()=>{
        container0[0].style.display = "none";
    })

}else if(pathName=="/src/html/Page3.html"){
    joinUs[0].addEventListener("click", ()=>{
        // console.log("sadad")
        container0[0].style.display = "flex";
    })
    btnClose[0].addEventListener("click", ()=>{
        container0[0].style.display = "none";
    })
}
else{


    joinUs[0].addEventListener("click", ()=>{
        // console.log("sadad")
        container0[0].style.display = "flex";
    })
    btnClose[0].addEventListener("click", ()=>{
        container0[0].style.display = "none";
    })
}