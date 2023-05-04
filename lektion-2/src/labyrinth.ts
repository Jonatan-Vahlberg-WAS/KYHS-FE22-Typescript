
enum Move {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
    RESET = "RESET"
}

enum Space {
    Wall,
    Path,
    Start,
    Goal
}

interface User {
    position: [number, number];
    move: (direction: Move) => void;
    isFinished: () => boolean;
}


type Labyrinth = Space[][];

// const labyrinth: Labyrinth = [
//     [Space.Wall,Space.Goal,],
//     [Space.Wall,Space.Path,],
//     [Space.Path,Space.Path,],
//     [Space.Start,Space.Wall,],
// ];

const labyrinth: Labyrinth = generateRandomLabyrinth();

const rowIndex = labyrinth.findIndex(row => row.includes(Space.Start));
const columnIndex = labyrinth[rowIndex].findIndex(space => space === Space.Start);

const user: User = {
    position: [rowIndex, columnIndex],
    move: function(direction: Move) {
        let nextPosition: [number, number] = [this.position[0], this.position[1]];

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
        if(
            nextPosition[0] < 0 ||
            nextPosition[0] >= labyrinth.length ||
            nextPosition[1] < 0 ||
            nextPosition[1] >= labyrinth[nextPosition[0]].length
        ) {
            console.log("Invalid move: Out of bounds");
            return;
        }
        if(labyrinth[nextPosition[0]][nextPosition[1]] === Space.Wall) {
            console.log("Invalid move: Wall");
            return;
        }
        console.log(`Valid move: ${direction}`);
        console.log(`New position: ${nextPosition}`);
        this.position = nextPosition;
    },
    isFinished: function() {
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

function generateRandomLabyrinth(){
    const labyrinth: Labyrinth = [];
    const width = Math.floor(Math.random() * 10) + 5;
    const height = Math.floor(Math.random() * 10) + 5;
    for(let i = 0; i < height; i++) {
        const row: Space[] = [];
        for(let j = 0; j < width; j++) {
            const randomSpace = Math.random();
            if(randomSpace < 0.1) {
                row.push(Space.Wall);
            }else {
                row.push(Space.Path);
            }
        }
        labyrinth.push(row);
    }
    const startRowIndex = Math.floor(Math.random() * labyrinth.length);
    const startColumnIndex = Math.floor(Math.random() * labyrinth[startRowIndex].length);
    labyrinth[startRowIndex][startColumnIndex] = Space.Start;
    const goalRowIndex = Math.floor(Math.random() * labyrinth.length);
    const goalColumnIndex = Math.floor(Math.random() * labyrinth[goalRowIndex].length);
    labyrinth[goalRowIndex][goalColumnIndex] = Space.Goal;
    return labyrinth;
}

// Map grid
const mapElement = document.getElementById("map");
const controlButtons = document.querySelectorAll("button");

function getSpaceClass(space: Space) {
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
    if(!mapElement) return
    mapElement.innerHTML = "";
    mapElement.style.gridTemplateColumns = `repeat(${labyrinth[0].length}, 1fr)`;
    mapElement.style.gridTemplateRows = `repeat(${labyrinth.length}, 1fr)`;
    labyrinth.forEach((row, rowIndex) => {
        row.forEach((space, columnIndex) => {
            const spaceElement = document.createElement("div");
            spaceElement.classList.add("space");
            spaceElement.classList.add(getSpaceClass(space));
            if(rowIndex === user.position[0] && columnIndex === user.position[1]) {
                spaceElement.classList.add("user");
            }
            mapElement.appendChild(spaceElement);
        })
    })

}


renderMap();

controlButtons.forEach(button => {
    button.addEventListener("click", () => {
        const direction = button.getAttribute("data-action");
        
        if(direction) {
            if(direction === Move.RESET) {
                window.location.reload();
            }
            user.move(direction as Move);
            renderMap();

           setTimeout(() => {
                if(user.isFinished()) {
                    alert("You won!");
                }
            }, 200);
        }
    })
})