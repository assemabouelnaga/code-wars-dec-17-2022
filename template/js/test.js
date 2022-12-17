//Daily code wars Dec 17


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
