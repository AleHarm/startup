var p1Turn = true;
var playSpace = document.getElementById("playspace");
const colorSelector1 = document.getElementById("color-selector1");
const colorSelector2 = document.getElementById("color-selector2");
document.querySelectorAll('.dash').forEach( x=> x.setAttribute("clicked", false))
var p1Color = colorSelector1.value;
var p2Color = colorSelector2.value;
playSpace.style.borderColor = "blue";

colorSelector1.addEventListener("change", (event) => {
    var oldColor = p1Color;
    var newColor = event.target.value
    p1Color = newColor;
    if(p1Turn){
        playSpace.style.borderColor = p1Color;
    }
});

colorSelector2.addEventListener("change", (event) => {
    var oldColor = p2Color;
    var newColor = event.target.value
    p2Color = event.target.value;
    if(!p1Turn){
        playSpace.style.borderColor = p2Color;
    }
});


function clickHandler(e) {
    tar = e.target;
    var point = false;
    
    if(tar.getAttribute("clicked")){
        tar.setAttribute("clicked", true);
        const index = Array.from(tar.parentElement.parentElement.children).indexOf(tar.parentElement);
        if(p1Turn){
            tar.children[0].style.fill = p1Color;
            tar.children[0].style.stroke = "black";
        }else{
            tar.children[0].style.fill = p2Color;
            tar.children[0].style.stroke = "black";
        }

        if(tar.getAttribute("id") === "dash-vert"){

            //RIGHT
            if(tar.parentElement.parentElement.nextElementSibling.children[index].querySelector("#dash-hor") || tar.parentElement.querySelector("#dash-hor") || tar.parentElement.nextElementSibling){
                if(tar.parentElement.parentElement.nextElementSibling.children[index].querySelector("#dash-hor").children[0].style.fill && tar.parentElement.querySelector("#dash-hor").children[0].style.fill && tar.parentElement.nextElementSibling.querySelector("#dash-vert").children[0].style.fill){
                    if(p1Turn){
                        tar.parentElement.querySelector("#claim-square").children[0].style.fill = p1Color;
                        //p1Score++;
                        point = true;
                    }else{
                        tar.parentElement.querySelector("#claim-square").children[0].style.fill = p2Color;
                        //p2SCore++;
                        point = true;
                    }
                }
            }
            //LEFT
            if(tar.parentElement.parentElement.nextElementSibling.children[index - 1] || tar.parentElement.previousElementSibling || tar.parentElement.previousElementSibling){
                if(tar.parentElement.parentElement.nextElementSibling.children[index - 1].querySelector("#dash-hor").children[0].style.fill && tar.parentElement.previousElementSibling.querySelector("#dash-hor").children[0].style.fill && tar.parentElement.previousElementSibling.querySelector("#dash-vert").children[0].style.fill){
                    if(p1Turn){
                        tar.parentElement.previousElementSibling.querySelector("#claim-square").children[0].style.fill = p1Color;
                        //p1Score++;
                        point = true;
                    }else{
                        tar.parentElement.previousElementSibling.querySelector("#claim-square").children[0].style.fill = p2Color;
                        //p2SCore++;
                        point = true;
                    }
                }
            }
            //NO POINT
            if(!point){
                p1Turn = !p1Turn;
                if(p1Turn){
                    document.getElementById("playspace").style.borderColor = p1Color;
                }else{
                    document.getElementById("playspace").style.borderColor = p2Color;
                }
            }
        }else{
            //BELOW
            if(tar.parentElement.querySelector("#dash-vert") || tar.parentElement.nextElementSibling.querySelector("#dash-vert") || tar.parentElement.parentElement.nextElementSibling){
                if(tar.parentElement.querySelector("#dash-vert").children[0].style.fill && tar.parentElement.nextElementSibling.querySelector("#dash-vert").children[0].style.fill && tar.parentElement.parentElement.nextElementSibling.children[index].querySelector("#dash-hor").children[0].style.fill){
                    if(p1Turn){
                        tar.parentElement.querySelector("#claim-square").children[0].style.fill = p1Color;
                        //p1Score++;
                        point = true;
                    }else{
                        tar.parentElement.querySelector("#claim-square").children[0].style.fill = p2Color;
                        //p2SCore++;
                        point = true;
                    }
                }
            }
            //ABOVE
            if(tar.parentElement.parentElement.previousElementSibling && tar.parentElement.parentElement.previousElementSibling.children[index].querySelector("#dash-vert") && tar.parentElement.parentElement.previousElementSibling.children[index + 1].querySelector("#dash-vert")){
                if(tar.parentElement.parentElement.previousElementSibling.children[index].querySelector("#dash-hor").children[0].style.fill && tar.parentElement.parentElement.previousElementSibling.children[index].querySelector("#dash-vert").children[0].style.fill && tar.parentElement.parentElement.previousElementSibling.children[index + 1].querySelector("#dash-vert").children[0].style.fill){
                    if(p1Turn){
                        tar.parentElement.parentElement.previousElementSibling.children[index].querySelector("#claim-square").children[0].style.fill = p1Color;
                        //p1Score++;
                        point = true;
                    }else{
                        tar.parentElement.parentElement.previousElementSibling.children[index].querySelector("#claim-square").children[0].style.fill = p2Color;
                        //p2SCore++;
                        point = true;
                    }
                }
            }
            //NO POINT
            if(!point){
                p1Turn = !p1Turn;
                if(p1Turn){
                    document.getElementById("playspace").style.borderColor = p1Color;
                }else{
                    document.getElementById("playspace").style.borderColor = p2Color;
                }
            }
        }
        
    }
}

