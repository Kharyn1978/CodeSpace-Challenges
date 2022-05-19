let myOutputElement = document.getElementById("theOutput");

let myArray=[];

function fizzBuzz() {
//Populating the Array with numbers 
    for (let i = 1 ; i < 101; i++) {
        myArray.push(i);
        myOutputElement.innerHTML = myArray; 
    }
}