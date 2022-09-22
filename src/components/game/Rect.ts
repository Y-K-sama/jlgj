export default class Rect {
  point = {
    t: 0,
    l: 0,
  }

  // 方块类型
  type = ''
  // 层级
  zIndex = 1
  // 是否可点击
  status = true
  bg = '#000'
  // 假结束
  fOver = false
  dOver = false
  // 是否显示结束
  over = false
  id = 0
  constructor({
    t = 0,
    l = 0,
    bg = '#000',
    status = true,
    type = '',
    zIndex = 1,
    id = 0,
  }) {
    this.point.t = t
    this.point.l = l
    this.bg = bg
    this.status = status
    this.type = type
    this.zIndex = zIndex
    this.id = id
  }
}
