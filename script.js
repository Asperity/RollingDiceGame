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
    dieRolled = []; 
    inputContainer.die.value = "";
    inputContainer.roll.value = "";
    faces = [0,0,0,0,0,0];

    while(timeRoll > 0)
    {
        setTimeout(rollDie(), 2000);
        timeRoll--;
    }
    runStats();
}

function runStats(){
    dieAverage = dieRolled.reduce((accumulator,currentValue) => accumulator + currentValue)/dieRolled.length;
    dieMedian = dieRolled[Math.floor(dieRolled.length/2)];
    dieMode = 0;
    for(var i; i < 0; i++){
        if(dieRolled[max] < dieRolled[i])
        {
            max = i;
        }
    }
    console.log(dieRolled);
    console.log(dieAverage);
    console.log(dieMedian);
    console.log(dieMode+1);

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
        dieRolled.push(dieOne);
        if(dieOne == 1)
        {
            imgOne.src = "1.png";
            faces[0]++;
        }
        else if(dieOne == 2)
        {
            imgOne.src = "2.png";
            faces[1]++;
        }
        else if(dieOne == 3)
        {
            imgOne.src = "3.png";
            faces[2]++;
        }
        else if(dieOne == 4)
        {
            imgOne.src = "4.png";
            faces[3]++;
        }
        else if(dieOne == 5)
        {
            imgOne.src = "5.png";
            faces[4]++;
        }
        else
        {
            imgOne.src = "6.png";
            faces[5]++;
        }
        if(numDie >= 2)
        {
            dieRolled.push(dieTwo); 
            if(dieTwo == 1)
            {
                imgTwo.src = "1.png";
                faces[0]++;
            }
            else if(dieTwo == 2)
            {
                imgTwo.src = "2.png";
                faces[1]++;
            }
            else if(dieTwo == 3)
            {
                imgTwo.src = "3.png";
                faces[2]++;
            }
            else if(dieTwo == 4)
            {
                imgTwo.src = "4.png";
                faces[3]++;
            }
            else if(dieTwo == 5)
            {
                imgTwo.src = "5.png";
                faces[4]++;
            }
            else
            {
                imgTwo.src = "6.png";
                faces[5]++;
            }
            if(numDie == 3)
            {
                dieRolled.push(dieThree); 
                if(dieThree == 1)
                {
                    imgThree.src = "1.png";
                    faces[0]++;
                }
                else if(dieThree == 2)
                {
                    imgThree.src = "2.png";
                    faces[1]++;
                }
                else if(dieThree == 3)
                {
                    imgThree.src = "3.png";
                    faces[2]++;
                }
                else if(dieThree == 4)
                {
                    imgThree.src = "4.png";
                    faces[3]++;
                }
                else if(dieThree == 5)
                {
                    imgThree.src = "5.png";
                    faces[4]++;
                }
                else
                {
                    imgThree.src = "6.png";
                    faces[5]++;
                }
            }
        }
    }
}