import { fifaData } from './fifa.js';
console.log(fifaData);

//console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final ---console.log(fifaData[828]["Home Team Name"])
(b) Away Team name for 2014 world cup final----console.log(fifaData[828]["Away Team Name"])
(c) Home Team goals for 2014 world cup final----console.log(fifaData[828]["Home Team Goals"])
(d) Away Team goals for 2014 world cup final----console.log(fifaData[828]["Away Team Goals"])
(e) Winner of 2014 world cup final */
//console.log(fifaData[828]["Away Team Goals"])

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data){
let finale = fifaData.filter(data => data.Stage === "Final");
return finale
}
console.log(getFinals())
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
const years = callback.map((team) => team.Year)
  return years
};


//console.log(getYears(getFinals(data)))

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb) {
const winner = cb.map((team) => {
    if (team['Home Team Goals'] > team['Away Team Goals']) {
        return team['Home Team Name']
    }
    else {
    return team["Away Team Name"]
    }
})
    return winner

};

//console.log(getWinners(getFinals(data)));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(winnerscb , yearscb) {
    const container = []
for( let i = 0; i< winnerscb.length; i++){
container.push(`in ${yearscb[i]}, ${winnerscb[i]} won the world cup!`)
}
return container
};

//console.log("winner ", getWinnersByYear(getWinners(getFinals(data)), getYears(getFinals(data))))

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(array) {
let homeAvg = arr.reduce((acc, score) => {
    return acc + score['Home Team Goals']
}, 0)
let awayAvg = arr.reduce((acc, score) => {
    return acc + score['Away Team Goals']
}, 0)
return {'Home Average': homeAvg/arr.length, 'Away Average': awayAvg/arr.length}
    /* code here */

};

//console.log(getAverageGoals(data));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
