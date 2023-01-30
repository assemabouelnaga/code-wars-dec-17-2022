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



// JS #7 if... else and ternary operator

function saleHotdogs(n){
    return n * (n > 9 ? 90 : n > 4 ? 95 : 100)
}

//Training JS#5: Basic data types --Object
function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.` 
}


/*---------------------------
Daily codewars Dec 29
---------------------------*/

//Twice as old

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld)
}

//Expressions matter

function expressionsMatter(a,b,c){
    return Math.max(a+b+c, (a+b)*c, a*(b+c), a*b*c)
}

//Cat years, Dog years

function humanYearsCatYearsDogYears(humanYears){
    let cat = 15 + (humanYears == 2 ? 9 : (9 + 4*(humanYears-2)));
    let dog = 15 + (humanYears == 2 ? 9 : (9 + 5*(humanYears-2)));
    return [humanYears,cat,dog]; 
}

//Difference of Volumes of Cuboids

function findDifference(a,b){
    return Math.abs(a.reduce((acc,c) => acc * c, 1) - b.reduce((acc,c) => acc * c, 1))
}

//All Star Code challenge #18

function twoStrings(str1,str2){
    return str1.replaceAll(str2,7).split('').filter(e => e == 7).length
}

//not necessary to do replace all can just filter (e => e== str2)

//multiplaction table for number
function multiTable(number) {
    return `1 * ${number} = ${1*number}\n2 * ${number} = ${2*number}\n3 * ${number} = ${3*number}\n4 * ${number} = ${4*number}\n5 * ${number} = ${5*number}\n6 * ${number} = ${6*number}\n7 * ${number} = ${7*number}\n8 * ${number} = ${8*number}\n9 * ${number} = ${9*number}\n10 * ${number} = ${10*number}`
  
}
//use a loop obviously.. or objects or array even

//Exclusive "or" (xor) logical operator

function xor(a, b) {
    return a != b;
  }

/*---------------------------
Daily codewars Dec 30
---------------------------*/


//merge two sorted arrays into one

function mergeArrays(arr1,arr2){
    let sorted = [].concat(arr1, arr2).sort((a,b) => a-b);
    return sorted.filter((e,i) => sorted.indexOf(e) === i);
}

//Hello, Name or World!

function helloNameOrWorld(name){
    if(!name){name = 'world'}
    let named = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return `Hello, ${named}!`
}

//Convert to binary

function toBinary(num){
    let total = num;
    let anArr = []
    do {
        anArr.unshift(total % 2)
        if(total %2 == 1){total = (total -1) / 2}else{total /=2}
        console.log(total)
    } while (total != 0);
    return Number(anArr.join(''))
}
//apparently return +num.toString(2) works fine :)

// Holiday VIII - duty free

function cheers(normal,discount,holiday){
    let huh = normal * (discount/100)
    return Math.floor(holiday/huh)
}

//Lario and Muigi Pipe Problem

function pipeDown(arr){
    let newArr = []
    for(let i = Math.min(...arr); i <= Math.max(...arr); i++){
        newArr.push(i)
    }
    return newArr
}


/*---------------------------
Daily codewars Dec 31
---------------------------*/

// 5 Without numbers!!

function return5(){
    return 'hahah'.length
}
//Remove duplicates from list

function distinct(a) {
    return a.filter((e,i) => a.indexOf(e) == i)
}

//Or can use return [... new Set(a)]

// Hex to decimal

function hexToDecimal(hexString){
    return parseInt(hexString, 16)
}

//The 'if' function

function _if(bool,func1,func2){
    return bool ? func1() : func2()
}

//Enumerable Magic #25 - take the first N elements

function takeNElements(arr,n){
    return arr.slice(0,n)
}

/*---------------------------
Daily codewars Jan 1
---------------------------*/

//Grasshopper- function syntax debugging

function main (verb, noun) {
    return verb + noun
}

//Find the remainder

function remainder(a, b){  
    return Math.max(a,b) % Math.min(a,b) ;
}

//Super duper Easy

function problem(x){
    return typeof x == 'number' ? 50*x + 6 : "Error"
}

//101 Dalmatians - squash the bugs, not the dogs!

function howManyDalmatians(number){
  
    let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
    
    let respond = number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number == 101 ? dogs[3] : dogs[2]
    
    return respond
}

//Exclamation marks series #1: remove an exclamation mark from the end of string

function exclamationRemover(string){
    return string.replace(/!$/g,'')
}

/*---------------------------
Daily codewars Jan 2
---------------------------*/

// Alan Partridge II - Apple Turnover
function apple(x){
    return Math.pow(x,2) > 1000? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.'
}

//Grasshopper - Terminal game combat function

function combat(health, damage) {
    return (health - damage) < 0 ? 0 : health - damage
}

//Exclamation marks series #11: replace all vowel to exclamationn mark in the sentence

function replace(s){
    return s.replaceAll(/[aeoiuAEIOU]/g, '!')  
}

//can also do s.replace([aeiou]/ig,'!')


//No zeros for heros

function noZeroes(num){
    return +num.toString().replace(/0*$/, '')
}

//String cleaning

function stringClear(str){
    return str.replace(/[0-9]/g, '')
}


/*---------------------------
Daily codewars Jan 3
---------------------------*/

//Simple validation of a username with regex

function validateUsr(username) {
    let res = new RegExp('^[a-z0-9_]{4-16}$')
    return res.match(user)
}

//fix the above

//Pre-fizzbuzz workout #1

function preFizz(n) {
    let start = 1
    return Array(n).fill(1).map(e => e = start++)
}

//Sleigh Authentication

function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  if(name == 'Santa Claus' && password == 'Ho Ho Ho!'){return true}
  else return false
}; //simplify this to just return name == etc. && password ...



/*---------------------------
Daily codewars Jan 4
---------------------------*/

//printing array elements with comma delimiters

function printArrayCommas(array){
    return array.join(',');
}

//Determine offspring sex based on genes XX and XY chromosomes

function chromosomeCheck(sperm){
    return sperm == 'XY' ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter."
}

//Reversing words in a string

function reverse(string){
    return string.split(' ').reverse().join(' ')
}

//L1: Bartender, drinks!

function getDrinkByParam(param){
    let name = param.toLowerCase()
    switch(name){
        case 'jabroni': return 'Patron Tequila';
              break;
        case 'school counselor': return 'Anything with Alcohol';
              break;
        case 'programmer': return 'Hipster Craft Been';
              break;
        case 'bike gang member': return 'Moonshine';
              break;
        case 'politician': return 'Your tax dollars';
              break;
        case 'rapper': return 'Cristal';
              break;
        default: return 'Beer'
    }
}

// Enumerable Magic - does my list include this?
function include(arr, item){
    return arr.includes(item)
}

/*---------------------------
Daily codewars Jan 5
---------------------------*/

//Welcome To the city 

function sayHelloNameCityState( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

//Basic training: add item to an array

websites.push('codewars')

//sum of differences in an array

function sumDiffInArray(arr){
    let total = 0;
    arr.sort((a,b) => b-a).forEach((e,i) => {
        total += (arr[i] - arr[i+1]) || 0
    });
    return total
}//try not to tunnel as can easily use Math.max(...arr) - Math.min(...arr)


//find the position!

function position(letter){
    let alphabet = {
      a:1,
      b:2,
      c:3,
      d:4,
      e:5,
      f:6,
      g:7,
      h:8,
      i:9,
      j:10,
      k:11,
      l:12,
      m:13,
      n:14,
      o:15,
      p:16,
      q:17,
      r:18,
      s:19,
      t:20,
      u:21,
      v:22,
      w:23,
      x:24,
      y:25,
      z:26,
    }
    return 'Position of alphabet: ' + alphabet[letter]
}//use a string and indexOf instead or charCodeAt() -96


//kata example twist

let websites = []
for(let i=1; i <= 1000; i++){
    websites.push('codewars')
}


/*---------------------------
Daily codewars Jan 6
---------------------------*/

//multiple of index

function multipleOfIndex(array) {
    return array.filter((e,i) => e % i == 0)
}

//How old will i be in 2099?

function  calculateAge(b,c) {
    let ageDiff = Math.abs(b-c)
    if(ageDiff == 1 && b < c){return 'You are 1 year old.' }
    else if(ageDiff == 1 && b > c) {return 'You will be born in 1 year.'}
    else if(b == c){
      return 'You were born this very year!'
    }else if (b < c){
      return `You are ${ageDiff} years old.`
    }else if (b > c){
      return `You will be born in ${ageDiff} years.`
    }
}
  
//grasshopper - array mean
function findAverage(){
    return nums.reduce((acc,c) => acc + c, 0)/nums.length
}


//add length

function addTheLength(str){
    let anArray = [];
    str.split(' ').forEach(e =>{
        anArray.push(`${e} ${e.length}`)
    });
    return anArray
}//dont be afraid to use the map function instead :)


//return the day
function whatday(num) { 
    let daysOfWeek = {
          1: 'Sunday',
          2: 'Monday',
          3: 'Tuesday',
          4: 'Wednesday',
          5: 'Thursday',
          6: 'Friday',
          7: 'Saturday',
      }
      return (num <= 7 && num > 0) ? `${daysOfWeek[num]}` : 'Wrong, please enter a number between 1 and 7'
}// wanted and should use return daysOfWeek[num] || ... //instead of tertiary 

/*---------------------------
Daily codewars Jan 7
---------------------------*/

//color ghost

let Ghost = function() {
    let decider = Math.floor(Math.random()*4)
    this.color = decider == 0 ? 'white' : 
    decider == 1 ? 'yellow' : decider == 2 ? 'purple' : 'red'
};
//much better to use an array holding the values and set this.color = array[math...]
  

//pillars

function pillars(n, d, w) {
    d *= 100;
    return n == 1 ? 0 : d * (n-1) + w * n - 2 * w
}

//define a card suit

function defineSuit(card) {
    return card.includes('♣') ? 'clubs' :
    card.includes('♠') ? 'spades' :
    card.includes('♥') ? 'hearts' :
    card.includes('♦') ? 'diamonds' : 'bullocks'
}//was going to use an object.. next time.. 


//Mr.Freeze 
Object.freeze(MrFreeze)
//this is how to prevent changes to an object

//Name on billboard

function billboard(name, price = 30){
    let cost = 0;
    for(let i=0; i<name.length;i++){
        cost += price
    }
    return cost
} 


/*---------------------------
Daily codewars Jan 8
---------------------------*/

//no Loops 2 = you only need one

function noLoop(arr,val){
    return arr.indexOf(val) != -1
}

//Exclamation marks series #6: remove n exclamation marks in the sentence from left ro right
function removeExclamationMarks(str,num){
    for(let i=1; i <= num ; i++){
        str = str.replace(/!/, '')
    }
    return str
}

//Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
function remove (string) {
    return string.replace(/!/g,'') + '!';  
}

//compare within margin

function closeCompare(a, b, margin=0){
    return Math.abs(a-b) <= margin ? 0 : a < b ? -1 : 1
}

//leonardo dicaprio and oscars

function leo(oscar){
    return oscar == 88 ? 'Leo finally won the oscar! Leo is happy' : oscar == 86 ? 'Not even for Wolf of wallstreet?!' : oscar <= 85 ? 'When will you give Leo an Oscar?' : 'Leo got one already!'
}


/*---------------------------
Daily codewars Jan 9
---------------------------*/

//is in divisible by x and y?

function isDivisible(n, x, y) {
    return (n % x == 0 && n % y == 0)
}

//jenny's secret message

function greet(name){
    if(name === "Johnny")
      return "Hello, my love!";
    return "Hello, " + name + "!";
}

//reversed words

function reverseWords(str){
    return str.split(' ').reverse().join(' ')
}


//get the mean of an array

function getAverage(marks){
    return Math.floor(marks.reduce((acc,c) => acc + c,0)/marks.length)
}

//Count the Monkeys!
function countMonkeys(n){
    return Array(n).fill(0).map((e,i) => n--).reverse()
}
//can also use Array.from({length:n}, (e,i) => i+1)

/*---------------------------
Daily codewars Jan 10
---------------------------*/

//Do i get a bonus

function bonusTime(salary, bonus) {
    return '£'+ (bonus ? salary * 10 : salary)
}

//get planet name by id

function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
        break;
      case 2:
        name = 'Venus'
        break;
      case 3:
        name = 'Earth'
        break;
      case 4:
        name = 'Mars'
        break;
      case 5:
        name = 'Jupiter'
        break;
      case 6:
        name = 'Saturn'
        break;
      case 7:
        name = 'Uranus'
        break;
      case 8:
        name = 'Neptune'
    }
    
    return name;
}

//basic variable assignment

var a = "code";
var b = "wa.rs";
var name = a + b;

//count odd numbers below n

function oddCount(n){
    return Math.floor(n/2)
}

//short long short
function shortLongShort(in1,in2){
    if(in1.length < in2.length){
        return in1 + in2 + in1
    }else if(in2.length < in1.length){
        return in2 + in1 + in2
    }
}
//unfinished loop - bug fixing #1
function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    
    return newArray;
}

//my head is at the wrong end!
function tailBodyHead(arr){
    return arr.reverse()
}

/*---------------------------
Daily codewars Jan 11
---------------------------*/

//find numbers which are divisible by given number
function divisibleBy(numbers, divisor){
    return numbers.filter((e,i) => e % divisor == 0)
}

//capitalization and mutability
function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
}

//grasshopper - if/else syntax debug

function checkAlive (health) {
    if (health <= 0) {
      return false
    } else {
      return true
    }
}//alt just return health > 0

//get Nth even number

function nThEvenNumber(num){
    return 2 * n - 2
}

//stringy strings

function stringyString(size){
    let strang = "";
    for(let i = 1; i <= size; i++){
        if(i % 2 != 0) {
            strang +=1
        } else {
            strang +=0
        }
    }
}


/*---------------------------
Daily codewars Jan 12
---------------------------*/

//fixme: replace all dots

var replaceDots = function(str) {
    return str.replace(/\./g, '-');
}


//to square(root) or not to square(root)

function squareOrSquareRoot(array) {
    let newArr = [];
    array.forEach((e,i) => {
      if(Math.sqrt(e) % 1 == 0){
        newArr.push(Math.sqrt(e))
      }else{
        newArr.push(Math.pow(e,2))
      }
    })
    return newArr
}/*can also use Number.isInteger in the following method
function squareOrSquareRoot(array) {
  return array.map(x => {
    const n = Math.sqrt(x)
    return Number.isInteger(n) ? n : x * x
  })
}*/

//generate range of integers

function generateRange(a,z,n){
    let newArr =[];
    for(let i = a; i <= z; i += n){
        newArr.push(i)
    }
    return newArr
}

//is this my tail?

function correctTail(body, tail) { 
  
    let sub = body.substr(body.length-(tail.length));
    
    if(sub == tail) {
      return true
    }
    return false;
}

//grasshopper -debug

function weatherInfo (temp){
    var c = convertToCelsius(temp)
    if (c <= 0)
      return (c + " is freezing temperature")
    else
      return (c + " is above freezing temperature")
}
  
function convertToCelsius(temperature){
    var celsius = (temperature - 32) * (5/9)
    return celsius
}

/*---------------------------
Daily codewars Jan 13
---------------------------*/

//dollars and cents

function dollarsAndCents(num){
    num = num.toString()
    console.log(num.includes('.'))
    console.log(num.charAt(num.length-2))
    if(num.includes('.') == false){
        return '$' + num + '.00';
    }else if(num.charAt(num.length-2) == '.'){
        return '$' + num + '0';
    }else{
        return '$' + num;
    }
}//use this method: amount.toFixed(2) will add necessary zeroes to make it two decimals


//simple fun #1: seats in theater
function seatsInTheater(nCols, nRows, col, row) {
    return ((nCols - col +1) * (nRows - row))
    
}

//swap values
function swapValues(arr) {
    var args = Array.prototype.slice.call(arguments);
    var temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
}

//string templates- bug fixing #5
function buildString(...template){
    return `I like ${template.join(', ')}!`;
}

//USD => CNY

function usdcny(usd) {
    let conversion = usd * 6.75;
    return conversion.toFixed(2) + ' Chinese Yuan'
}


/*---------------------------
Daily codewars Jan 14
---------------------------*/

//crash override

function aliasGen(first,last){
  
    first = first.toUpperCase()
    last = last.toUpperCase()
    

      if(first.charAt(0) == +first.charAt(0) || last.charAt(0) == +last.charAt(0)){
        return "Your name must start with a letter from A - Z."
      }else{
        return firstName[first.charAt(0)] + ' ' + surname[last.charAt(0)]
      }
}

//remove first and last character part two

function array(arr){
    let newArr = arr.split(',')
    if(newArr.length < 3){return null}
      newArr.shift()
      newArr.pop()
      return newArr.join(' ')
  
}//use .slice(1,-1) and || null
  
//Formatting decimal places #0

function twoDecimalPlaces(n) {
    return +n.toFixed(2)
}

//triple trouble

function groupThese(a,b,c){
    let grouped = ''
    for(let i = 0; i < 100; i++){
        grouped += a.charAt(i) + b.charAt(i) + c.charAt(i)
    }
}


//speedCode #2 - array madness
function arrayMadness(a, b) {
    return a.reduce((a,b) => a + b**2,0) > b.reduce((a,b) => a + b**3,0) 
}

/*---------------------------
Daily codewars Jan 15
---------------------------*/

//find the differencec in age between oldest and youngest family members

function differenceInAges(ages){
    let diff = Math.max(...ages) - Math.min(...ages)
    return [Math.min(...ages),Math.max(...ages),diff]
}  

//return to sanity

function mystery() {
    var results =
      {sanity: 'Hello'};
    return results;
}

//type of sum

function typeOfSum(a, b) {
    return typeof (a+b)
}

//incorrect division metjhod

const solve = (x, y) => x / y

//closest elevator
function elevator(left, right, call){
    if(Math.abs(call - left) <  Math.abs(call - right)){
      return 'left'
    }
  return 'right'
}


/*---------------------------
Daily codewars Jan 16
---------------------------*/

//easy logs

function logs(x , a, b){
    let showYourWork = Math.log(a)/Math.log(x) + Math.log(b)/Math.log(x)
    return showYourWork
}

//just one today..

/*---------------------------
Daily codewars Jan 17
---------------------------*/

//sum of multiples
function sumMul(n,m){
    if(m <=0 || n<=0){
            return 'INVALID'
        }
        let newArr = [];
        newArr.length = Math.floor(m/n);
        return newArr.fill(n).map((e,i) => e = e * (i+1)).reduce((a,b) => a+b);
}
    
//also just one today

/*---------------------------
Daily codewars Jan 18
---------------------------*/

//Tip Calculator

function calculateTip(amount, rating) {
    rating = rating.toLowerCase();
    let ratings = {
      terrible:0,
      poor:.05,
      good:.1,
      great:.15,
      excellent:.2
    }
    if(rating in ratings == false){
      return 'Rating not recognised'
    }
    return Math.ceil(amount * ratings[rating])
}

//are arrow functions odd?

function odds(values){
    // arrow it
    return values.filter(e => e%2 != 0 );
}

//classy classes

class Person {
    constructor(name,age) {
      this.name = name
      this.age = age
    
    }
    get info (){
      return `${this.name}s age is ${this.age}`
    }
}

//simple calculator

function simpleCalc(a,b,op){
    let operations = {
        "+": '+',
        "-": '-',
        "*": '*',
        "/": '/'

    }
    if(typeof a != 'number' || typeof b != 'number' || (op in operations == false)){
        return 'unknown value'
    }else{
        return eval(`${a} ${operations[op]} ${b}`)
    }
}//almost had it: put the calculation and return statement in the values of the properties
//and if operations[op] is false then return unknown value

//fix your code before the garden dies!
function rainAmount(mm){
    if(mm < 40){
         return "You need to give your plant " + (40-mm) + "mm of water"
    }else{
         return "Your plant has had more than enough water for today!"
    };
}
/*---------------------------
Daily codewars Jan 19
---------------------------*/

// :(

/*---------------------------
Daily codewars Jan 20
---------------------------*/

//fundamentals: return

function add(a,b){
    return a + b
}

function divide(a,b){
    return a / b
}

function multiply(a,b){
    return a * b
}

function mod(a,b){
    return a % b
}
   
function exponent(a,b){
    return Math.pow(a,b)
}
    
function subt(a,b){
    return a - b
}

//training js#8: conditional statement--switch

function howManydays(month){
    let days;
    switch (month){
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12: 
        days = 31;
      break;
      case 4:
      case 6:
      case 9:
      case 11: 
        days = 30;
      break;
      case 2: 
        days = 28;
      break;
      default:
        days = 'Invalid Month. Enter a number 1 - 12'
    }
    return days;
}

//training js#10: loop statement --for

function pickIt(arr){
    let odd=[],even=[];
    //coding here
    for(let i=0; i<arr.length; i++){
      if(arr[i] %2 != 0){
        odd.push(arr[i])
      }else{
        even.push(arr[i])
      }
    }
    
    return [odd,even];
}//make use of for (let variableName of arr)... and tertiary

//training js#6: basic data types--boolean and conditional statements if..else

function trueOrFalse(val){
    return val ? 'true' : 'false'
}

/*---------------------------
Daily codewars Jan 21
---------------------------*/

//remove the time
function shortenToDate(longDate) {
    let shortDate = longDate.split(',');
    return shortDate[0]
}

//parse float
function parseF(s){
    return isNaN(parseFloat(s)) ? null : parseFloat(s)
}

/*---------------------------
Daily codewars Jan 22
---------------------------*/

//vowel count

function getCount(str) {
    let newStr = str.replace(/[aeiou]/g,'7')
    return newStr.split('').filter(e => e == 7).length
}

/*---------------------------
Daily codewars Jan 23
---------------------------*/

//Disemvowel Trolls

function disemvowel(str) {
    return str.replace(/[aeiouAEIOU]/g,'');
}//use gi for global and case insensitive

//digit*digit

function squareDigits(num){
    return +num.toString().split('').map(e => Math.pow(+e,2)).join('')
}

//highest and lowest

function highlow(nums){
    let arr = nums.split(' ')
    return `${Math.max(...arr)} ${Math.min(...arr)}`
}

//you're a square!

let isSquare = function(n){
    return Number.isInteger(Math.sqrt(n)); 
}

//

function middleChar(str){
    if(str.length % 2 != 0){
        return str.charAt(str.length/2)
    }else{
        return str.charAt(str.length/2 - 1)+ str.charAt(str.length/2)  
    }
}

/*---------------------------
Daily codewars Jan 24
---------------------------*/

// list filtering

function filter_list(l) {
    return l.filter(e => typeof e == 'number')
}

//Jaden casing string

String.prototype.toJadenCase = function () {
    return this.split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(' ')
};

//shortest word

function findShort(s){
    let newArr = s.split(' ').map(e => e.length)
      return Math.min(...newArr)
}//can use the .apply

//Complementary DNA

function DNAStrand(dna){
    let first = dna.replace(/A/g,'1')
    let second = first.replace(/G/g,'2')
    let third = second.replace(/T/g, '3')
    let fourth = third.replace(/C/g, '4')
    let fifth = fourth.replace(/1/g,'T')
    let sixth = fifth.replace(/2/g,'C')
    let seventh = sixth.replace(/3/g,'A')
    let eigth = seventh.replace(/4/g,'G')
  
    return eigth
}
console.log(DNAStrand('AATTCG'))
//redo this to be DRY


/*---------------------------
Daily codewars Jan 25
---------------------------*/

//sum of two lowest positive integers

function sumTwoLowest(numbers){
    numbers.sort((a,b) => a - b)
    return numbers[0] + numbers[1]
}

//beginner series #3 Sum of numbers


function betweenTwoNums(a,b){
    if(a == b){
        return a
    }
    let sum = 0;
    for(let i = Math.min(a,b); i <= Math.max(a,b); i++){
        sum += i
    }
    return sum
}

//credit card mask

function maskify(str){
    return str.slice(0,-4).replace(/[a-z0-9]/gi,'#') + str.slice(-4)
}

/*---------------------------
Daily codewars Jan 26
---------------------------*/

//firend or foe?

function friend(friends){
    return friends.filter(e => e.length == 4)
}

//growth of a population

function nbYear(p0, percent, aug, p) {
    let newPop = p0;
    let years = 0;
    let g = percent/100
    do{
      newPop += Math.floor(newPop * g + aug);
      years += 1;
  
    }while (newPop < p)
    
    return years
}//try this again with a for loop as i had originally intended

//binary addition

function addBinary(a,b) {
    let sum = a + b;
    return sum.toString(2)
}

/*---------------------------
Daily codewars Jan 27
---------------------------*/

//Two to One
function longest(s1, s2) {
    return [...new Set(s1.concat(s2))].sort((a,b) => a.localeCompare(b)).join('')
}

//regex validate PIN code
function validatePIN (pin) {
    let reggie1 = /^\d{4}/
    let reggie2 = /^\d{6}/
    return reggie1.test(pin) && pin.length == 4 || reggie2.test(pin) && pin.length == 6 
}//refactor using ^ and $ 


/*---------------------------
Daily codewars Jan 29
---------------------------*/

//categorize New member

function openOrSenior(data){
  let output = [];
  data.forEach(e => {
     e[0] >= 55 && e[1] > 7 ? output.push('Senior') : output.push('Open')
  });
  return output
} 


/*---------------------------
Daily codewars Jan 30
---------------------------*/

//Odd or Even?

function oddOrEven(array) {
    return array.reduce((a,b) => a + b, 0) % 2 == 0 ? 'even' : 'odd'
}



/*---------------------------
Daily codewars Jan 31
---------------------------*/