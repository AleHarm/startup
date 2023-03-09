var playerOneTurn = true;

function clickHandler(e) {
    e.target.children[0].style.fill = "red";
    //if(CURRENT PLAYER DIDN'T GET A SQUARE){
        playerOneTurn = !playerOneTurn;
        
    //}else{
        //DO NOTHING
    //}
}