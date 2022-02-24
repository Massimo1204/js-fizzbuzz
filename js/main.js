let randomNumber;
const box = document.getElementById('box');
const boxBox = document.getElementById('my-box-box');
const button = document.getElementById('button-off');
let counter = 2 ;
const newBox = document.createElement('div');
newBox.classList.add('my-box' , 'd-inline-block');

function addBoxes(){
    randomNumber = Math.floor(Math.random() * 9 + 1);

    for(let i = 0 ; i <= randomNumber ; i++){
        boxBox.append(newBox);

        if( (counter % 3) == 0 && (counter % 5) == 0) {
            newBox.innerHTML = "FIZZBUZZ";
        }
        else if( (counter % 3) == 0){
            newBox.innerHTML = "FIZZ";
        }
        else if((counter % 5) == 0){
            newBox.innerHTML = "BUZZ";
        }
        else{
            newBox.innerHTML=counter;
        }

    } 
    counter++;
}

button.addEventListener('click' , addBoxes );
