let theElement;
let theText;
const theOutput = document.getElementById("theOutput");

let = [];

function fizzBuzz() {
  //Populating the Array with numbers 
  for (let i = 1; i < 101; i++) {

    if ((i % 3 === 0) && (i % 5 === 0)) { // If the number being printed is a multiple of both 3 and 5 .
      myArray.push("Fizz-buzz"); // out the world "fizz-buzz" instead of the number.
      break;
    }

    else if (i % 3 === 0) {   // If a multiple of 3 prints 
      myArray.push("fizz"); // out the world "fizz" instead of the number.
      break;
    }

    else if (i % 5 === 0) { // If it is a multiple of 5 
      myArray.push("buzz"); // out the world "buzz" instead of the number .
      break;
    }

    else {
      myArray.push(i); // Pushes in the i when none of the condition are met and i is the number .
    }


    switch (i) {

      case (i % 3 === 0):
        alert("1");
        myArray.push("fizz");
        break;
      case (i % 5 === 0):
        alert("2");
        myArray.push("buzz");
        break;
      case ((i % 3 === 0) && (i % 5 === 0)):
        alert("3");
        myArray.push("fizzBuzz");
        break;
      default:
        nyArray.push("i");


    }

    // Diplaying the array
    for (let i = 0; i < myArray.length; i++) {
      myElement = document.createElement("h3");
      theText = document.createTextNode(myArray[i]);
      myElement.appendChild(theText);
      document.getElementById("theOutput").appendChild(myElement);

    }

  }

}


