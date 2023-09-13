<template>
  <div class="prompt-wrapper w-full">
    <div class="prompt-top bg-white pt-8 px-[10%] pb-0">
      <h2 class="title text-center m-0 text-3xl tracking-widest">Prompt指令集</h2>
      <h3 class="slogan text-center mt-2 mx-0 mb-0 font-normal text-base tracking-widest">激活AI魔力，使用如此简单</h3>
      <a-tabs v-model:activeKey="state.activeKey" class="custom-tabs">
        <template #rightExtra>
          <a-input-search v-model:value="state.promptSearch" allow-clear placeholder="搜索指令"
                          @input="handleSearchDebounce"/>
        </template>
        <a-tab-pane key="all" tab="全部">
          <checkbox-group v-if="allPromptOptions.length" ref="allPromptCheckboxRef" :options="allPromptOptions"
                          @change="onAllCheckboxChange"/>
        </a-tab-pane>
        <a-tab-pane key="hot" tab="热门🔥">
          <checkbox-group v-if="hotPromptOptions.length" ref="hotPromptCheckboxRef" :options="hotPromptOptions"
                          @change="onHotCheckboxChange"/>
        </a-tab-pane>
      </a-tabs>
    </div>
    <div class="prompt-bottom px-[10%]">
      <div class="panel-box py-8">
        <prompt-panel v-show="state.activeKey === 'all'" :prompts="state.promptList"/>
        <prompt-panel v-show="state.activeKey === 'hot'" :prompts="state.hotPromptList"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import {usePromptStore} from '@/store'
import {debounce} from "lodash-es";
import {onMounted} from "vue";

const promptStore = usePromptStore()
const allPromptOptions = computed(() => promptStore.allPromptOptions)
const hotPromptOptions = computed(() => promptStore.hotPromptOptions)
const originPromptList = computed(() => promptStore.promptList)
const originHotPromptList = computed(() => promptStore.hotPromptList)

const state = reactive({
  activeKey: 'all',
  promptSearch: '',
  promptList: [],
  hotPromptList: [],
})

const allPromptCheckboxRef = ref(null)
const hotPromptCheckboxRef = ref(null)

const onAllCheckboxChange = (list) => {
  state.promptList = list.length
      ? originPromptList.value.filter(item => list.includes(item.category)) : originPromptList.value
}
const onHotCheckboxChange = (list) => {
  state.hotPromptList = list.length
      ? originHotPromptList.value.filter(item => list.includes(item.category)) : originHotPromptList.value
}

const loadData = () => {
  state.promptList = originPromptList.value?.filter(item => item)
  state.hotPromptList = originHotPromptList.value
}

const getPromptList = async (value = '') => {
  try {
    await promptStore.getPromptList(state.promptSearch)
    if (!value) {
      if (state.activeKey === 'hot') {
        hotPromptCheckboxRef.value?.clearCheckedList()
      } else if (state.activeKey === 'all') {
        allPromptCheckboxRef.value?.clearCheckedList()
      }
    }
    loadData()
  } catch (error) {
    console.warn('[ getPromptList error ]', error)
  }
}

const handleSearch = () => {
  getPromptList(state.promptSearch)
}
const handleSearchDebounce = debounce(handleSearch, 500)

onMounted(async () => {
  await getPromptList(state.promptSearch)
})
</script>

<style lang="less">
.custom-tabs {
  .ant-tabs {
    &-tab {
      &-btn {
        font-size: 20px;
        color: var(--font-color-333);
        font-weight: bold;
      }
    }
  }
}
</style>
