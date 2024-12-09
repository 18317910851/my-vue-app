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
              <div class="main-title">地图模块</div>
              <boxLineInfo infos="让我们一起看看这些好看的盒子样式"></boxLineInfo>
              <mapInfo/>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import mapInfo from "./mapInfo/index.vue"

const mTab = ref()
const distanceToTop = ref(0)
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
    }
  ]
})

onMounted(() => {
  distanceToTop.value = mTab.value.getBoundingClientRect().top;
  console.log("distanceToTop", distanceToTop.value);
});
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
