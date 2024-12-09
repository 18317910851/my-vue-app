<template>
  <div class="container flex-center-auto">
    <div class="container-box ">
      <img src="@/assets/images/firstPage/img.png" alt=""/>
      <p class="title-name">我的前端进阶之旅</p>
      <p class="info-title">前端系统进阶笔记 & 面试指南</p>
      <div class="btn-know flex-center-auto">
        快速了解
        <Right style=" width: 25px; color: white"/>
      </div>
      <div class="info-box">
        <div class="info-box-item" @click="goDetailPage(item)" v-for="item in itemList" :key="item.id">
          <span class="title">{{ item.name }}</span>
          <span class="info">{{ item.info }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router"

const router = useRouter()
const itemList = [
  {
    id: 1,
    name: "css样式大全",
    info: "帮你快速找到你需要的样式",
    to: "/cssPage"
  }, {
    id: 2,
    name: "我的踩坑日记",
    info: "踩了一次就要牢记不要在忘记"
  }, {
    id: 3,
    name: "文档",
    info: "我们需要记住的一些重要文档",
  }, {
    id: 4,
    name: "工具",
    info: "让我们看看有哪些开发工具吧",
  }, {
    id: 5,
    name: "功能模块",
    info: "我们常用的一些功能",
    to: "/funcPage"
  }
]


const goDetailPage = (dataInfo) => {
  router.push(dataInfo.to)
}
</script>

<style scoped lang="scss">
.container {
  &-box {
    width: 1000px;
    text-align: center;
    margin-top: 80px;

    .title-name {
      margin-top: 30px;
      font-size: 36px;
      font-weight: bold;
    }

    .info-title {
      margin-top: 30px;
      color: #6a8bad;
      font-size: 26px;
    }

    .btn-know {
      margin: 40px auto 0;
      width: 180px;
      font-size: 1.2rem;
      color: #fff;
      background-color: #3eaf7c;
      padding: .8rem 1.6rem;
      border-radius: 4px;
      transition: background-color .1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid #389d70;

      &:hover {
        background-color: #41b883;
      }
    }

    .info-box {
      margin-top: 30px;
      border-top: 1px solid #eaecef;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding-top: 40px;

      &-item {
        cursor: pointer;
        width: 260px;
        display: flex;
        justify-items: left;
        flex-direction: column;

        .title {
          text-align: left;
          font-size: 25px;
          font-weight: 500;
          border-bottom: none;
          padding-bottom: 0;
          color: #3a5169;
          margin: 0 0 20px;
        }

        .info {
          font-size: 20px;
          text-align: left;
          color: #4e6e8e;
          margin-bottom: 35px;
        }
      }
    }
  }
}
</style>
