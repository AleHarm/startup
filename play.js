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

    if(tar.getAttribute("clicked")){
        tar.setAttribute("clicked", true);
        if(p1Turn){
            tar.children[0].style.fill = p1Color;
        }else{
            tar.children[0].style.fill = p2Color;
        }

        if(tar.getAttribute("id") === "dash-vert"){

            if(tar.previousElementSibling.children[0].style.fill){
                if(p1Turn){
                    tar.previousElementSibling.previousElementSibling.children[0].style.fill = p1Color;
                    //p1Score++;
                }else{
                    tar.previousElementSibling.previousElementSibling.children[0].style.fill = p2Color;
                    //p2SCore++;
                }
            }else if(/*SQUARE SURROUNDED*/false/*<--PLACEHOLDER*/){
                if(p1Turn){
                    tar.previousElementSibling.previousElementSibling.children[0].style.fill = p1Color;
                    //p1Score++;
                }else{
                    tar.previousElementSibling.previousElementSibling.children[0].style.fill = p2Color;
                    //p2SCore++;
                }
            }else{
                p1Turn = !p1Turn;
                if(p1Turn){
                    document.getElementById("playspace").style.borderColor = p1Color;
                }else{
                    document.getElementById("playspace").style.borderColor = p2Color;
                }
            }
        }else{
            if(/*SQUARE SURROUNDED*/false/*<--PLACEHOLDER*/){
                if(p1Turn){
                    //claimSquare.backgroundColor = p1Color;
                    //p1Score++;
                }else{
                    //claimSquare.backgroundColor = p2Color;
                    //p2SCore++;
                }
            }else{
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

