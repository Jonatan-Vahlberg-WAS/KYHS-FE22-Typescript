// Move: Up, Down, Left, Right
// Space: Wall, Path, Start, Goal
// User: position, move, isFinished
// Labyrinth: 2D array of Spaces
var labyrinth = [];
// Get start position from labyrinth Space.Start
var rowIndex = 0;
var columnIndex = 0;
// Create user
var user = {
    position: [rowIndex, columnIndex],
    move: function (direction) {
        var nextPosition = [this.position[0], this.position[1]];
        // Update position based on direction
        // Check if position is out of bounds (negative or too large)
        // Check if position is a wall
        // Update position of user
    },
    isFinished: function () {
        // Check if user is at goal
    }
};
// Define array of moves
var moves = [];
// goal reached?
var goalReached = false;
// Loop through moves and move user
for (var i = 0; i < moves.length; i++) {
    // move user
    // check if user is finished
}
// Print result
