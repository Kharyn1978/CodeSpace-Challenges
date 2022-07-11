let myElement; //for display only
let theText; //for display only
let total = 0; // We start with zero people in out flat block census
let average; //make an empty box for the average


//Create an array
let OurflatBlock = [2, 7, 5, 4, 5, 7, 4, 8, 2, 8, 9, 3, 9, 3, 5, 0, 1, 4, 7, 4, 3, 6, 4, 3, 6, 8, 5, 4, 5, 7,];

//Let's see the amount of inhibitants of every flat
function displayInhabitantsAmount() {
    //the i represents out flat number (30 in this case)
    //OurflatBlock.length reprersents the abount of flats
    //OurflatBlock[i] this is how we go to a specific flat. We write the flat block name which is OurflatBlock and then the flat number that is represented by the i

    //Creates an h2 element to display the text in
    myElement = document.createElement("h2");
    //Creates a text node to put inside the created h2
    theText = document.createTextNode("The amount of flats represented by OurflatBlock.length is " + OurflatBlock.length);
    //Puts the created text node into the created h2 element
    myElement.appendChild(theText);
    //Puts the created h2 that now contains the created text node into the output div in the html with the id="displayH2" 
    document.getElementById("displayH2").appendChild(myElement);

    //Creates an h2 element to display the text in
    myElement = document.createElement("h2");
    //Creates a text node to put inside the created h2
    theText = document.createTextNode("Our Array 'OurflatBlock' looks like this: " + OurflatBlock);
    //Puts the created text node into the created h2 element
    myElement.appendChild(theText);
    //Puts the created h2 that now contains the created text node into the output div in the html with the id="displayH2" 
    document.getElementById("displayH2").appendChild(myElement);

    //Creates an h2 element to display the text in
    myElement = document.createElement("h2");
    //Creates a text node to put inside the created h2
    theText = document.createTextNode("Open the console window to see the amount of people in every flat next to the flat number");
    //Puts the created text node into the created h2 element
    myElement.appendChild(theText);
    //Puts the created h2 that now contains the created text node into the output div in the html with the id="displayH2" 
    document.getElementById("displayH2").appendChild(myElement);
    console.log("Click on the output and then the flat number will be on the left and the amount of inhabitants will be on the right");
    console.log(OurflatBlock);
    console.log("length is the amount of flats");


    console.log("               ");
    console.log("Let's calulate the total");
    for (let i = 0; i < OurflatBlock.length; i++) {

        //Creates an h2 element to display the text in
        myElement = document.createElement("h5");
        //Creates a text node to put inside the created h2
        theText = document.createTextNode("Flat number i=" + i + " contains " + OurflatBlock[i] + " amount of people");
        //Puts the created text node into the created h2 element
        myElement.appendChild(theText);
        //Puts the created h2 that now contains the created text node into the output div in the html with the id="displayH2" 
        document.getElementById("displayH2").appendChild(myElement);

        //Let's calculate the total amount of people in this flat block we will do it in the console

        total = total + OurflatBlock[i];
        //Fist total is 0. Then total adds the number of inhabitants in flat i=0 so we access the first flat in OurflatBlock by going to OurflatBlock[0] which is represented by i=0.
        //So it's total=0 + OurflatBlock[i=0] which is 0 + 2 and thus total becomes total = 2;
        //Then i increments via i++ and becomes 1
        console.log("total now is " + total + " and we added the number of inhabitants of flat numner " + i + " by going to the flat via OurflatBlock[i] with i=" + i);

        //Now total is total=2. Then total adds the number of inhabitants in flat i=1 so we access the second flat in OurflatBlock by going to OurflatBlock[1] which is represented by i=1.
        //So it's total=2 + OurflatBlock[i=1] which is 2 + 7 and thus total becomes total = 9;
        //Then i increments via i++ and becomes 2

        //Now total is total=9. hen total adds the number of inhabitants in flat i=2 so we access the third flat in OurflatBlock by going to OurflatBlock[2] which is represented by i=2.
        //So it's total=9 + OurflatBlock[i=2] which is 9 + 5 and thus total becomes total = 14;
        //Then i increments via i++ and becomes 3

        //Now total is total=14. hen total adds the number of inhabitants in flat i=3 so we access the forth flat in OurflatBlock by going to OurflatBlock[3] which is represented by i=3.
        //So it's total=14 + OurflatBlock[i=3] which is 14 + 4 and thus total becomes total = 18;
        //Then i increments via i++ and becomes 4

        //Now total is total=18. hen total adds the number of inhabitants in flat i=4 so we access the fith flat in OurflatBlock by going to OurflatBlock[4] which is represented by i=4.
        //So it's total=18 + OurflatBlock[i=4] which is 18 + 5 and thus total becomes total = 23;
        //Then i increments via i++ and becomes 5

        //And this repeats until i becomes i=29 which is the last flat in OurflatBlock

    }

    console.log("The final total is: " + total);

    average = total / OurflatBlock.length;
    //OurflatBlock.length is the amount of flats so we can use it as the total amount of flats in the flat block
    console.log("The average inhabitants per flat in this flat block is: " + average);


    //The for loop:
    //let i=0 means we start at the first flat which is index 0. The first flat has the number 0
    //i++ means that we are just adding 1 every time so we are simply moving on to the next flat whic will have the flat numver of 1
    //i<OurflatBlock.length means that because the first flat number is 0, our last flat number will be 29 even though there are 30 flats so we are only going to loop until i=29 and not until it's 30. Thus 29<30 which is what we said with i < OurflatBlock.length


}
