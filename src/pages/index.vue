<script setup lang="ts">
import Level, { GameStatus } from '~/components/game/options'
const type = ref(0)
const start1 = ref(false)
const start2 = ref(false)
const start3 = ref(false)
function createGame() {
  // if()
  type.value = 1
  start1.value = !start1.value
}
const showOver = ref(false)
const gameStatus = ref(GameStatus.init)
function gameOver(e: GameStatus) {
  gameStatus.value = e
  showOver.value = true
}
function goToNext() {
  if (type.value === 1) {
    type.value = 2
    start2.value = !start2.value
  }
  else if (type.value === 2) {
    type.value = 3
    start3.value = !start3.value
  }
  showOver.value = false
}
function createAgin() {
  type.value = 1
  start1.value = !start1.value
  showOver.value = false
}
</script>

<template>
  <div pos-relative of-hidden class="game" w="100%" h="100%">
    <div v-show="showOver" pos-absolute z-9999999 w="100%" h="100%" left-0 top-0>
      <div flex="~ col" justify-center items-center w="80%" h="80%" top-0 left-0 right-0 bottom-0 style="background-color: rgba(0,0,0,.6)" pos-absolute m-auto b-rd-10px>
        <template v-if="gameStatus === GameStatus.win">
          <p text="center 40px" fw-600 color="#008c8c">
            {{ type === 3 ? '恭喜通关啦！' : '完成!' }}
          </p>
          <div v-if="type !== 3" color="#008c8c" mx-auto mt-80px bg-white text="center 20px" w-100px p-y-10px b-rd-10px @click="goToNext">
            下一关
          </div>
          <div v-else color="#008c8c" mx-auto mt-80px bg-white text="center 20px" w-100px p-y-10px b-rd-10px @click="createAgin">
            再来一次
          </div>
        </template>
        <template v-else>
          <p text="center 40px" fw-600 color="#f40">
            失败了!
          </p>
          <div color="#008c8c" mx-auto mt-80px bg-white text="center 20px" w-100px p-y-10px b-rd-10px @click="createAgin">
            重新开始
          </div>
        </template>
      </div>
    </div>
    <ul
      transition-all-1000
      flex w="100%" h="100%"
      :style="{
        transform: `translateX(${-type}00%)`,
      }"
    >
      <li flex-shrink-0 pos-relative w="100%" h="100%" left-0 top-0>
        <div w="80%" h="80%" top-0 left-0 right-0 bottom-0 style="background-color: rgba(0,0,0,.6)" pos-absolute m-auto b-rd-10px>
          <p w-40px mx-auto text="center 40px" mt-50px fw-600 color-white>
            加了个加
          </p>
          <div color="#008c8c" mx-auto mt-80px bg-white text="center 20px" w-100px p-y-10px b-rd-10px @click="createGame">
            加入锉刀
          </div>
        </div>
      </li>
      <li b-0 w="100%" h="100%" flex-shrink-0>
        <GameView :start="start1" :game-le="Level.one" @over="gameOver" />
      </li>
      <li b-0 w="100%" h="100%" flex-shrink-0>
        <GameView :start="start2" :game-le="Level.two" @over="gameOver" />
      </li>
      <li b-0 w="100%" h="100%" flex-shrink-0>
        <GameView :start="start3" :game-le="Level.three" @over="gameOver" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.game {
  background-image: url('~/assets/image/game-bg.png');
  background-size: auto 100%;
  background-position: 50% 50%;
}
</style>
