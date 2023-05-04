// enum Move {
//     Up = "UP",
//     Down = "DOWN",
//     Left = "LEFT",
//     Right = "RIGHT"
// }
// enum Space {
//     Wall,
//     Path,
//     Start,
//     Goal
// }
// interface User {
//     position: [number, number];
//     move: (direction: Move) => void;
//     isFinished: () => boolean;
// }
// type Labyrinth = Space[][];
// const labyrinth: Labyrinth = [
//     [Space.Wall,Space.Goal,],
//     [Space.Wall,Space.Path,],
//     [Space.Path,Space.Path,],
//     [Space.Start,Space.Wall,],
// ];
// const rowIndex = labyrinth.findIndex(row => row.includes(Space.Start));
// const columnIndex = labyrinth[rowIndex].findIndex(space => space === Space.Start);
// const user: User = {
//     position: [rowIndex, columnIndex],
//     move: function(direction: Move) {
//         let nextPosition: [number, number] = [this.position[0], this.position[1]];
//         switch (direction) {
//             case Move.Up:
//                 nextPosition[0] -= 1;
//                 break;
//             case Move.Down:
//                 nextPosition[0] += 1;
//                 break;
//             case Move.Left:
//                 nextPosition[1] -= 1;
//                 break;
//             case Move.Right:
//                 nextPosition[1] += 1;
//                 break;
//         }
//         if(
//             nextPosition[0] < 0 ||
//             nextPosition[0] >= labyrinth.length ||
//             nextPosition[1] < 0 ||
//             nextPosition[1] >= labyrinth[nextPosition[0]].length
//         ) {
//             console.log("Invalid move: Out of bounds");
//             return;
//         }
//         if(labyrinth[nextPosition[0]][nextPosition[1]] === Space.Wall) {
//             console.log("Invalid move: Wall");
//             return;
//         }
//         console.log(`Valid move: ${direction}`);
//         console.log(`New position: ${nextPosition}`);
//         this.position = nextPosition;
//     },
//     isFinished: function() {
//         return labyrinth[this.position[0]][this.position[1]] === Space.Goal;   
//     }
// };
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
// console.log("Finished!");
