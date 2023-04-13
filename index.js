// Code your solutions in this file
let names = [];

function writeCards(names){
    let thankYou = [];
for (let i = 0; i < names.length; i++ ){
    thankYou[i] =`Thank you, ${names[i]}, for the wonderful surprise gift!`;
    debugger;
    console.log(thankYou)
}
return thankYou;
}
writeCards(names);

///////////////////////////////////////////////////////////////////////////////////////


function countDown(num){ 
    let i = num;
    for (i = num; i >=0; i--){
        console.log(i)
    }

  }

