<template>
  <div>
    <h3 id="C121" class="titleName">1.单行文本省略</h3>
    <code-box codeType="css" :code="oneLine"/>

    <h3 id="C122" class="titleName">2.多行文本省略</h3>
    <code-box codeType="css" :code="twoLine"/>

    <h3 id="C123" class="titleName">3.伪元素的使用</h3>
    <div class="info-box">
      <p class='phead'>我要在我的前面添加一些信息</p>
    </div>
    <code-box codeType="html" code="<p class='phead'>我要在我的前面添加一些信息</p>"/>
    <code-box codeType="css" :code="pHeader"/>
    <div class="info-box">
      <p class='pnext'>我要在我的后面添加一些信息</p>
    </div>
    <code-box codeType="html" code="<p class='pnext'>我要在我的前面添加一些信息</p>"/>
    <code-box codeType="css" :code="pNext"/>
  </div>
</template>

<script setup lang="ts">
import {oneLine, twoLine, pHeader, pNext} from "@/views/css/commData/cssBaseData";

</script>

<style scoped lang="scss">
.info-box {
  padding: 30px;
  border: 1px solid #2CD5FF;

  .phead{
    display: block;
    position: relative;
    color: #2CD5FF;
    font-weight: bold;
    cursor: pointer;
    margin-left: 10px;

    &::before{
      position: absolute;
      content: "";
      top: 50%;
      left: -10px;
      width: 4px;
      height: 20px;
      background: red;
      transform: translateY(-50%);
    }
  }

  .pnext{
    display: block;
    position: relative;
    color: #2CD5FF;
    font-weight: bold;
    cursor: pointer;
    margin-right: 10px;
    width: fit-content;

    &::after{
      position: absolute;
      content: "";
      top: 50%;
      right: -10px;
      width: 4px;
      height: 20px;
      background: red;
      transform: translateY(-50%);
    }
  }
}
</style>
