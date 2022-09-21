import { getRandom } from '../../utils'
import Rect from './Rect'

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
        (el.point.t >= item.point.t && el.point.t <= maxTop) && (el.point.l >= item.point.l && el.point.l <= maxLeft)
        || (el.point.t + 1 >= item.point.t && el.point.t + 1 <= maxTop) && (el.point.l + 1 >= item.point.l && el.point.l + 1 <= maxLeft)
        || (el.point.t >= item.point.t && el.point.t <= maxTop) && (el.point.l + 1 >= item.point.l && el.point.l + 1 <= maxLeft)
        || (el.point.t + 1 >= item.point.t && el.point.t + 1 <= maxTop) && (el.point.l >= item.point.l && el.point.l <= maxLeft)
        ) {
        console.log('满足了')
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
export default function () {
  const rectList: Rect[] = []
  for (let i = 0; i < 40; i++) {
    const b = new Rect({
      t: getRandom(1, 8),
      l: getRandom(1, 8),
      type: `${i}`,
      bg: `rgba(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(1, 1)})`,
      // status: getRandom() > 0.5,
      zIndex: i,
    })
    rectList.push(b)
  }
  calcRectStatus(rectList)
  return {
    rectList,
  }
}
