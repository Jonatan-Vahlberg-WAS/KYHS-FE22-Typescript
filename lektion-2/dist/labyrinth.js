var Move;
(function (Move) {
    Move["Up"] = "UP";
    Move["Down"] = "DOWN";
    Move["Left"] = "LEFT";
    Move["Right"] = "RIGHT";
    Move["RESET"] = "RESET";
})(Move || (Move = {}));
var Space;
(function (Space) {
    Space[Space["Wall"] = 0] = "Wall";
    Space[Space["Path"] = 1] = "Path";
    Space[Space["Start"] = 2] = "Start";
    Space[Space["Goal"] = 3] = "Goal";
})(Space || (Space = {}));
var labyrinth = [
    [Space.Wall, Space.Goal,],
    [Space.Wall, Space.Path,],
    [Space.Path, Space.Path,],
    [Space.Start, Space.Wall,],
];
var rowIndex = labyrinth.findIndex(function (row) { return row.includes(Space.Start); });
var columnIndex = labyrinth[rowIndex].findIndex(function (space) { return space === Space.Start; });
var user = {
    position: [rowIndex, columnIndex],
    move: function (direction) {
        var nextPosition = [this.position[0], this.position[1]];
        switch (direction) {
            case Move.Up:
                nextPosition[0] -= 1;
                break;
            case Move.Down:
                nextPosition[0] += 1;
                break;
            case Move.Left:
                nextPosition[1] -= 1;
                break;
            case Move.Right:
                nextPosition[1] += 1;
                break;
        }
        if (nextPosition[0] < 0 ||
            nextPosition[0] >= labyrinth.length ||
            nextPosition[1] < 0 ||
            nextPosition[1] >= labyrinth[nextPosition[0]].length) {
            console.log("Invalid move: Out of bounds");
            return;
        }
        if (labyrinth[nextPosition[0]][nextPosition[1]] === Space.Wall) {
            console.log("Invalid move: Wall");
            return;
        }
        console.log("Valid move: ".concat(direction));
        console.log("New position: ".concat(nextPosition));
        this.position = nextPosition;
    },
    isFinished: function () {
        return labyrinth[this.position[0]][this.position[1]] === Space.Goal;
    }
};
// const availableMoves: Move[] = [
//     Move.Up,
//     Move.Down,
//     Move.Left,
//     Move.Right
// ];
// do {
//     const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
//     user.move(randomMove);
// }while(!user.isFinished());
// Map grid
var mapElement = document.getElementById("map");
var controlButtons = document.querySelectorAll("button");
function getSpaceClass(space) {
    switch (space) {
        case Space.Wall:
            return "wall";
        case Space.Path:
            return "path";
        case Space.Start:
            return "start";
        case Space.Goal:
            return "goal";
    }
}
function renderMap() {
    if (!mapElement)
        return;
    mapElement.innerHTML = "";
    mapElement.style.gridTemplateColumns = "repeat(".concat(labyrinth[0].length, ", 1fr)");
    mapElement.style.gridTemplateRows = "repeat(".concat(labyrinth.length, ", 1fr)");
    labyrinth.forEach(function (row, rowIndex) {
        row.forEach(function (space, columnIndex) {
            var spaceElement = document.createElement("div");
            spaceElement.classList.add("space");
            spaceElement.classList.add(getSpaceClass(space));
            if (rowIndex === user.position[0] && columnIndex === user.position[1]) {
                spaceElement.classList.add("user");
            }
            mapElement.appendChild(spaceElement);
        });
    });
}
renderMap();
controlButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        var direction = button.getAttribute("data-action");
        if (direction) {
            if (direction === Move.RESET) {
                window.location.reload();
            }
            user.move(direction);
            renderMap();
            setTimeout(function () {
                if (user.isFinished()) {
                    alert("You won!");
                }
            }, 200);
        }
    });
});
