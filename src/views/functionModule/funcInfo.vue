<template>
  <div ref="mTab" :style="'height:calc(100vh - ' + distanceToTop + 'px);'">
    <el-container style="height: 100%;">
      <el-aside class="common-layout-left">
        <leftComm :listInfo="leftList" :containerRef="containerRef"></leftComm>
      </el-aside>
      <el-main class="common-layout-main">
        <div ref="containerRef" class="right-box" style="height: 100%; overflow-y: auto;">
          <div style="width: 85%; margin: 0 auto;">
            <div id="C11">
              <div class="main-title" id="C111">地图模块</div>
              <boxLineInfo infos="让我们一起看看这些好看的盒子样式"></boxLineInfo>
              <mapInfo/>
            </div>
            <div id="C12">
              <div class="main-title" id="C121">Excel模块</div>
              <boxLineInfo infos="excel的导入导出"></boxLineInfo>
              <ExcelUpload/>
            </div>
            <div class="main-title" id="C122">Excel模块</div>
            <boxLineInfo infos="excel的导出"></boxLineInfo>
            <DownFile/>
          </div>
        </div>
      </el-main>
    </el-container>

  </div>

</template>

<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue'

import mapInfo from "./mapInfo/index.vue"
import ExcelUpload from "./excel/excelUpload.vue"
import DownFile from "@/views/functionModule/excel/downFile.vue";

const mTab = ref<HTMLElement>(null)
const distanceToTop = ref(0)
const containerRef = ref<HTMLElement | null>(null)

const leftList = ref({
  id: "C1",
  titleName: "基础功能合集",
  level: 1,
  menuList: [
    {
      id: "C11",
      level: 2,
      titleName: "地图模块",
      hrefName: "#C11",
      children: [
        {
          id: "C111",
          level: 3,
          titleName: "1.高德地图",
          hrefName: "#C111",
        },
      ]
    },
    {
      id: "C12",
      level: 2,
      titleName: "Excel模块",
      hrefName: "#C12",
      children: [
        {
          id: "C121",
          level: 3,
          titleName: "1.excel数据导入",
          hrefName: "#C121",
        },
        {
          id: "C122",
          level: 3,
          titleName: "2.excel导出",
          hrefName: "#C122",
        },
      ]
    }
  ]
})
onMounted(() => {
  distanceToTop.value = mTab.value.getBoundingClientRect().top;
})

</script>

<style scoped lang="scss">
.common-layout {
  width: 100%;

  &-left {
    height: 100%;
    font-size: 16px;
    background-color: #fff;
    width: 20rem;
    box-sizing: border-box;
    border-right: 1px solid #eaecef;
    overflow-y: auto;
  }

  &-main {
    height: 100%;
    overflow-y: auto;

    .right-box::-webkit-scrollbar {
      display: none;
    }
  }
}

</style>