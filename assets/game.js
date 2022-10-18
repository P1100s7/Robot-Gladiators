// var playerName = 'fuck'

//******* */
//  3.5.4 you have made the first of the 5 issues on git hub */
//********* */
//function to generate a random numeric value
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

var fightOrSkip = function() {
  //ask player if they'd like to fight or skip using fightOrSkip function
  var promptFight = window.prompt('would you like tp FIGHT or SKIP this battle? Enter "Fight" or "SKIP" to choose.');

  //Enter the conditional recursive function call here!
  if (promptFight === "" || promptFight === null) {
    window.alert("you need to provide a valid answer! please try again.");
    return fightOrSkip();
  }

  promptFight = promptFight.toLowerCase();

  // if player picks "skip" confirm and then stop the loop
  if (promptFight === "skip") {
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + "has decided to skip this fight. goodbye!");
      //subtract money from playerMoney for skipping
      playerInfo.playerMoney = playerInfo.money - 10;

      //return true; if player wants to leave
      return true;

      shop();
    }
  }
}

// fight function (now with parameter for enemy's name)
var Fight = function (enemy) {
  console.log(enemy);
  //repeat and execute as long as the enemy-robot is alive
  while (playerInfo.health > 0 && enemy.health > 0) {
    // ask player choses to fight, fight
    
    if (fightOrSkip()) {
      // if true, leave fight by breaking loop
      break;
    }

    //generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerInfo.name + " attacked " + enemy.name + '.' + enemy.name + " now has " +  enemyHealth + " health remaining. "
    );
    //check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died! ");

      //award player money for winning
      playerInfo.money = playerInfo.money + 20;

      //leave while() loop since enemy is dead
      break;
    } else {
      window.alert(
        enemy.name + " still has " + enemy.health + " health left. "
      );
    }
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    //remove players health by subtracting the amount set in the enemyAttack variable
    playerInfo.health = Math.max(0, playerInfo.health - enemy.attack);
    console.log(
      enemy.name +
        " attacked " +
        playerInfo.name +
        " . " +
        playerInfo.name +
        " now has " +
        playerInfo.health +
        " health remaining. "
    );
    //check player health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died! ");

      //leave while() loop if player is dead
      break;
    } else {
      window.alert(
        playerInfo.name + " still has " + playerInfo.health + " health left. "
      );
    } //end of while loop
  } //end of fight function
};
//function to start a new game
var startGame = function () {
  //reset player stats
  playerInfo.reset();

  // fight each enemy-robot by looping over them and fighting them one at a time
  for (var i = 0; i < enemyInfo.length; i++) {
    // if player is still alive keep fighting
    if (playerInfo.health > 0) {
      //let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert("welcome to robot gladiators!" + (i + 1));

      //pick new enemy to fight based on the index of the enemyName array
      var pickedEnemyObj = enemyInfo[i];

      pickedEnemyObj.health = Math.floor(Math.random() * 21) + 40;

      //use debugger to pause script from running and check what's going on at that moment in the code
      //debugger;

      //pass the pickedEnemyName variable's value into the fight function, where is will assume the value of the enemyName parameter
      Fight(pickedEnemyObj);

      // if player is still alive and we're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm(
          "the fight is over, visit the store before the next round?"
        );

        //if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }
      }
    }
    //if player isnt alive, stop the game
    else {
      window.alert("you have lost your robot in battle! Game Over!");
      break;
    }
  }

  //after loop ends, we are either out of playerHealth or enemies to fight, son run the endGame function
  endGame();
};
// function to end the entire game
var endGame = function () {
  window.alert("the game has now ended. Let's see how your did!");
  //if player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert(
      "great job, you've survived the game! you now have a score of " +
        playerInfo.money +
        "."
    );
  } else {
    window.alert("you've lost robot in battle.");
  }
  //ask player if they'd like to play again
  var playAgainConfirm = window.confirm("would you like to play again?");

  if (playAgainConfirm) {
    //restart the game
    startGame();
  } else {
    window.alert("thank you for playing Robot Gladiators! Come back soon!");
  }
};

//go to shop between battles function
var shop = function () {
  //ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );
  //use switch to carry out action
  switch (shopOptionPrompt) {
    case "REFILL": //new case
    case "refill":
      playerInfo.refillHealth();
      break;
    case "UPGRADE": //new case
    case "upgrade":
      playerInfo.upgradeAttack();
      break;
    case "LEAVE": //new case
    case "leave":
      window.alert("you did not pick a valid option. try again.");
      shop();
      break;
  }
};

// function to set name
var getPlayerName = function() {
  var name = "";

  while (name == "" || name == null) {
    name = prompt("what is your robot's name?");
  }

  console.log("your robot's name is " + name);
  return name;
};

//in startGame()
var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function () {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function () {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } else {
      window.alert("you don't have enough money!");
    }
  },
  upgradeAttack: function () {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } else {
      window.alert("you don't have enough money!");
    }
  },
};
//in shop()
playerInfo.health = playerInfo.health + 20;
playerInfo.money = playerInfo.money - 7;

var enemyInfo = [
  {
    name: "roborto",
    attack: randomNumber(10, 14),
    shield: {
      type: "wood",
      strength: 10,
    },
  },
  {
    name: "amy android",
    attack: randomNumber(10, 14),
  },
  {
    name: "robo trumble",
    attack: randomNumber(10, 14),
  },
];

//start the game when the page loads
startGame();
