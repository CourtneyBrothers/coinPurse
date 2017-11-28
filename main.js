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
  var coinPurse = {
    quarter: 0,
    dime: 0,
    nickel: 0,
    penney: 0
  };


  //let numberOfQuarters = coinAmount % quarter;
  //console.log(numberOfQuarters);
  //console.log( 890 % 25); //Why is this two different numbers?
  for (let i = coinAmount; coinAmount != 0; i = i - currentCoin) {
    console.log(i);
      if (coinAmount > 0.25) {
        coinAmount = coinAmount - quarter;
        console.log(coinAmount);
        coinPurse.quarter++;
        i++;
      } 
      if (0.10 < coinAmount < 0.25){
        console.log(coinAmount);
        coinAmount = coinAmount - dime;
        j++;
      } else if (0.05 < coinAmount < 0.10){

        console.log(coinAmount);
        
        coinAmount = coinAmount - nickel;
        k++;
      } else if (0.01 < coinAmount < 0.05){
        coinAmount = coinAmount - penny;
        l++;
      }
      break;
    }
  //coinAmount = coinAmount - (numberOfQuarters * quarter);
  //let numberOfDimes = coinAmount % dime;
  //coinAmount = coinAmount - (numberOfDimes * dime);
  //let numberOfNickels = coinAmount % nickel;
  //coinAmount = coinAmount - (numberOfNickels * nickel);
  //let numberOfPennies = coinAmount % penny;

  
  coinPurse.quarters = i;
  coinPurse.dimes = j;
  coinPurse.nickel = k;
  coinPurse.pennies = l;

  return coinPurse;
}

var coins = coinCounter(coinAmount);
console.log(coins);