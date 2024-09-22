import * as map from "./map.js";

/**
 * 游戏是否胜利
 */
export function isWin() {
  // 是否每个正确位置都有箱子
  return map.correct.every(e => map.content[e.row][e.col] === map.BOX);
}

/**
 * 按照指定的方向，让玩家移动一步
 * @param {String} direction left、right、up、down
 * @returns 是否移动成功
 */
export function playerMove(direction) {
  let playerPoint = getPlayerPoint();
  let nextInfo = getNextInfo(playerPoint.row, playerPoint.col, direction);

  // 下一个位置是墙，不能移动
  if (nextInfo.value === map.WALL) {
    return false;
  }

  if (nextInfo.value === map.SPACE) {
    // 下一个位置是空白
    exchange(playerPoint, nextInfo);
    return true;
  } else {
    // 下一个位置是箱子
    // 获取箱子的下一个位置
    let nextNextInfo = getNextInfo(nextInfo.row, nextInfo.col, direction);
    if (nextNextInfo.value === map.SPACE) {
      exchange(nextInfo, nextNextInfo);
      exchange(playerPoint, nextInfo);
      return true;
    } else {
      return false;
    }
  }
}

/**
 * 交换两个位置
 */
function exchange(point1, point2) {
  let temp = map.content[point1.row][point1.col];
  map.content[point1.row][point1.col] = map.content[point2.row][point2.col];
  map.content[point2.row][point2.col] = temp;
}

/**
 * 得到玩家的位置
 */
function getPlayerPoint() {
  for (let row = 0; row < map.rowNumber; row++) {
    for (let col = 0; col < map.colNumber; col++) {
      if (map.content[row][col] === map.PLAYER) {
        return { row, col };
      }
    }
  }
  throw new Error("地图上居然没有玩家");
}

/**
 * 获取传入位置在指定方向上的下一个位置的信息（第几行、第几列、内容是啥）
 * @param {Number} row 指定的行
 * @param {Number} col 指定的列
 * @param {String} direction
 */
function getNextInfo(row, col, direction) {
  if (direction === "left") {
    return {
      row: row,
      col: col - 1,
      value: map.content[row][col - 1]
    };
  } else if (direction === "right") {
    return {
      row: row,
      col: col + 1,
      value: map.content[row][col + 1]
    };
  } else if (direction === "up") {
    return {
      row: row - 1,
      col: col,
      value: map.content[row - 1][col]
    };
  } else {
    return {
      row: row + 1,
      col: col,
      value: map.content[row + 1][col]
    };
  }
}
