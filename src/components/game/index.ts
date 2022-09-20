import { ref } from 'vue'
import type Box from './box'
type BoxType = typeof Box
export default function () {
  const boxList = ref<BoxType[]>()
  return {
    boxList,
  }
}
