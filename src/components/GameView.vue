<script lang='ts' setup>
/**
 * @file
 * @author 程乾
 */
import { findLastIndex, waitOneMinute } from '../utils'
import game, { calcRectStatus } from './game'
import { GameStatus } from './game/options'
import type { GameLevelType } from './game/options'
import type Rect from './game/Rect'
const props = defineProps<{
  gameLe: GameLevelType
  /**
   * 开始游戏：start值改变时开始
   */
  start: boolean
}>()
const emits = defineEmits(['over'])
watch(() => props.start, () => {
  create()
})
interface GameAreaType {
  w: number
  slotTop: number
}
const fDom = ref<HTMLElement>()
const gameList = ref<Rect[]>()
const gameArea = ref<GameAreaType>()

const gameStatus = ref<GameStatus>(GameStatus.init)

function create() {
  gameStatus.value = GameStatus.init
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  activeRectList.length = 0
  gameArea.value = createGameArea()
  const gameObj = game(props.gameLe)
  gameList.value = gameObj.rectList
  gameStatus.value = GameStatus.playing
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
    result.w = fDom.value.clientWidth / 8
    result.slotTop = (fDom.value.clientHeight - 100 - result.w) / result.w
  }
  return result
}
const activeRectList: Rect[] = []
function sortActiveRect() {
  activeRectList.forEach((item, index) => {
    item.point.l = index + 0.5
  })
}
// 开启动画
async function handlerClick(rect: Rect) {
  if (!rect.status || activeRectList.length >= 7 || activeRectList.includes(rect) || gameStatus.value !== GameStatus.playing)
    return
  rect.point.t = gameArea.value!.slotTop
  // 获取选中的相同 type 最后一个的下一个下标
  const lastIndex = findLastIndex<Rect>(activeRectList, (item) => {
    return item.type === rect.type
  })
  rect.zIndex = 9999999
  if (lastIndex === -1)
    activeRectList.push(rect)

  else activeRectList.splice(lastIndex, 0, rect)
  sortActiveRect()
  calcRectStatus(gameList.value!)
  // activeRectType.forEach((item) => {
  const dArr = activeRectList.filter(el => el.type === rect.type && !el.fOver)
  // 不满3直接结束
  if (dArr.length < 3) {
    if (activeRectList.filter(item => !item.fOver).length >= 7) {
      await waitOneMinute()
      gameStatus.value = GameStatus.fail
      emits('over', GameStatus.fail)
    }
    return
  }
  for (let i = 0; i < 3; i++)
    dArr[i].fOver = true
  // })
  // 记录选中元素的数量
  let len = activeRectList.filter(item => !item.fOver).length

  await waitOneMinute()
  dArr.forEach((item) => {
    item.dOver = true
  })
  await waitOneMinute()
  // 删除三个相等的
  dArr.forEach((item) => {
    item.over = true
  })
  // })
  // console.log(delType)
  dArr.forEach((item) => {
    activeRectList.splice(
      activeRectList.findIndex(it => it === item),
      1,
    )
  })
  sortActiveRect()
  // 删除相同之后重新计算长度
  len = activeRectList.filter(item => !item.fOver).length
  await waitOneMinute()
  gameList.value = gameList.value?.filter(item => !dArr.includes(item))
  if (gameList.value?.length === 0) {
    gameStatus.value = GameStatus.win
    // console.log('游戏完成')
    emits('over', GameStatus.win)
  }
  if (len >= 7) {
    gameStatus.value = GameStatus.fail
    emits('over', GameStatus.fail)
  }
}
</script>

<template>
  <ul ref="fDom" of-hidden pos-relative w="100%" h="100%">
    <template v-if="gameArea">
      <li
        v-for="(item) in gameList"
        :key="item.id"
        class="box"
        :class="{
          not: (!item.status && !activeRectList.includes(item) && !item.fOver),
          over: item.dOver,
        }"
        z-2
        pos-absolute
        box-border
        b-rd-5px
        transition-all-300
        text-center
        of-hidden
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
        <div
          class="box-cnt"
          :class="[`level${gameLe.borderBg}`]"
          b-6px
        />
      </li>
    </template>
    <ul
      v-if="gameArea"
      z="1"
      pos-absolute
      class="active-box"
      bottom-100px
      :style="{
        width: `${7 * gameArea.w}px`,
        height: `${gameArea.w}px`,
        left: `${gameArea.w * 0.5}px`,
      }"
      flex
      b="~ l-0 black"
    >
      <li v-for="item in 7" :key="item" flex-1 b-l b-black />
    </ul>
  </ul>
</template>

<style scoped>
.box {
  background-size: 100% 100% !important;
}
.box-cnt {
  width: 100%;
  height: 100%;
}
.level1 {
  border-image: url('~/assets/image/border/level1.png') 10 10 10 10 repeat;
}
.level2 {
  border-image: url('~/assets/image/border/level2.png') 10 10 10 10 repeat;
}
.level3 {
  border-image: url('~/assets/image/border/level3.png') 10 10 10 10 repeat;
}
.not::after {
  position: absolute;
  background-color: rgba(0, 0, 0, .5);
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  border-radius: 2px;
  content: '';
}
.over {
  transform: scale(0);
}
.active-box {
  background-image: url('~/assets/image/active-bg.png');
  background-size: 100% auto;
  background-position: 50% 50%;
  transform: translateY(-1px);
}
</style>
