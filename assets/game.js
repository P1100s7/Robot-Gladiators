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
  console.log(enemyName[i]);
}
// fight function
var Fight = function (enemyName) {
  //alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");
 
  // ask player choses to fight, fight
  var promptFight = window.prompt('would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  //if player chose to fight, then fight
  if (promptFight === "fight" || promptFight === "Fight") {
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
    //check player health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died! ");
    } else {
      window.alert(
        playerName + " still has " + playerHealth + " health left. "
      );
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
    //check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died! ");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left. ");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("are you sure you'd like to quit?");

    //if yes (true), leave fight
    window.alert(playerName + " has decided to skip this fight. goodbye!");
    //subtract money from playerMoney for skipping
    playerMoney = playerMoney - 2;
  }
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

// run fight function to start game
for(var i = 0; i < enemyName.length; i++) {
  Fight(enemyName[i]);
};
