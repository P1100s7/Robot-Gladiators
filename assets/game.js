// var playerName = 'fuck'
var playerName = window.prompt("what is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = ["Roborto", "Amy Android", "Fuck U"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName);
console.log(enemyName.length);
console.log(enemyName[0]);
console.log(enemyName[3]);

// fight function (now with parameter for enemy's name)
var Fight = function (enemyName) {
  //if we're not at the last enemy in the array
  if (playerHealth > 0 && i < enemyName.length - 1) {
    shop();
  }
  //repeat and execute as long as the enemy-robot is alive
  while (enemyHealth > 0 && enemyHealth > 0) {
    // ask player choses to fight, fight
    var promptFight = window.prompt(
      'would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
    );
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
    } else {
      window.alert(
        playerName + " still has " + playerHealth + " health left. "
      );
    } //end of while loop
  } //end of fight function

  //function to start a new game
  var startGame = function () {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    // fight each enemy-robot by looping over them and fighting them one at a time
    for (var i = 0; i < enemyName.length; i++) {
      // if player is still alive keep fighting
      if (playerHealth > 0) {
        //let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert("welcome to robot gladiators!" + (i + 1));

        //pick new enemy to fight based on the index of the enemyName array
        var pickedEnemyName = enemyName[i];

        //reset enemyhealth before starting new fight
        enemyHealth = 50;

        //use debugger to pause script from running and check what's going on at that moment in the code
        //debugger;

        //pass the pickedEnemyName variable's value into the fight function, where is will assume the value of the enemyName parameter
        Fight(pickedEnemyName);
      }
      //if player isnt alive, stop the game
      else {
        window.alert("you have lost your robot in battle! Game Over!");
        break;
      }
    }
    //play again
    startGame();
  };
  endGame();
  var shop = function () {
    //ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
      "would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    //use switch to carry out action
    switch (shopOptionPrompt) {
      case "REFILL"://new case
      case "refill":
        if (playerMoney >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");

        //increase health and decrease money
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
        }
        else {
          window.alert("you don't have enough money!")
        }

        break;
      case "UPGRADE"://new case  
      case "upgrade":
        if (playerMoney >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");

        //increase attack and decrease money
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
        }
        else {
          window.alert("you dont have enough money!");
        }
    
        break;
        case "LEAVE": //new case
        case "leave":
          window.alert("you did not pick a valid option. try again.");
          shop();
          break;
    }
  };
};
//start the game when the page loads
startGame();
// function to end the entire game
var endGame = function () {
  //if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("the game has now ended. Let's see how your did!");
  } else {
    window.alert("you've lost robot in battle.");
  }
  var playAgainConfirm = window.confirm("would you like to play again?");

  if (playAgainConfirm) {
    //restart the game
    startGame();
  } else {
    window.alert("thank you for playing Robot Gladiators! Come back soon!");
  }
};
