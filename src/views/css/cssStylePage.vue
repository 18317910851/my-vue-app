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
              <div class="main-title">盒子模型</div>
              <boxLineInfo infos="让我们一起看看这些好看的盒子样式"></boxLineInfo>
              <CssBox/>
            </div>>

            <div id="C12">
              <div class="main-title">CSS基础使用</div>
              <boxLineInfo infos="来看看你是否忘记了这些属性"></boxLineInfo>
              <CssBase></CssBase>
            </div>
            <div id="part3" style="height: 500px;background: rgba(0, 0, 255, 0.02);margin-top: 30px;">
              <div class="main-title">好看的盒子</div>
              <boxLineInfo infos="动态盒子样式"></boxLineInfo>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>

</template>

<script setup lang="ts">
import CssBox from "./components/CssBox.vue"
import CssBase from "./components/CssBase.vue"

const mTab = ref(null)
const distanceToTop = ref(0)

const containerRef = ref<HTMLElement | null>(null)
const leftList = ref(
    {
      id: "C1",
      titleName: "CSS基础使用",
      level: 1,
      menuList: [
        {
          id: "C11",
          level: 2,
          titleName: "边框样式",
          hrefName: "#C11",
          children: [
            {
              id: "C111",
              level: 3,
              titleName: "1.点式边框",
              hrefName: "#C111",
            },
            {
              id: "C112",
              level: 3,
              titleName: "2.双线式边框",
              hrefName: "#C112",
            },
            {
              id: "C113",
              level: 3,
              titleName: "3.破折线式边框",
              hrefName: "#C113",
            },
            {
              id: "C114",
              level: 3,
              titleName: "4.脊线式边框",
              hrefName: "#C114",
            },
            {
              id: "C115",
              level: 3,
              titleName: "5.内嵌效果的边框",
              hrefName: "#C115",
            },
            {
              id: "C116",
              level: 3,
              titleName: "6.突起效果的边框",
              hrefName: "#C116",
            },
            {
              id: "C117",
              level: 3,
              titleName: "7.闪烁边框",
              hrefName: "#C117",
            },
            {
              id: "C118",
              level: 3,
              titleName: "8.滚动线条边框",
              hrefName: "#C118",
            },
            {
              id: "C119",
              level: 3,
              titleName: "9.图片边框",
              hrefName: "#C119",
            },
          ]
        },
        {
          id: "C12",
          level: 2,
          titleName: "CSS基础样式",
          hrefName: "#C12",
          children: [
            {
              id: "C121",
              level: 3,
              titleName: "1.单行省略",
              hrefName: "#C121",
            },
            {
              id: "C122",
              level: 3,
              titleName: "2.多行省略",
              hrefName: "#C122",
            },
            {
              id: "C123",
              level: 3,
              titleName: "3.伪元素的使用",
              hrefName: "#C123",
            },
          ]
        },

        {
          id: "C13",
          level: 2,
          titleName: "part3",
          hrefName: "#part3",
        }
      ]

    }
)

const jsCode = `
      const greet = () => console.log("Hello, world!");
    `;
const htmlCode = `
      <div class="example">Hello, World!</div>
    `;
const pythonCode = `
      def greet():
          print("Hello, world!")
    `;


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
