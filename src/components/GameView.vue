<script lang='ts' setup>
/**
 * @file
 * @author 程乾
 */
import { fabric } from 'fabric'
const fDom = ref<HTMLElement>()
const canvasDom = ref<HTMLCanvasElement>()
const ctx = ref<fabric.Canvas>()
// const ratio = ref<number>(1)
// const getPixelRatio = function (context: any) {
//   const backingStore = context.backingStorePixelRatio
//                 || context.webkitBackingStorePixelRatio
//                 || context.mozBackingStorePixelRatio
//                 || context.msBackingStorePixelRatio
//                 || context.oBackingStorePixelRatio
//                 || context.backingStorePixelRatio || 1
//   return (window.devicePixelRatio || 1) / backingStore
// }

function create() {
  if (canvasDom.value) {
    // ctx.value = canvasDom.value.getContext('2d') || undefined
    // ratio.value = getPixelRatio(ctx.value)
    // canvasDom.value.width = 750 * ratio.value
    // canvasDom.value.height = canvasDom.value.height * ratio.value
    // animation()
    ctx.value = new fabric.Canvas('canvas')
    animation()
  }
}
// 开启动画
function animation() {
  // 创建一个长方形
  const rect = new fabric.Rect({
    top: 30, // 距离容器顶部 30px
    left: 30, // 距离容器左侧 30px
    width: 2000, // 宽 100px
    height: 1000, // 高 60px
    fill: 'red', // 填充 红色
  })
  ctx.value?.add(rect)
  // requestAnimationFrame(animation)
}

onMounted(() => {
  create()
})
</script>

<template>
  <div ref="fDom" w="100%" h="100%">
    <canvas id="canvas" ref="canvasDom" :width="fDom?.clientWidth" :height="fDom?.clientHeight">浏览器不支持</canvas>
  </div>
</template>
