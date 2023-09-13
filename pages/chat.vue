<template>
  <div class="relative flex h-full max-w-full flex-1 overflow-hidden">
    <div id="chatContent" ref="scrollRef" class="chat-right overflow-y-auto bg-[var(--chat-bg-color)] w-full h-full"
         :class="state.isShow ? 'scroll-smooth' : 'visible opacity-0'">
      <div class="message-list py-4" id="messageList">
        <chat-component/>
        <div class="h-32 md:h-48 flex-shrink-0"></div>
      </div>
      <input-component/>
    </div>
  </div>
</template>
<script setup>
import {reactive} from 'vue'
import ChatComponent from '@/components/ChatComponent.vue'
import InputComponent from '@/components/InputComponent.vue'

const state = reactive({
  isShow: true,
})
</script>
