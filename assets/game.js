var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("would you like to Fight or SKIP this battle? enter 'FIGHT' or 'SKIP' to choose.");
    console.log(playerAttack -= enemyHealth);
    console.log(enemyAttack -= playerHealth);
    
    console.log(
        playerName + " attacked " + enemyName + " now has " + enemyHealth + " health remaining. "
    );
   
    console.log(
        enemyName + " attacked " + "." + playerName + " now has " + playerHealth + " health remaining. "
    )
    if (playerHealth <= 0) {
        window.alert(playerName + " has died! ");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left. ");
    }
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died! ");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left. ");
    }

};

fight()