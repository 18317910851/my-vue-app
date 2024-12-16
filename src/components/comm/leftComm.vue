<template>
  <div style="padding-left: 10px;">
    <div class="topTitle" :class="'level' + props.listInfo.level">{{ props.listInfo.titleName }}</div>
    <el-anchor :container="containerRef" direction="vertical"
               type="default"
               :offset="200"
               @click="handleClick">
      <div v-for="item in props.listInfo.menuList" :key="item.id">
        <el-anchor-link  :class="'level' + item.level" v-if="item.children"
                        :href="item.hrefName" :title="item.titleName">
          <template #sub-link>
            <el-anchor-link :class="'level' + item1.level" :key="item1.id"
                            :href="item1.hrefName" :title="item1.titleName" v-for="item1 in item.children"/>
          </template>
        </el-anchor-link>
        <el-anchor-link :class="'level' + item.level" v-else
                        :href="item.hrefName" :title="item.titleName"/>
      </div>

    </el-anchor>
  </div>
</template>

<script setup lang="ts">

const handleClick = (e: MouseEvent) => {
  e.preventDefault()
}
const props = defineProps({
  listInfo: {
    type: Object,
    required: true,
    default: () => {
      return {
        id: "C1",
        titleName: "CSS基础使用",
        level: 1,
        menuList: []
      }
    }
  },
  containerRef: {}
})

</script>

<style scoped lang="scss">
.level2 {
  margin: 5px 20px;

  :deep() {
    .el-anchor__link {
      font-size: 16px;
      color: #626e91;
      font-weight: bold;
    }

    .is-active {
      color: #409eff !important;
    }
  }
}

.level3 {
  margin: 5px;

  :deep() {
    .el-anchor__link {
      font-size: 14px;
      color: #626e91;
      font-weight: bold;

    }

    .is-active {
      color: #409eff !important;
    }
  }
}

.topTitle {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0 10px 12px;
  line-height: 1.5;
}
</style>
