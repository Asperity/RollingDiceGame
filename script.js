function initialize(){
     inputContainer = document.getElementById("form");
     imgOne = document.getElementById("die1");
     imgTwo = document.getElementById("die2");
     imgThree = document.getElementById("die3");
     numDie = 0;
     timeRoll = 0;
     
}

function inputData(){
    numDie = inputContainer.die.value;
    timeRoll = inputContainer.roll.value;
    
    inputContainer.die.value = "";
    inputContainer.roll.value = "";

    rollDie();
}

function rollDie(){
    dieOne = Math.floor(Math.random()*6)+1;
    dieTwo = Math.floor(Math.random()*6)+1;
    dieThree = Math.floor(Math.random()*6)+1;
    imgOne.src = "";
    imgTwo.src = "";
    imgThree.src = "";
    if(numDie >= 1)
    {
        
        if(dieOne == 1)
        {
            imgOne.src = "1.png";
        }
        else if(dieOne == 2)
        {
            imgOne.src = "2.png";
        }
        else if(dieOne == 3)
        {
            imgOne.src = "3.png";
        }
        else if(dieOne == 4)
        {
            imgOne.src = "4.png";
        }
        else if(dieOne == 5)
        {
            imgOne.src = "5.png";
        }
        else
        {
            imgOne.src = "6.png";
        }
        if(numDie >= 2)
        {
            if(dieTwo == 1)
            {
                imgTwo.src = "1.png";
            }
            else if(dieTwo == 2)
            {
                imgTwo.src = "2.png";
            }
            else if(dieTwo == 3)
            {
                imgTwo.src = "3.png";
            }
            else if(dieTwo == 4)
            {
                imgTwo.src = "4.png";
            }
            else if(dieTwo == 5)
            {
                imgTwo.src = "5.png";
            }
            else
            {
                imgTwo.src = "6.png";
            }
            if(numDie == 3)
            {
                if(dieThree == 1)
                {
                    imgThree.src = "1.png";
                }
                else if(dieThree == 2)
                {
                    imgThree.src = "2.png";
                }
                else if(dieThree == 3)
                {
                    imgThree.src = "3.png";
                }
                else if(dieThree == 4)
                {
                    imgThree.src = "4.png";
                }
                else if(dieThree == 5)
                {
                    imgThree.src = "5.png";
                }
                else
                {
                    imgThree.src = "6.png";
                }
            }
        }
    }
}