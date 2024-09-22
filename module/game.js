import { showUI } from "./ui.js";
import { playerMove, isWin } from "./play.js";

showUI();

let over = false; // 是否完成游戏
window.onkeydown = function (e) {
  if (over) return;

  let result = false;
  if (e.key === "ArrowUp") {
    result = playerMove("up");
  } else if (e.key === "ArrowDown") {
    result = playerMove("down");
  } else if (e.key === "ArrowLeft") {
    result = playerMove("left");
  } else if (e.key === "ArrowRight") {
    result = playerMove("right");
  }

  if (result) {
    showUI();
    if (isWin()) {
      over = true;
      setTimeout(() => {
        alert("游戏胜利！");
      }, 300);
    }
  }
};
