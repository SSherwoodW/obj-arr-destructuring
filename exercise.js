let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846


let planetFacts = {
    numPlanets1: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets1, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659
  

function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
    getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // 'your name is alejandro and you like purple'
    getUserData({firstName: "Melissa"}) // 'your name is melissa and you like green'
    getUserData({}) // your name is undefined and you like green'


let [first, second, third] = ["Maya", "Marisa", "Chi"];
console.log(first); // 'Maya'
console.log(second); // 'Marisa'
console.log(third); // 'Chi'


let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]

  console.log(raindrops); // 'raindrops on roses'
  console.log(whiskers); // 'whiskers on kittens'
  console.log(aFewOfMyFavoriteThings); // ['bright copper kettles', 'warm woolen mittens', 'brown paper packages tied up with strings']
  

let numbers = [10, 20, 30];
  [numbers[1], numbers[2]] = [numbers[2], numbers[1]]
  
  console.log(numbers) // [10, 30, 20] 


//ES5 ASSIGNING VARIABLES TO OBJECT PROPERTIES

const obj = {
    numbers: {
    a: 1,
    b: 2
  }
};
const {a,b} = obj.numbers

const arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];


const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})
