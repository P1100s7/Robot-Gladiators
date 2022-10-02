var playerName = window.prompt("what is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
//you can also log multi values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var Fight = function () {
  //alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

  // note the lack of quotation marks around playerName

  if (playerName) {
    playerOne.robotName = playerName;
    console.log(playerOne.attack(enemy));
  }

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
      
};
