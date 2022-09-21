/**
 * 动画
 */
import type { fabric } from 'fabric'

export default function (rect: fabric.Rect, ctx: fabric.Canvas) {
  const r = rect
  let status = false
  let afT = 0
  let afL = 0
  let speedTop = 1
  let speedLeft = 1
  function animate() {
    status = true
    if (r.top !== afT)
      r.top! += speedTop
    if (r.left !== afL)
      r.left! += speedLeft

    ctx.add(r)
    if (r.top! === afT && r.left === afL) {
      status = false
      return
    }
    requestAnimationFrame(animate)
  }
  return {
    moveTo(top: number, left: number) {
      afT = top
      afL = left
      if (r.top! > top)
        speedTop = -2
      else if (r.top === top)
        return

      else
        speedTop = 2
      if (r.left! > left)
        speedLeft = -2
      else if (r.left === left)
        return
      else
        speedLeft = 2

      if (status)
        return
      animate()
    },
  }
}
