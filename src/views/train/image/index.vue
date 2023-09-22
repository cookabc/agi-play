<template>
    Image
  <div f-c-c min-w-1300 px-80 class="min-h-[calc(100vh-50px)]">
  </div>
</template>
<script setup>
import {useTrainStore} from '@/store'
import {onMounted, onUnmounted} from "vue";

const trainStore = useTrainStore()
trainStore.resetClasses()
const confirmLeave = (event) => {
  // 在页面即将关闭时显示确认提示
  const confirmationMessage = '您确定要离开此页面吗？'
  // 设置返回值以触发确认提示
  event.returnValue = confirmationMessage;
  // 返回确认提示消息，如果用户点击确认，则关闭页面，否则页面将保持打开状态
  return confirmationMessage;
}
onMounted(() => {
  window.addEventListener('beforeunload', confirmLeave)
})
onUnmounted(() => {
  window.removeEventListener('beforeunload', confirmLeave)
})
</script>
