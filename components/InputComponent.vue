<template>
  <div class="input-component absolute bottom-0 left-0 right-0 z-9 py-3.5 bg-gradient-to-b bg-white bg-opacity-80">
    <a-form
        class="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-5xl">
      <div
          class="bg-[var(--ant-primary-color-3)] flex w-full py-[10px] flex-grow px-4 relative border border-black/10 rounded-xl shadow-sm">
        <a-textarea
            ref="messageRef"
            class="textarea m-0 w-full resize-none p-0 focus:ring-0 focus-visible:ring-0 md:pr-2 pl-3 md:pl-0 text-base placeholder:text-[#666]"
            :bordered="false"
            :maxlength="2000"
            :show-count="true"
            :auto-size="{ minRows: 2, maxRows: 8 }" v-model:value="state.chatValue"
            placeholder="请在此输入您要提问的内容"
            @keydown="onSendMsg"/>
        <a-button type="primary"
                  size="large"
                  class="rounded-lg"
                  native-type="submit"
                  @click="sendMessage"
                  :disabled="state.isDisabled || !state.chatValue">
          发送
          <send-outlined/>
        </a-button>
      </div>
    </a-form>
  </div>
</template>
<script setup>
import {reactive, ref, onMounted} from 'vue'
import {SendOutlined} from '@ant-design/icons-vue'
import {message} from "ant-design-vue";
import {useChatStore} from "~/store";
import {scrollToBottomIfAtBottom} from "~/utils/useScroll";

const route = useRoute()
const chatStore = useChatStore()
const state = reactive({
  promptId: computed(() => route.query.promptId),
  sessionId: computed(() => route.query.sessionId),
  chatValue: '',
  isDisabled: false
})

const sendMessage = async () => {
  if (state.isDisabled) return
  try {
    const promptId = state.promptId
    let text = state.chatValue
    if (text === '' || /^\s+$/.test(text)) {
      message.warn('请输入你的消息')
      return
    }
    text = encodeHtmlEntities(text)
    state.isDisabled = true
    await scrollToBottomIfAtBottom()
    const data = {
      id: state.sessionId || null,
      prompt_id: promptId,
      prompt: text,
    }
    await chatStore.sendMessage(data)
  } catch (error) {
    console.warn('[ sendMessage error ]', error)
  } finally {
    state.isDisabled = false
  }
}

const encodeHtmlEntities = (str) => {
  const tempEl = document.createElement("div");
  tempEl.innerText = str
  return tempEl.innerHTML
}

const onSendMsg = (e) => {
  if (e.keyCode === 13 && !e.shiftKey) {
    e.preventDefault()
    sendMessage()
  }
}

const messageRef = ref(null)
const onFocus = () => {
  messageRef.value?.focus()
}
defineExpose({
  onFocus
})

onMounted(() => {
  console.log(state.promptId)
})
</script>
<style scoped lang="less">
.textarea {
  background-color: transparent;

  &:focus {
    outline: 0;
    box-shadow: none;
  }

  textarea {
    font-size: 16px;
  }
}

.ant-input-textarea-show-count {
  &::after {
    position: absolute;
    right: 16px;
    bottom: 0;
    font-size: 14px;
  }
}
</style>
<style lang="less">
.input-component {
  textarea {
    font-size: 16px;
  }
}
</style>
