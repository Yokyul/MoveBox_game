/**
 * @description 地图模块：用于记录地图中的存在的各种元素
 */

/**
 * 地图元素：空白
 */
export const SPACE = 0;

/**
 * 地图元素：玩家
 */
export const PLAYER = 1;

/**
 * 地图元素：墙
 */
export const WALL = 2;

/**
 * 地图元素：箱子
 */
export const BOX = 3;

/**
 * 地图布局 9*12
 */
export const content = [
  [SPACE, SPACE, WALL, WALL, WALL, WALL, WALL, SPACE, SPACE],
  [SPACE, SPACE, WALL, SPACE, PLAYER, SPACE, WALL, SPACE, SPACE],
  [SPACE, SPACE, WALL, SPACE, BOX, SPACE, WALL, SPACE, SPACE],
  [WALL, WALL, WALL, SPACE, SPACE, SPACE, WALL, WALL, WALL],
  [WALL, SPACE, SPACE, SPACE, BOX, SPACE, SPACE, SPACE, WALL],
  [WALL, SPACE, BOX, BOX, BOX, BOX, BOX, SPACE, WALL],
  [WALL, SPACE, SPACE, SPACE, BOX, SPACE, SPACE, SPACE, WALL],
  [WALL, WALL, SPACE, BOX, BOX, BOX, SPACE, WALL, WALL],
  [SPACE, WALL, SPACE, SPACE, SPACE, SPACE, SPACE, WALL, SPACE],
  [SPACE, WALL, SPACE, SPACE, BOX, SPACE, SPACE, WALL, SPACE],
  [SPACE, WALL, SPACE, SPACE, SPACE, SPACE, SPACE, WALL, SPACE],
  [SPACE, WALL, WALL, WALL, WALL, WALL, WALL, WALL, SPACE]
];

/**
 * 总列数
 */
export const colNumber = content[0].length;

/**
 * 总行数
 */
export const rowNumber = content.length;

/**
 * 地图中的正确位置
 */
export const correct = [
  { row: 3, col: 4 },
  { row: 4, col: 4 },
  { row: 5, col: 2 },
  { row: 5, col: 3 },
  { row: 5, col: 4 },
  { row: 5, col: 5 },
  { row: 5, col: 6 },
  { row: 6, col: 4 },
  { row: 7, col: 4 },
  { row: 8, col: 4 },
  { row: 9, col: 4 },
  { row: 10, col: 4 }
];
