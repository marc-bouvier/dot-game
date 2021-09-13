import {io} from "socket.io-client";
import CreateTask from "./CreateTask";
import StartIteration from "./StartIteration";
import ProgressBar from "./ProgressBar";
import Columns from "./Column";
import Charts from './Charts';
import Workspace from "./Workspace";

const socket = io();
socket.on('message', event => {
  if (event.gameId && event.gameId !== currentGameId) return;

  console.log(event);

  document.dispatchEvent(new CustomEvent(event.type, { detail: event }))
});

const initializeGame = gameId => {
  StartIteration.initialize(gameId);
  CreateTask.initialize(gameId);
  Columns.initialize()
  Workspace.initialize()
  Charts.initialize(gameId);
  ProgressBar.initialize();
};

const currentGameId = document.querySelector('[data-game-id]').dataset.gameId;
initializeGame(currentGameId);