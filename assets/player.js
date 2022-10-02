const playerOne = {
    id: 1,
    robotName: "",
    health: 100,
    attack: function(robot = {}) {
        console.log(`attacking enemy robot ${robot.robotName || "no name"}`)
    }
}