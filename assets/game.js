// var playerName = 'fuck'

//******* */
// you are currently about to commit on module part 3.4.7 */
//********* */


// fight function (now with parameter for enemy's name)
var Fight = function (enemy) {
  console.log(enemy)
  //repeat and execute as long as the enemy-robot is alive
  while (enemy.health > 0 && enemy.health > 0) {
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
        window.alert(playerInfo.name + " has decided to skip this fight. goodbye!");

        //subtract money from playerMoney for skipping
        playerInfo.money = playerInfo.money - 10;
        console.log("playerMoney", playerInfo.money);
        break;
      }
    }
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemy.health = Math.max(0, enemy.health - playerInfo.attack);
    console.log(
      playerInfo.name +
        " attacked " +
        enemy.name +
        " now has " +
        enemyHealth +
        " health remaining. "
    );
    //check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died! ");

      //award player money for winning
      playerInfo.money = playerInfo.money + 20;

      //leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left. ");
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

        //generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        pickedEnemyObj.health = Math.floor(Math.random() * 21) + 40;

        //use debugger to pause script from running and check what's going on at that moment in the code
        //debugger;

        //pass the pickedEnemyName variable's value into the fight function, where is will assume the value of the enemyName parameter
        Fight(pickedEnemyObj);
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
       playerInfo.refillHealth()
        break;
      case "UPGRADE": //new case
      case "upgrade":
        playerInfo.upgradeAttack()
        break;
      case "LEAVE": //new case
      case "leave":
        window.alert("you did not pick a valid option. try again.");
        shop();
        break;
    }
  };
  var randomNumber = function(40, 60) {
    var value = Math.floor(Math.random() * (22)) + 40;

    return value;
  };
//in startGame()
  var playerInfo = {
    name: window.prompt("what is your robots name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
      this.health = 100;
      this.money = 10;
      this.attack = 10;
    },
    refillHealth: function() {
      if (this.money >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.")
      this.health += 20;
      this.money -= 7;
      }
      else {
        window.alert("you don't have enough money!");
      }
    },
    upgradeAttack: function() {
      if (this.money >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
      }
      else {
        window.alert("you don't have enough money!");
      }
    }
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
        strength: 10
      }
    },
    {
      name: "amy android",
      attack: randomNumber(10, 14)
    },
    {
      name: "robo trumble",
      attack: randomNumber(10, 14)
    }
  ];

  //start the game when the page loads
startGame();
};