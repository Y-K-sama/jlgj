<script lang='ts' setup>
/**
 * @file
 * @author 程乾
 */
const fDom = ref<HTMLElement>()
const canvasDom = ref<HTMLCanvasElement>()
const ctx = ref<CanvasRenderingContext2D>()
const ratio = ref<number>(1)
const getPixelRatio = function (context: any) {
  const backingStore = context.backingStorePixelRatio
                || context.webkitBackingStorePixelRatio
                || context.mozBackingStorePixelRatio
                || context.msBackingStorePixelRatio
                || context.oBackingStorePixelRatio
                || context.backingStorePixelRatio || 1
  return (window.devicePixelRatio || 1) / backingStore
}

function create() {
  if (canvasDom.value) {
    ctx.value = canvasDom.value.getContext('2d') || undefined
    ratio.value = getPixelRatio(ctx.value)
    canvasDom.value.width = 750 * ratio.value
    canvasDom.value.height = canvasDom.value.height * ratio.value
    animation()
  }
}
// 开启动画

function animation() {
  requestAnimationFrame(animation)
}

onMounted(() => {
  create()
})
</script>

<template>
  <div ref="fDom" w="100%" h="100%">
    <canvas ref="canvasDom" :width="fDom?.clientWidth" :height="fDom?.clientHeight">浏览器不支持</canvas>
  </div>
</template>
