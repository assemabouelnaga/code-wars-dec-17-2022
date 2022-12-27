/*---------------------------
Daily codewars Dec 17
---------------------------*/


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

/*---------------------------
Daily codewars Dec 18
---------------------------*/

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

/*---------------------------
Daily codewars Dec 19
---------------------------*/

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

/*---------------------------
Daily codewars Dec 20
---------------------------*/

//Third angle of a triangle
const thirdAngle = (a,b) => 180 - (a + b)

// Thinkful - Logic Drills: Traffic lightt
function nextLight(light){
    return light == 'green' ? 'yellow' : light == 'yellow' ? 'red' : 'green'
}

//Training on Sum without highest and lowest number

function sumNotHighestLowest(input){
    if(input == false || input ==null || input.length < 3 || input == []){
        return 0;
    } else {
        let sorted = input.sort((a,b) => a-b)
        let filtered = sorted.filter((e,i) =>(i != 0 && i != input.length -1));
        return filtered.reduce((acc,c) => acc +c);
    }
};

//L1: Set alarm
function setAlarm(employed, vacation){
    return employed && !vacation
}

//Array plus array

function arrayPlusArray(arr1,arr2){
    return arr1.reduce((acc,c) => acc+c) + arr2.reduce((acc,c) => acc+c)
}
//can also use return arr1.concat(arr2).reduce ....

//Double char
function repeat(str){
    let doubleString = [];
    str.split("").forEach(e => doubleString.push(e,e))
    return doubleString.join('')
    };

console.log(repeat('Hello I Am Soooom!!'))

//remember use .map(e => e + e) instead of forEach!
//also silly regexp: str.replace(/(.)/g,"$1$1")

//Beginner Series#4 Cockroach

function cockroachSpeed(s) {
    return Math.floor(s *1000/36)
}

//The feast of many beasts

function feast(beast,dish){
   return (beast.charAt(0) == dish.charAt(0) && beast.charAt(beast.length-1) == dish.charAt(dish.length-1))      
}

/*---------------------------
Daily codewars Dec 21
---------------------------*/

//Parse nice int from char problem

function getAge(inputString){
    return parseInt(inputString.charAt(0))
  }
//ffind the first non-consecutive number

function firstNonConsecutive (arr) {
    for (let i=0; i <= arr.length; i++){
        if(arr[i] +1 == arr[i+1]) continue;

        if(arr == null || arr.length < 2){
            return null
        }else if(arr[i] +1 !== arr[i+1]){
            return arr[i+1]
       }else{
            return null
       }
    }
}
// needs refactoring for fully consecutive arrays *****


// Twice as old

function twiceAsOld(age1,age2){
    for(let i=0; i < 75; i++){
     if(age1 == age2 /2){return i}
         ++age1;
         ++age2;
    }
}

//refactor b/c only accounts for time in future not past****


// Switch it up

function switchItUp(number){
    switch(number){
          case 0: return 'Zero';
              break;
          case 1: return 'One';
              break;
          case 2: return 'Two';
              break;
          case 3: return 'Three';
              break;
          case 4: return 'Four';
              break;
          case 5: return 'Five';
              break;
          case 6: return 'Six';
              break;
          case 7: return 'Seven';
              break;
          case 8: return 'Eight';
              break;
          case 9: return 'Nine';
              break;
      }
}
//Will there be enough space
 
function enough(cap, on, wait) {
    return (cap - on - wait) >= 0 ? 0 : Math.abs(cap - on - wait)
}
// or return (on + wait < cap) ? on + wait - cap : 0
// or can use Math.max(wait + on - cap, 0)


/*---------------------------
Daily codewars Dec 22
---------------------------*/

//grasshopper- check for factor

function checkFactor(base,factor){
    return base % factor == 0;
}

//keep up the hoop
const hoopCount = n => n < 10 ? 'Keep at it until you get it' : 'Great, now move on to tricks';

//removing elements

function removingElements(arr){
    return arr.filter((e,i) => i % 2 != 0)
}

//Grasshopper - debug sayHello

function sayHello(name){
    return `Hello, ${name}`
}

// function 2 =squaring an arguement

const square = num => Math.pow(num,2)

// is the string uppcase?

String.prototype.isUpperCase = function(str) {
    return String(this) == this.toUpperCase()
}
// left hand side would be object hence use double equal. 
//this regex worked only for all caps input... return str.replace(/ /g,'') == str.match(/[A-Z]/g).join('')


/*---------------------------
Daily codewars Dec 23
---------------------------*/


//Is it even?

function testEven(n) {
    return n % 2 == 0
}

// Powers of 2

function powersOfTwo(n){
    if(n == 0){
      return [1]
    }
    else{
      let x = n +1 ;
      return Array(x).fill(n).map((e,i) => Math.pow(2,i))
    }
  }

// What is between?

function between(a, b, length = (b-a+1)) {
    return Array.from({length}, () => a++)
}

// Correct the mistakes of the character recognition softwar
function correct(string){
	return string.replace(/0/g,'O').replace(/5/g,'S').replace(/1/g,'I')
}

// Student's final grade

function finalGrade(exam, projects){
    if(exam > 90 || projects > 10){
        return 100
    }else if(exam > 75 && projects >= 5){
        return 90
    }else if(exam > 50 && projects >= 2){
        return 75
    }
    return 0
}


/*---------------------------
Daily codewars Dec 24
---------------------------*/

//I love you, a little, a lot, passionately... not at all

function howMuchILoveYou(nbPetals){
    let remains = nbPetals % 6;
    let loveArr = [
        'I love you',
        'a little',
        'a lot',
        'passionately',
        'madly',
        'not at all'
    ]
  if(nbPetals == 1 || remains == 1){
    return loveArr[0]
  }else if(nbPetals == 2 || remains == 2){
    return loveArr[1]
  }else if(nbPetals == 3 || remains == 3){
    return loveArr[2]
  }else if(nbPetals == 4 || remains == 4){
    return loveArr[3]
  }else if(nbPetals == 5 || remains == 5){
    return loveArr[4]
  }else if(nbPetals == 6 || remains == 0){
    return loveArr[5]
  }
}

// can do without nbPetals because 3 % 6 is also 3


//Is it a palindrome?

function isPalindrome(x) {
    return x.toLowerCase() == x.split('').reverse().join('').toLowerCase()
}

//Welcome!

function greetMe(language){
    let languageGreetings = {
            english: 'Welcome',
            czech: 'Vitejte',
            danish: 'Velkomst',
            dutch: 'Welkom',
            estonian: 'Tere tulemast',
            finnish: 'Tervetuloa',
            flemish: 'Welgekomen',
            french: 'Bienvenue',
            german: 'Willkommen',
            irish: 'Failte',
            italian: 'Benvenuto',
            latvian: 'Gaidits',
            lithuanian: 'Laukiamas',
            polish: 'Witamy',
            spanish: 'Bienvenido',
            swedish: 'Valkommen',
            welsh: 'Croeso'
    };
    if(!language || language in languageGreetings == false){
        return languageGreetings.english
    } else {
        return languageGreetings[language]
    }
}

// Sum the strings

function sumStr(a,b) {
    return String(+a + +b)
}

//Regular Ball Super Ball

let Ball = function(ballType ='regular') {
    this.ballType = ballType
};

/*---------------------------
Daily codewars Dec 25
---------------------------*/

// N-th Power

function nPower(array,num){
    return Math.pow(array[num],num) || -1
}

// Reverse List order

function reverseList(list){
    return list.reverse()
}

// How many lightsabers do you own?

function sabersOwned(name){
    return name != 'Zach' ? 0 : 18
}

// Filling an array(part1)

const fillArr = (N = 0) => Array(N).fill(0).map((e,i) => e = N -(N-i));

//Filter out the geese

function gooseFilter (bird) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return bird.filter(birds => birds != geese[0] && birds != geese[1] &&  birds != geese[2] && birds != geese[3] && birds != geese[4])
}
/* The above wouldnt work well for long arrays so use one of:
.filter(b => !geese.includes(b)) or .filter(b => geese.indexOf(b) == -1) */

// Find the first non-consecutive number

function firstNonConsecutive(arr) {
    if(arr == null || arr.length < 2){
        return null
    }
    let sum1 = arr.reduce((a,b) => a+b)
    let sum2 = Array(arr.length).fill(arr[0]).map((e,i) => arr[0]++).reduce((a,b) => a+b)
    
    if(sum1 == sum2){
        return null
    }
    for(let j = 1; j <= arr.length; j++){
        arr[0]--
    }
    for(let i =0; i < arr.length; i++){
        if(arr[i] +1 != arr[i+1]){
            return arr[i+1]
        }
    }
}
/* why did i overly complicate this? everything above the last for loop simplifies to
else {return null}

can also do

function firstNonConsecutive (arr) {
    let result = arr.find((val, index) => val !== index + arr[0]);

    return (Number.isInteger(result)) ? result : null;
}



/*---------------------------
Daily codewars Dec 26
---------------------------*/

// Whats the real floor?

const getRealFloor = n =>  n > 13 ? n - 2 : n > 0 ? n - 1 : n;


// Well of Ideas - easy versuib
function well(x){
    return x.filter(e => e.length == 4).length > 2 ? 'I smell a series!' : 
    x.filter(e => e.length == 4).length > 0 ? 'Publish!' : 'Fail!'
}

// Drink About

function peopleWithAgeDrink(old) {
    return 'drink ' + (old >= 21 ? 'whisky' : old >= 18 ? 'beer' : old >= 14 ? 'coke' : 'toddy')
};

//Find multiples of a Number

function findMultiples(n1,n2){
    let newArr = []
    for(let i = n1; i <= n2; i++){
        if(i % n1 ==0){
            newArr.push(i)
        }
    }
}

// Vowel remover

function vowelRemover(str){
    return str.replaceAll(/['a','e','i','o','u']/g,'')
}

/*---------------------------
Daily codewars Dec 27
---------------------------*/

//Grasshopper - terminal game move function

function move (position, roll) {
    return position + 2 * roll
}

//plural

function plural(n) {
    return n == 1 ? false : true
}

//name shuffler
function nameShuffler(str){
    return str.split(' ').reverse().join(' ')
}

// a wolf in sheep's clothing

function warnTheSheep(queue) {
    let wolfy = queue.length -1 - queue.indexOf('wolf')
    return queue.indexOf('wolf') == queue.length -1 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${wolfy}! You are about to be eaten by a wolf!`
}

//the wide-mouthed frog!

function mouthSize(animal) {
    return animal.toLowerCase() == 'alligator' ? 'small' : 'wide'
}


/*---------------------------
Daily codewars Dec 28
---------------------------*/

//do Training JS# ...