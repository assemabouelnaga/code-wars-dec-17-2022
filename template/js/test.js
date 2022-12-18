//Daily codewars dec 18

//Count by X
function multiplesOfANumber(x,n){
    let newArr = [];
    newArr.length = n;
    return newArr.fill(x).map((e,i) => e = e * (i+1));
    
}

console.log(multiplesOfANumber(7,10))
// can also solve via: 

const multiplesOfNumber = (x,n) => Array.from({length: n}, (e, i) => x * (i+1));

//If you can't sleep, just count sheep!!

function countSheep(num){
    let str = '';
    for(let i = 1; i<=num; i++){
        str = str + `${i} sheep...`
    }
    return str;
}
console.log(countSheep(0));

//Transportation on vacation

function rentalAmount(days){
    let rent;
    return days >= 7 ? rent = (40 * days) - 50 : days >= 3 ? rent = (40 * days) - 20 : rent = (40 * days);
}

console.log(rentalAmount(7))

//Grasshopper - Personalized Message

function personalizedMessage(name, owner){
    if(name == owner){
        return 'Hello boss'
    }else{
        return 'Hello guest'
    }
}

// Rock Paper Scissors

function rockPaperScissors(input1,input2){
    if(input1 == input2){
        return "Draw!"
    }else if(input1 == 'rock' && input2 == 'scissors' || input1 == 'paper' && input2 == 'rock' || input1 == 'scissors' && input2 == 'paper'){
        return "Player 1 won!"
    }else {
        return "Player 2 won!"
    }
}
// not best practice especially as should not let a single line run on for so long