<script setup>
const props = defineProps({
  routeList: {
    type: Array,
    default: () => [],
  },
  parentPath: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <template v-for="item in props.routeList" :key="item.name">
    <el-sub-menu
      :index="`${parentPath ? parentPath + '/' + item.path : item.path}`"
      v-if="
        item.children &&
        item.children.length &&
        item.meta.menu &&
        item.children.some((item) => item.meta.menu)
      "
    >
      <template #title
        ><el-icon v-if="item.meta.icon"
          ><component :is="item.meta.icon" /></el-icon
        ><span> {{ item.meta.title }}</span></template
      >
      <MenuList :routeList="item.children" :parentPath="item.path" />
    </el-sub-menu>
    <el-menu-item
      v-else-if="item.meta.menu"
      :index="`${parentPath ? parentPath + '/' + item.path : item.path}`"
      :key="item.name"
      >{{ item.meta.title }}</el-menu-item
    >
  </template>
</template>

<style lang="scss" scoped>
.siderbar {
  height: 100%;

  &:not(.el-menu--collapse) {
    width: 250px;
  }
}
</style>
