<template>
  <div>
    <h3 id="C121" class="titleName">1.单行文本省略</h3>
    <code-box codeType="css" :code="oneLine"/>

    <h3 id="C122" class="titleName">1.多行文本省略</h3>
    <code-box codeType="css" :code="twoLine"/>


  </div>
</template>

<script setup lang="ts">

const oneLine = ref(`.ellipsis {
    white-space: nowrap; /* 确保文本在一行内显示 */
    overflow: hidden; /* 隐藏超出容器的文本 */
    text-overflow: ellipsis; /* 使用省略符号表示文本被截断 */
}`)

const twoLine = ref(` .ellipsis-multiline {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; /* 定义文本的行数 */
    overflow: hidden;
    text-overflow: ellipsis;
}`)
</script>

<style scoped lang="scss">

</style>
