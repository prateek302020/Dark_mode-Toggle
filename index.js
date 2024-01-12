const i = document.querySelector("div").children;
var element = document.body;
var flag = 0;

i[0].addEventListener("click", (e) =>{
    // i.style.backgroundColor = "black";
    if(flag == 0){
    console.log(i[0]);
    element.style.backgroundColor = "black";
    element.style.transition = "1s";
    i[0].style.color ="white";
    flag = 1;
    }
    else{
        element.style.backgroundColor = "white"
        element.style.transition = "1s";
        i[0].style.color = "black";
        flag = 0;
    }
})