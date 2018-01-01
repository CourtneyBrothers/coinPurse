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
///set global variable for value of coins
let quarter = 25;
let dime = 10;
let nickel = 5;
let penny = 1;

let coinAmount = parseFloat(prompt("Please enter how much change you have?")*100);

function coinCounter (coinAmount) {
    // Initialize a JavaScript object to hold the coins
    let coinPurse = {};
    
    //set a variable to take remainder of coins and pass down
    let coinDown = coinAmount;
    let otherSideOfRemainder = coinAmount % quarter;
    console.log(otherSideOfRemainder); // 14
    let quarters = (coinAmount - otherSideOfRemainder) / quarter;
    coinPurse.quarter = quarters;
    console.log(coinPurse.quarter);
    coinDown = coinAmount - (quarters * quarter);
    console.log(coinDown);

    let otherSideOfDimes = coinDown % dime;
    console.log(otherSideOfDimes);
    let dimes = (coinDown - otherSideOfDimes) / dime;
    coinPurse.dimes = dimes;
    console.log(coinPurse.dimes);
    coinDown = coinDown - (dimes * dime);
    console.log(coinDown);

    let moduloOfNickels = coinDown % nickel;
    console.log(moduloOfNickels);
    let nickels = (coinDown - moduloOfNickels) / nickel;
    coinPurse.nickel = nickels;
    console.log(coinPurse.nickel);
    coinDown = coinDown - (nickels * nickel);
    console.log(coinDown);

    let moduloOfPennies = coinDown % penny;
    console.log(moduloOfPennies);
    let pennies = (coinDown - moduloOfPennies) / penny;
    coinPurse.penny = pennies;
    console.log(coinPurse.penny);
    coinDown = coinDown - (pennies * penny);
    console.log(coinDown);
    

    


    // if (coinAmount > 0.25) {
    //     let i = 0;                           // set local i to count  
    //     coinAmount = coinAmount - quarter;
    //     i++
    //     coinPurse.quarters = i;
    //     coinDown = coinAmount - (i * quarter);
    // } else if (coinDown > 0.10){
    //     let j = 0;
    //     coinDown = coinDown - dime;
    //     j++;
    //     coinPurse.dimes = j;
    //     coinDown = coinDown - (j*dime);
    // } else if (coinDown > 0.05){
    //     let k = 0;
    //     coinDown = coinDown - nickel;
    //     k++;
    //     coinPurse.nickel = k;
    //     coinDown = coinDown - (k*dime);
    // } else if (coinDown > 0.01 ) {
    //     let l = 0;
    //     coinDown = coinDown - penny;
    //     l++;
    //     coinPurse.penny = l;
        
    // }
  
  
    return coinPurse;
  }
  
  var coins = coinCounter(coinAmount);
  console.log(coins);