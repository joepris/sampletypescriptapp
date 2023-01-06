// triple slash directory - it is a single line comment that gives additional instructions to the file
// this tells the compiler that this file requires the players the player.ts
/// <reference path = "player.ts"/>
/// <reference path = "utility.ts"/>

function startGame() {

  // starting a new game

  let playerName: string | undefined = getInputValue("playerName");
  logPlayer(playerName);

  // this was just a message to test the code if it was working
  //   var messagesElement = document.getElementById('messages');
  //   messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';

  postScore(100, playerName);
}

function logPlayer(name: string = "MultiMath Player") {
  // MultiMathPlayer will appear as default name of player if undefined
  console.log(`New game starting for Player ${name}`);
}

// function getInputValue(elementID: string): string | undefined {
//   const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
// //getElementId is the first thing thing this function does.
//   if (inputElement.value === "") {
//     return undefined;
//   } else {
//     return inputElement.value;
//   }
// }

function postScore(score: number, playerName?: string): void {
  // by adding a ? means that it is optional making it ok to pass as undefined
  
  let logger: (value: string) => void;

  if (score < 0) {
    logger = logError;
  } else {
    logger = logMessage;
  }

  const scoreElement: HTMLElement | null = document.getElementById('postedScores');
  scoreElement!.innerText = `${score} - ${playerName}`;
  //!. means none null assertion operator to make sure that the postedScores element is not null

  logger(`Score: ${score}`)
}

document.getElementById('startGame')!.addEventListener('click', startGame);

const logMessage = (message: string): void => console.log(message);

function logError(err: string): void {
  console.log(err);
}

const firstPlayer: Player = new Player();
firstPlayer.name = "Lanier";
console.log(firstPlayer.formatName());

// INTERFACE SAMPLE
// let myResult: Result = {
//   playerName: 'Try',
//   score: 5,
//   problemCount: 5,
//   factor: 7
// };

// let player: Person = {
//   name: 'oeris',
//   formatName: () => 'dan'
// }