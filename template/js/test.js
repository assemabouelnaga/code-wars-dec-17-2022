/*-----
Daily codewars Dec 17
-----*/


// How good are you really

function betterThanAvg(arr,score){
    let avg = arr.reduce((acc,c) => acc + c) / arr.length;
    return score > avg
}
let newArr = [2,4,6,8,10];
console.log(betterThanAvg(newArr,5)) 



//Reverse sequence

function reverseSequence(num){
    let arr = [];
    for(let i=1; i <= num ; i++){
        arr.unshift(i)
    };
    return arr
};

console.log(reverseSequence(6)) 



//Beginner - reduce but grow

function multiplyNumsInArray(arr){
    let sum = 1;
    arr.forEach(e => {
        sum *= e;
    });
    return sum;
}

//can also use reduce:

function multiplyTheNumsInArray(arr){
    return arr.reduce((acc,c) => a*c, 1)
}



//sentence smash

let sentenceSmash= (arr) => arr.join(' ').trim();

console.log(sentenceSmash(['hello','world','and','goodbye','world']))



//convert a string to an array

let stringToArray = (str) => str.split(' ');

console.log(stringToArray("my name is not string"))

/*-----
Daily codewars Dec 18
-----*/

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

/*-----
Daily codewars Dec 19
-----*/

//Surface Area and Volume of a Box

function getSizes(a,b,c){
    let area = 2 * (a * b + a * c + b * c) 
    let volume = a * b * c
    return Array(area, volume)
}

//Total amount of points

function getPoints(arr){
    let points = 0;
    arr.forEach( e => {
        if(e.charAt(0) > e.charAt(2)){
            points += 3;
        }else if(e.charAt(0) == e.charAt(2)){
            points += 1;
        }
    });
    return points
};

console.log(getPoints(['3:2','2:2','0:1']))

//Remove exclamation marks

function removeExclamationMarks(str){
    return str.replace(/!/g, '')
}

//Quarter of the year

function whichQuarterOfYear(month){
    switch(month){
        case 1:
        case 2:
        case 3:
            return 1
        break;
        case 4:
        case 5:
        case 6:
            return 2
        break;
        case 7:
        case 8:
        case 9:
            return 3
        break;
        case 10:
        case 11:
        case 12:
            return 4
        break;
    }
};
//alt can use const whichQuarter = m => Math.ciel(m/3)

//Grasshopper - Grade book

function avgGrade(score1,score2,score3){
    let avg = (score1 + score2 + score3) / 3;
    return avg < 60 ? 'F' : avg < 70 ? 'D' : avg < 80 ? 'C' : avg < 90 ? 'B' : 'A'
}

// Area or Perimeter

function squareOrRectangle(l,w){
    return l == w ? l * w : 2 * (l + w)
}

//Sum mixed array

function sumArray(arr){
    return arr.reduce((acc, c) => acc + +c, 0)
}