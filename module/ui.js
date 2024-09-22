/**
 * @description UI模块：用于将地图展示到页面
 */
import * as map from "./map.js";

const divContainer = document.getElementById("game");
const pieceWidth = 45; //每一个小块的宽度
const pieceHeight = 45; //每一个小块的高度

/**
 * 设置最外层容器的宽高
 */
function setDivContainer() {
  divContainer.style.width = pieceWidth * map.colNumber + "px";
  divContainer.style.height = pieceHeight * map.rowNumber + "px";
}

/**
 * 根据地图布局，在页面上设置相应的元素
 */
function setContent() {
  //1. 清空容器
  divContainer.innerHTML = "";
  //2. 遍历地图内容，设置元素
  for (let row = 0; row < map.rowNumber; row++) {
    for (let col = 0; col < map.colNumber; col++) {
      setOnePiece(row, col);
    }
  }
}

/**
 * 根据行和列，创建一个div，设置对应class后加入到容器
 */
function setOnePiece(row, col) {
  const div = document.createElement("div");

  // 针对不同类型块，添加对应的class
  div.className = "item";
  const value = map.content[row][col]; // 取出地图相应位置的值
  const correct = map.correct.some(e => e.row === row && e.col === col); // 当前位置是否是正确位置
  if (value === map.PLAYER) {
    div.classList.add("player");
  } else if (value === map.WALL) {
    div.classList.add("wall");
  } else if (value === map.BOX) {
    if (correct) {
      div.classList.add("correct-box");
    } else {
      div.classList.add("box");
    }
  } else {
    if (correct) {
      // 正确位置所在的空白
      div.classList.add("correct");
    } else {
      // 普通空白，不作任何处理
      return;
    }
  }

  // 修改元素位置
  div.style.left = col * pieceWidth + "px";
  div.style.top = row * pieceHeight + "px";

  // 插入页面
  divContainer.appendChild(div);
}

/**
 * 显示地图
 */
export function showUI() {
  setDivContainer();
  setContent();
}
