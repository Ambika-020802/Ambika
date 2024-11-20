let input=document.getElementById("color");
let input2=document.getElementById("bRadius");
let image=document.querySelector("img")

function colorChange(z){
   console.log(z);

if(z.key==="Enter"){
    document.body.style.background=input.value
}

}


function bRadiusChange(x) {

    console.log(x);
    if(x.key==="Enter"){
        image.style.borderRadius=`${input2.value}px`
    }

}


let pswd = document.querySelector("input");
let msg = document.querySelector("p");
function check(z) {
    if (z.key === "Enter") {
        if (pswd.value.length < 4) {
            msg.textContent = "weak password"
          msg.style.color="red"
        } else if (pswd.value.length >= 4 && pswd.value.length <= 10) {
            msg.textContent = "good password"
          msg.style.color="orange"
        } else {
            msg.textContent = "strong password"
            msg.style.color="green"
        }
    }
}

