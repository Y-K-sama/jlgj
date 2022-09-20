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
  ctx.value = new fabric.Canvas('canvas')

  ctx.value!.selection = false // 不允许直接从画布框选

  animation()
  // }
}
function createStyle(el: any) {
  el.perPixelTargetFind = true
  // 禁止水平移动
  el.lockMovementX = true
  el.lockMovementY = true
  // 禁止旋转
  el.lockRotation = true
  // 禁止水平缩放
  el.lockScalingX = true
  // 禁止水平缩放
  el.lockScalingY = true
  // 没有边框
  el.hasBorders = false
  // 没有控制角
  el.hasControls = false
}
// 开启动画
function animation() {
  // 创建一个长方形
  const rect = new fabric.Circle({
    top: 200,
    radius: 80, // 距离容器顶部 30px
    left: 30, // 距离容器左侧 30px
    fill: 'red', // 填充 红色
  })
  createStyle(rect)
  rect.on('selected', (op) => {
    // console.log(op)
    // console.log('点解了', op)
  })
  ctx.value?.add(rect)
  // requestAnimationFrame(animation)
}

onMounted(() => {
  nextTick(() => {
    create()
  })
})
</script>

<template>
  <div ref="fDom" w="100%" h="100%">
    <canvas v-if="fDom" id="canvas" ref="canvasDom" style="border: 1px solid #ccc;" :width="fDom?.clientWidth" :height="fDom?.clientHeight">浏览器不支持</canvas>
    <!-- <canvas id="canvas" width="400" height="400" style="border: 1px solid #ccc;" /> -->
  </div>
</template>
