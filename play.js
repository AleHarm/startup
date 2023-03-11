var p1Turn = true;
var firstClick = true;
var playSpace = document.getElementById("playspace");
const colorSelector1 = document.getElementById("color-selector1");
const colorSelector2 = document.getElementById("color-selector2");
document.querySelectorAll('.dash').forEach( x=> x.setAttribute("clicked", false));
var p1Color = "#0014A8";
var p2Color = "#CC9911";
var p1Score = 0;
var p2Score = 0;
playSpace.style.borderColor = "#0014A8";

if(localStorage.getItem("Player") == ""){

    document.getElementById("color-selector-label1").innerHTML = "Guest User";
    document.getElementById("score-text-1").innerHTML = "Guest User";
}else{
    document.getElementById("color-selector-label1").innerHTML = localStorage.getItem("Player");
    document.getElementById("score-text-1").innerHTML = localStorage.getItem("Player");
}

colorSelector1.addEventListener("change", (event) => {
    const colorName = event.target.value;
    const oldColor = p1Color;

    switch(colorName){
        case 'Zaffre':
            var newColor = "#0014A8";
            break;
        case 'Australien':
            var newColor = "#CC9911";
            break;
        case 'Drunk-Tank-Pink':
            var newColor = "#FF91AF";
            break;
        case 'Falu':
            var newColor = "#801818";
            break;
        case 'Drake’s-Neck-Green':
            var newColor = "#08B07C";
            break;
        case 'Razzmatazz':
            var newColor = "#E3256B";
            break;
        case 'Caput-Mortuum':
            var newColor = "#592720";
            break;
        case 'Goose-Turd-Green':
            var newColor = "#4EA809";
            break;
        case 'Lusty-Gallant':
            var newColor = "#FD7F4F";
            break;
        case 'Glaucous':
            var newColor = "#6082B6";
            break;
        case 'Milk-and-Water':
            var newColor = "#F6F6FF";
            break;
        case 'Puke':
            var newColor = "#947706";
            break;
        case 'Gingerline':
            var newColor = "#FCCB4F";
            break;
    }
    
    for(var i = 0; i < document.getElementById("color-selector2").childElementCount; i += 1){

        document.getElementById("color-selector2").children[i].style.display = "auto";
    }

    document.getElementById(colorName + "2").style.display = "none";

    p1Color = newColor;
    if(p1Turn){
        playSpace.style.borderColor = p1Color;
    }
});

colorSelector2.addEventListener("change", (event) => {
    const colorName = event.target.value;

    switch(colorName){
        case 'Zaffre':
            var newColor = "#0014A8";
            break;
        case 'Australien':
            var newColor = "#CC9911";
            break;
        case 'Drunk-Tank-Pink':
            var newColor = "#FF91AF";
            break;
        case 'Falu':
            var newColor = "#801818";
            break;
        case 'Drake’s-Neck-Green':
            var newColor = "#08B07C";
            break;
        case 'Razzmatazz':
            var newColor = "#E3256B";
            break;
        case 'Caput-Mortuum':
            var newColor = "#592720";
            break;
        case 'Goose-Turd-Green':
            var newColor = "#4EA809";
            break;
        case 'Lusty-Gallant':
            var newColor = "#FD7F4F";
            break;
        case 'Glaucous':
            var newColor = "#6082B6";
            break;
        case 'Milk-and-Water':
            var newColor = "#F6F6FF";
            break;
        case 'Puke':
            var newColor = "#947706";
            break;
        case 'Gingerline':
            var newColor = "#FCCB4F";
            break;
    }

    for(var i = 0; i < document.getElementById("color-selector1").childElementCount; i += 1){

        document.getElementById("color-selector1").children[i].style.display = "auto";
    }

    document.getElementById(colorName + "1").style.display = "none";

    p2Color = newColor;
    if(!p1Turn){
        playSpace.style.borderColor = p2Color;
    }
});

function swapColorForScore(){
    document.getElementById("color-selector-wrap-wrap").style.display = "none";
    document.getElementById("scores").style.display = "flex";
}

function resetBoard(){
    location.reload();
}

function clickHandler(e) {
    tar = e.target;
    var point = false;

    if(firstClick){
        firstClick = false;
        swapColorForScore();
    }
    
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

        if(tar.getAttribute("id") == "dash-vert"){

            //RIGHT
            if(tar.parentElement.parentElement.nextElementSibling.children[index].querySelector("#dash-hor") || tar.parentElement.querySelector("#dash-hor") || tar.parentElement.nextElementSibling){
                if(tar.parentElement.parentElement.nextElementSibling.children[index].querySelector("#dash-hor").children[0].style.fill && tar.parentElement.querySelector("#dash-hor").children[0].style.fill && tar.parentElement.nextElementSibling.querySelector("#dash-vert").children[0].style.fill){
                    if(p1Turn){
                        tar.parentElement.querySelector("#claim-square").children[0].style.fill = p1Color;
                        p1Score += 1;
                        point = true;
                        document.getElementById("p1Score").innerHTML = p1Score;
                    }else{
                        tar.parentElement.querySelector("#claim-square").children[0].style.fill = p2Color;
                        p2Score++;
                        point = true;
                        document.getElementById("p2Score").innerHTML = p2Score;
                    }
                }
            }
            //LEFT
            if(tar.parentElement.parentElement.nextElementSibling.children[index - 1] || tar.parentElement.previousElementSibling || tar.parentElement.previousElementSibling){
                if(tar.parentElement.parentElement.nextElementSibling.children[index - 1].querySelector("#dash-hor").children[0].style.fill && tar.parentElement.previousElementSibling.querySelector("#dash-hor").children[0].style.fill && tar.parentElement.previousElementSibling.querySelector("#dash-vert").children[0].style.fill){
                    if(p1Turn){
                        tar.parentElement.previousElementSibling.querySelector("#claim-square").children[0].style.fill = p1Color;
                        p1Score += 1;
                        point = true;
                        document.getElementById("p1Score").innerHTML = p1Score;
                    }else{
                        tar.parentElement.previousElementSibling.querySelector("#claim-square").children[0].style.fill = p2Color;
                        p2Score++;
                        point = true;
                        document.getElementById("p2Score").innerHTML = p2Score;
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
                        p1Score += 1;
                        point = true;
                        document.getElementById("p1Score").innerHTML = p1Score;
                    }else{
                        tar.parentElement.querySelector("#claim-square").children[0].style.fill = p2Color;
                        p2Score += 1;
                        point = true;
                        document.getElementById("p2Score").innerHTML = p2Score;
                    }
                }
            }
            //ABOVE
            if(tar.parentElement.parentElement.previousElementSibling && tar.parentElement.parentElement.previousElementSibling.children[index].querySelector("#dash-vert") && tar.parentElement.parentElement.previousElementSibling.children[index + 1].querySelector("#dash-vert")){
                if(tar.parentElement.parentElement.previousElementSibling.children[index].querySelector("#dash-hor").children[0].style.fill && tar.parentElement.parentElement.previousElementSibling.children[index].querySelector("#dash-vert").children[0].style.fill && tar.parentElement.parentElement.previousElementSibling.children[index + 1].querySelector("#dash-vert").children[0].style.fill){
                    if(p1Turn){
                        tar.parentElement.parentElement.previousElementSibling.children[index].querySelector("#claim-square").children[0].style.fill = p1Color;
                        p1Score += 1;
                        point = true;
                        document.getElementById("p1Score").innerHTML = p1Score;
                    }else{
                        tar.parentElement.parentElement.previousElementSibling.children[index].querySelector("#claim-square").children[0].style.fill = p2Color;
                        p2Score += 1;
                        point = true;
                        document.getElementById("p2Score").innerHTML = p2Score;
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
        
        if((p1Score + p2Score) >= 9){
            if(localStorage.getItem("Player") != ""){

                if(localStorage.getItem(localStorage.getItem("Player") + "W") == null){
                    localStorage.setItem(localStorage.getItem("Player") + "W", "0");
                    localStorage.setItem(localStorage.getItem("Player") + "L", "0");
                    localStorage.setItem(localStorage.getItem("Player") + "WL", "0");
                }
    
                var playerW = parseInt(localStorage.getItem(localStorage.getItem("Player") + "W"));
                var playerL = parseInt(localStorage.getItem(localStorage.getItem("Player") + "L"));
               
                if(p1Score > p2Score){

                    playerW += 1;
                    var playerWL = playerW / playerL;
                    localStorage.setItem(localStorage.getItem("Player") + "WL", playerWL);
                    localStorage.setItem(localStorage.getItem("Player") + "W", playerW);
                    window.alert(localStorage.getItem("Player") + " wins!!! \nPress \"Reset Board\" at bottom of page to play again!");
                    
                }else if( p1Score < p2Score){
                    
                    playerL += 1;
                    var playerWL = playerW / playerL;
                    localStorage.setItem(localStorage.getItem("Player") + "WL", playerWL);
                    localStorage.setItem(localStorage.getItem("Player") + "L", playerL);
                    window.alert("Player 2 wins!!! \nPress \"Reset Board\" at bottom of page to play again!");
                }else{
                    window.alert("It's a tie!!! \nPress \"Reset Board\" at bottom of page to play again!");
                }
            }else{
                if(p1Score > p2Score){
                    window.alert("Guest User wins!!! \nPress \"Reset Board\" at bottom of page to play again!");
                }else if( p1Score < p2Score){
                    window.alert("Player 2 wins!!! \nPress \"Reset Board\" at bottom of page to play again!");
                }else{
                    window.alert("It's a tie!!! \nPress \"Reset Board\" at bottom of page to play again!");
                }
            }
        }
    }
}

