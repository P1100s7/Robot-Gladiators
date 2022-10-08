// var playerName = 'fuck'
var playerName = window.prompt("what is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//you can also log multi values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = ["Roborto", "Amy Android", "Fuck"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName.length);

for(var i = 0; i < enemyName.length; i++) {
  var pickedEnemyName = enemyName[i];
  enemyHealth = 50;
  Fight(pickedEnemyName);
  if (playerHealth > 0) {
    //let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert("welcome to robot gladiators!" + ( i + 1 ));
    //pick new enemy to fight based on the index of the enemyName array
    var pickedEnemyName = enemyName[i];

    //reset enemyhealth before starting new fight
    enemyHealth = 50;

    //use debugger to pause script from running and check what's going on at that moment in the code
    //debugger;

    //pass the pickedEnemyName variable's value into the fight function, where is will assume the value of the enemyName parameter
    fight(pickedEnemyName);
  }
  else {
    window.alert("you have lost your robot in battle! Game Over!")
    break;
  }
}
// fight function
var Fight = function (enemyName) {
  //repeat and execute as long as the enemy-robot is alive
  while(enemyHealth > 0 && enemyHealth > 0) {
  //alert players that they are starting the round
 
  // ask player choses to fight, fight
  var promptFight = window.prompt('would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  // if player choses to skip confirm and then stop the loop
  if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("are you sure you'd like to quit?");
  
      //if yes (true), leave fight
      if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. goodbye!");
  
      //subtract money from playerMoney for skipping
      playerMoney = playerMoney - 10;
      console.log("playerMoney", playerMoney);
      break;
      }
    }
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName +
        " attacked " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining. "
    );
    //check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died! ");

      //award player money for winning
      playerMoney = playerMoney + 20;
      //leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left. ");
    }

    //remove players health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName +
        " attacked " +
        playerName +
        " . " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining. "
    );
    //check player health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died! ");
      //leave while() loop if player is dead
      break;
    } 
    else {
      window.alert(
        playerName + " still has " + playerHealth + " health left. "
      );
    }//end of while loop
  };//end of fight function

  //if no (false), ask question again by running fight() again
else {
  Fight();
}
// if player did not chose 1 or 2 in prompt
 }; 
 else {
  window.alert("You need to pick a valid option. Try again!");
 }
}; // end of fight function
while (playerHealth > 0 && enemyHealth > 0)
// this is for the while condition statement
// run fight function to start game
for(var i = 0; i < enemyName.length; i++) {
  Fight(enemyName[i]);
};
