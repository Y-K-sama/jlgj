import { ref } from 'vue'
export default function ({
  x = 0,
  y = 0,
}) {
  // 位置
  const point = ref({
    x,
    y,
  })
  // 是否可点击
  const status = ref(true)
  const bg = ref('')
  return {
    point,
    status,
    bg,
  }
}
