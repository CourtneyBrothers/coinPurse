/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/
var coinAmount = parseFloat(prompt("How many coins?"));
var quarter = 0.25;
var dime = 0.10;
var nickel = 0.05;
var penny = 0.01;

function coinCounter (coinAmount) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  let numberOfQuarters = coinAmount % quarter;
  console.log(numberOfQuarters);
  coinAmount = coinAmount - (numberOfQuarters * quarter);
  let numberOfDimes = coinAmount % dime;
  coinAmount = coinAmount - (numberOfDimes * dime);
  let numberOfNickels = coinAmount % nickel;
  coinAmount = coinAmount - (numberOfNickels * nickel);
  let numberOfPennies = coinAmount % penny;

  
  coinPurse.quarters = numberOfQuarters;
  coinPurse.dimes = numberOfDimes;
  coinPurse.nickel = numberOfNickels;
  coinPurse.pennies = numberOfPennies;

  return coinPurse;
}

var coins = coinCounter(coinAmount);
console.log(coins);