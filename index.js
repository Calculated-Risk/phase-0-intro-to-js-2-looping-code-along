// function writeCards that accepts two arguments
// array of string name and event name.
let names = [];

function writeCards(names, event){
 let newArray = [];
 debugger;
//create a for loop wih a counter that starts at 0 and 
//increments at the end of each loop and should stop
//at the end of the length of array
for( let i = 0; i < names.length; i++){
   newArray[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
}
 return newArray;
}

function countDown(num){
    let i = num;
    while ( i >= 0){
        console.log(i--)
    }
    return countDown
}
countDown(numbers)