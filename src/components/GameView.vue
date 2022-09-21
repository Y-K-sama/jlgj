<script lang='ts' setup>
/**
 * @file
 * @author 程乾
 */
import { findLastIndex, waitOneMinute } from '../utils'
import game, { calcRectStatus } from './game'
import type Rect from './game/Rect'
interface GameAreaType {
  w: number
  slotTop: number
}
const fDom = ref<HTMLElement>()
const gameList = ref<Rect[]>()
const gameArea = ref<GameAreaType>()
function create() {
  gameArea.value = createGameArea()
  const gameObj = game()
  gameList.value = gameObj.rectList
  // }
}
/**
 * 初始化游戏配置
 */
function createGameArea(): GameAreaType {
  const result = {
    w: 0,
    slotTop: 0,
  }
  if (fDom.value) {
    result.w = fDom.value.clientWidth / 10
    const y = fDom.value.clientHeight - fDom.value.clientWidth
    if (y > result.w * 2)
      result.slotTop = Math.ceil(y / result.w) + 8
    else
      alert('不支持当前屏幕')
  }
  return result
}
const activeRectList: Rect[] = []
const activeRectType: string[] = []
let isMove = false
function sortActiveRect() {
  activeRectList.forEach((item, index) => {
    item.point.l = index + 1.5
  })
}
// 开启动画
async function handlerClick(rect: Rect) {
  if (isMove || !rect.status || activeRectList.length >= 7)
    return
  // isMove = true
  rect.point.t = gameArea.value!.slotTop
  // rect.point.l = activeRectList.length + 1.5
  const lastIndex = findLastIndex<Rect>(activeRectList, (item) => {
    return item.type === rect.type
  })
  // const lastIndex = activeRectList.findIndex(item => item.type === rect.type)
  if (lastIndex === -1) {
    activeRectList.push(rect)
    activeRectType.push(rect.type)
  }
  else { activeRectList.splice(lastIndex, 0, rect) }
  sortActiveRect()
  calcRectStatus(gameList.value!)
  // 记录选中元素的数量
  let len = activeRectList.length
  await waitOneMinute()
  // 删除三个相等的
  let delType: string | undefined
  activeRectType.forEach((item) => {
    const arr = activeRectList.filter(el => el.type === item)
    if (arr.length >= 3) {
      delType = arr[0].type
      for (let i = 0; i < 3; i++)
        arr[i].over = true
    }
  })
  if (delType !== undefined) {
    const index = activeRectList.findIndex(item => item.type === delType)
    const arr = activeRectList.splice(index, 3)
    sortActiveRect()
    // 删除相同之后重新计算长度
    len = activeRectList.length
    await waitOneMinute()
    gameList.value = gameList.value?.filter(item => !arr.includes(item))
  }

  if (len >= 7)
    alert('游戏结束')
  isMove = false
}
/**
 * 点击元素
 */

onMounted(() => {
  nextTick(() => {
    create()
  })
})
</script>

<template>
  <ul ref="fDom" of-hidden pos-relative border w="100%" h="100%">
    <template v-if="gameArea">
      <li
        v-for="(item) in gameList"
        :key="item.type"
        :class="{
          not: !item.status,
          over: item.over,
        }"
        b="2 #999"
        z-2
        pos-absolute
        box-border
        b-rd-5px
        transition-all-300
        text-center
        :style="{
          top: `${item.point.t * gameArea.w}px`,
          left: `${item.point.l * gameArea.w}px`,
          width: `${gameArea.w}px`,
          height: `${gameArea.w}px`,
          background: item.bg,
          zIndex: item.zIndex,
        }"
        @click="handlerClick(item)"
      >
        {{ item.type }}
      </li>
      <li
        z="-1"
        pos-absolute
        bg-red
        :style="{
          top: `${gameArea.slotTop * gameArea.w}px`,
          width: `${7 * gameArea.w}px`,
          height: `${gameArea.w}px`,
          left: `${gameArea.w * 1.5}px`,
        }"
      >
        &nbsp;
      </li>
    </template>
  </ul>
</template>

<style scoped>
.not::after {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .8);
  top: 0;
  left: 0;
  border-radius: 5px;
  content: '';
}
.over {
  transform: scale(0.1);
}
</style>
