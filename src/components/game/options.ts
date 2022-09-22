import { getRandom } from '~/utils'

export const getImgPath = (path: string) => {
  return new URL(path, import.meta.url).href
}
const l11 = getImgPath('../../assets/image/bg/l1/1.jpeg')
const l12 = getImgPath('../../assets/image/bg/l1/2.jpeg')
const l13 = getImgPath('../../assets/image/bg/l1/3.jpeg')
const l21 = getImgPath('../../assets/image/bg/l2/1.jpeg')
const l22 = getImgPath('../../assets/image/bg/l2/2.jpeg')
const l23 = getImgPath('../../assets/image/bg/l2/3.jpeg')
const l24 = getImgPath('../../assets/image/bg/l2/4.jpeg')
const l25 = getImgPath('../../assets/image/bg/l2/5.jpeg')
const l26 = getImgPath('../../assets/image/bg/l2/6.jpeg')
const l27 = getImgPath('../../assets/image/bg/l2/7.jpeg')
const l28 = getImgPath('../../assets/image/bg/l2/8.jpeg')
const l29 = getImgPath('../../assets/image/bg/l2/9.jpeg')
// const l210 = getImgPath('../../assets/image/bg/l2/10.jpeg')
const l31 = getImgPath('../../assets/image/bg/l3/1.jpeg')
const l32 = getImgPath('../../assets/image/bg/l3/2.jpeg')
const l33 = getImgPath('../../assets/image/bg/l3/3.jpeg')
const l34 = getImgPath('../../assets/image/bg/l3/4.jpeg')
const l35 = getImgPath('../../assets/image/bg/l3/5.jpeg')
const l36 = getImgPath('../../assets/image/bg/l3/6.jpeg')
const l37 = getImgPath('../../assets/image/bg/l3/7.jpeg')
const l38 = getImgPath('../../assets/image/bg/l3/8.jpeg')
const l39 = getImgPath('../../assets/image/bg/l3/9.jpeg')
const l310 = getImgPath('../../assets/image/bg/l3/10.jpeg')
const l311 = getImgPath('../../assets/image/bg/l3/11.jpeg')
const l312 = getImgPath('../../assets/image/bg/l3/12.jpeg')
const l313 = getImgPath('../../assets/image/bg/l3/13.jpeg')
const l314 = getImgPath('../../assets/image/bg/l3/14.jpeg')

const l1 = [
  [2, 2], [3.3, 2], [4.6, 2],
  [2, 4], [3.3, 4], [4.6, 4],
  [2, 5.5], [3.3, 5.5], [4.6, 5.5],
]
const options = {
  one: {
    point: [
      ...l1,
      ...l1.map(item => [item[0], item[1] + 0.2]),
      ...l1.map(item => [item[0], item[1] + 0.4]),
    ],
    bg: [`url(${l11})`, `url(${l12})`, `url(${l13})`],
    borderBg: 1,
  },
  two: {
    point: [
      ...new Array(12).fill(0).map(() => [
        getRandom(1, 3),
        getRandom(2, 2.5),
      ]),
      ...new Array(12).fill(0).map(() => [
        getRandom(1, 6),
        getRandom(1, 6),
      ]),
      ...new Array(12).fill(0).map(() => [
        getRandom(1.4, 1.8),
        getRandom(1, 5.5),
      ]),
      ...new Array(12).fill(0).map(() => [
        getRandom(1, 6),
        getRandom(1, 6),
      ]),
      ...new Array(12).fill(0).map(() => [
        getRandom(2.9, 3.3),
        getRandom(2, 6),
      ]),
      ...new Array(12).fill(0).map(() => [
        getRandom(1, 6),
        getRandom(1, 6),
      ]),
      ...new Array(12).fill(0).map(() => [
        getRandom(4.5, 6),
        getRandom(2.2, 5.4),
      ]),
      ...new Array(12).fill(0).map(() => [
        getRandom(1, 6),
        getRandom(1, 6),
      ]),
      ...new Array(30).fill(0).map((item, index) => [
        1 + index / 50,
        7.5,
      ]),
      ...new Array(12).fill(0).map(() => [
        getRandom(1, 6),
        getRandom(1, 6),
      ]),
      ...new Array(30).fill(0).map((item, index) => [
        6 - index / 50,
        7.5,
      ]),
    ],
    bg: [`url(${l21})`, `url(${l22})`, `url(${l23})`, `url(${l24})`, `url(${l25})`, `url(${l26})`, `url(${l27})`, `url(${l28})`, `url(${l29})`],
    borderBg: 2,
  },
  three: {
    point: [
      ...new Array(9).fill(0).map(() => [
        getRandom(1, 6),
        getRandom(1, 7),
      ]),
      ...new Array(9).fill(0).map(() => [
        getRandom(1, 6),
        getRandom(1, 7),
      ]),
      ...new Array(9).fill(0).map(() => [
        getRandom(1, 6),
        getRandom(1, 7),
      ]),
      ...new Array(9).fill(0).map(() => [
        getRandom(1, 6),
        getRandom(1, 7),
      ]),
      ...new Array(9).fill(0).map(() => [
        getRandom(1, 6),
        getRandom(1, 7),
      ]),
      ...new Array(9).fill(0).map(() => [
        getRandom(1, 6),
        getRandom(1, 7),
      ]),
      ...new Array(9).fill(0).map(() => [
        getRandom(1, 6),
        getRandom(1, 7),
      ]),
      ...new Array(9).fill(0).map(() => [
        getRandom(1, 6),
        getRandom(1, 7),
      ]),
      ...new Array(9).fill(0).map(() => [
        getRandom(1, 6),
        getRandom(1, 7),
      ]),
      ...new Array(9).fill(0).map(() => [
        getRandom(1, 6),
        getRandom(1, 7),
      ]),
      ...new Array(9).fill(0).map(() => [
        getRandom(1, 6),
        getRandom(1, 7),
      ]),
      ...new Array(9).fill(0).map(() => [
        getRandom(1, 6),
        getRandom(1, 7),
      ]),
      ...new Array(9).fill(0).map(() => [
        getRandom(1, 6),
        getRandom(1, 7),
      ]),
      ...new Array(9).fill(0).map(() => [
        getRandom(1, 6),
        getRandom(1, 7),
      ]),
      ...new Array(9).fill(0).map(() => [
        getRandom(1, 6),
        getRandom(1, 7),
      ]),
      ...new Array(9).fill(0).map(() => [
        getRandom(1, 6),
        getRandom(1, 7),
      ]),
      ...new Array(9).fill(0).map(() => [
        getRandom(1, 6),
        getRandom(1, 7),
      ]),
    ],
    bg: [`url(${l31})`, `url(${l32})`, `url(${l33})`, `url(${l34})`, `url(${l35})`, `url(${l36})`, `url(${l37})`, `url(${l38})`, `url(${l39})`, `url(${l310})`, `url(${l311})`, `url(${l312})`, `url(${l313})`, `url(${l314})`],
    borderBg: 3,
  },
}
export type GameLevelType = typeof options.one
/**
 * 游戏状态
 */
export enum GameStatus {
  /**
   * 未开始
   */
  init,
  /**
   * 进行中
   */
  playing,
  /**
   * 成功
   */
  win,
  /**
   * 失败
   */
  fail,
}
export default options
