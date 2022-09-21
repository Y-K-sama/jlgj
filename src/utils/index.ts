/**
 * 获取随机数
 * @param min 最大值
 * @param max 最小值
 * @returns
 */
export const getRandom = (min = 0, max = 1) => {
  return Math.random() * (max - min) + min
}
/**
 * 获取数组最后一个匹配的元素
 * @param array 数组
 * @param callBack 回调函数
 * @returns 下标
 */

export function findLastIndex<T>(array: T[], callBack: (item: T, index: number) => boolean) {
  const newArray = [...array]
  newArray.reverse()
  const index = newArray.findIndex(callBack)
  if (index === -1)
    return -1
  return newArray.length - index
}
/**
 * 等待一会
 * @param time 毫秒数
 * @returns
 */
export const waitOneMinute = (time = 300) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(true)
      }, time)
    }
    catch (err) {
      reject(err)
    }
  })
}
