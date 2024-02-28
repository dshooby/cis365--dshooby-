/* add code below this */

let bill = prompt("What is the billed total?");
let iBill = Number(bill); //parses user input to number

const TIP_PERCENTAGE = 0.10;
let tip = iBill * TIP_PERCENTAGE;

if (iBill !=undefined && iBill !=0)
{
console.log("For bill of $ "+bill+" the tip should be $ "+tip);
console.log(`For bill of $${bill} the tip should be $ ${tip}`);
} else {
    console.log(`${bill}  is not valid number`);
}