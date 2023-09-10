
 function roll_dice(){
    

    var randomNumber = Math.floor(Math.random() * 6) + 1;

    var randomDiceImage = "dice" + randomNumber + ".png" ;
    
    var randomImageSource = "images/" + randomDiceImage ;
    
    var image1 = document.querySelectorAll("img")[0] ;
    
    image1.setAttribute("src", randomImageSource) ;
   
    }
