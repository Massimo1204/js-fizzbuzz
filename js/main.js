let randomNumber;
const box = document.getElementById('box');
const boxBox = document.getElementById('my-box-box');
const button = document.getElementById('button-off');
let counter = 2 ;

function addBoxes(){
    randomNumber = Math.floor(Math.random() * 9 + 1);

    for(let i = 0 ; i <= randomNumber ; i++){
        boxBox.append(box);

        if( (counter % 3) == 0 && (counter % 5) == 0) {
            box.innerHTML = "FIZZBUZZ";
        }
        else if( (counter % 3) == 0){
            box.innerHTML = "FIZZ";
        }
        else if((counter % 5) == 0){
            box.innerHTML = "BUZZ";
        }
        else{
            box.innerHTML=counter;
        }

    } 
    counter++;
}

button.addEventListener('click' , addBoxes );
