<template>
  <div class="box-info">
    <div class="left-box"></div>
    <div class="ino">{{ props.infos }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["infos"])
</script>

<style scoped lang="scss">
.box-info {
  margin: 15px 0;
  padding: 10px 16px;
  color: #555;
  border-left: 4px solid #ef7060;
  background: #fff9f9;
  font-size: 1rem;
}
</style>
