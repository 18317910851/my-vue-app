<template>
  <div class="first-top">
    <div class="first-top-left flex-center-y" @click="goHomePage">
      <img class="first-top-left-img " src="@/assets/images/firstPage/img.png" alt="">
      <span>我的前端文档</span>
    </div>
    <div class="first-top-right">
      <ul>
        <li>css样式</li>
        <li>踩坑日记</li>
        <li>文档</li>
        <li>工具</li>
        <li>
          <img class="header-img" src="@/assets/images/firstPage/header.png" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter, useRoute} from "vue-router";

const routes = useRouter()
const router = useRouter()
const goHomePage = () => {

  router.push('/homePage');
}
</script>

<style scoped lang="scss">
.first-top {
  height: 55px;
  line-height: 55px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid #eaecef;

  .first-top-left {
    display: flex;

    &-img {
      margin-left: 20px;
      margin-right: 10px;
      width: 2rem;
      height: 2rem;
    }
  }

  &-right {


    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      align-items: center;
      display: flex;

      li {
        cursor: pointer;
        margin-right: 15px;
        font-size: 15px;
        //line-height: 18px;

        &:hover {
          color: #409eff;
        }
      }
    }
  }
}

.header-img {
  display: block;
  margin: auto 10px auto 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>
