// import { getRandom } from '../../utils'
import Rect from './Rect'
import type { GameLevelType } from './options'

/**
 * 计算元素状态
 * @param rectList 元素列表
 */
export const calcRectStatus = (rectList: Rect[]) => {
  const len = rectList.length

  rectList.forEach((item, oi) => {
    const maxTop = item.point.t + 1
    const maxLeft = item.point.l + 1
    let nHave = true
    for (let i = oi + 1; i < len; i++) {
      const el = rectList[i]
      if (
        ((el.point.t >= item.point.t && el.point.t <= maxTop) && (el.point.l >= item.point.l && el.point.l <= maxLeft))
        || ((el.point.t + 1 >= item.point.t && el.point.t + 1 <= maxTop) && (el.point.l + 1 >= item.point.l && el.point.l + 1 <= maxLeft))
        || ((el.point.t >= item.point.t && el.point.t <= maxTop) && (el.point.l + 1 >= item.point.l && el.point.l + 1 <= maxLeft))
        || ((el.point.t + 1 >= item.point.t && el.point.t + 1 <= maxTop) && (el.point.l >= item.point.l && el.point.l <= maxLeft))
      ) {
        if (el.zIndex >= item.zIndex) {
          item.status = false
          nHave = false
          break
        }
      }
    }
    if (nHave)
      item.status = true
  })
}
export default function (level: GameLevelType) {
  const rectList: Rect[] = []
  // console.log(level.bg)
  const bgList: string[] = []
  let n = Math.ceil(level.point.length / level.bg.length)
  while (n > 0) {
    n--
    bgList.push(...level.bg)
  }
  bgList.sort(() => Math.random() - 0.5)
  level.point.forEach((item, index) => {
    rectList.push(new Rect({
      l: item[0],
      t: item[1],
      bg: bgList[index],
      zIndex: index,
      type: bgList[index],
      id: index,
    }))
  })
  calcRectStatus(rectList)
  return {
    rectList,
  }
}
