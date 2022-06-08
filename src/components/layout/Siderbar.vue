<script setup>
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import MenuList from '../MenuList.vue';

const props = defineProps({
  routeList: {
    type: Array,
    default: () => [],
  },
});

const route = useRoute();
const defPath = ref(route.path);

watch(
  () => route.path,
  () => {
    defPath.value = route.path;
  }
);
</script>

<template>
  <div class="siderbar">
    <div class="title center">web</div>
    <el-menu
      :default-active="defPath"
      :router="true"
      text-color="#FFFFFF"
      active-text-color="#ffd04b"
      background-color="#292F4D"
    >
      <MenuList :routeList="props.routeList" />
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.siderbar {
  height: 100%;
  .title {
    font-size: 26px;
    color: #ffffff;

    height: 56px;
    background: #171c31;
    line-height: 56px;

    img {
      margin-right: 20px;
    }
  }
  .el-menu {
    height: calc(100vh - 56px);
    &:not(.el-menu--collapse) {
      width: 208px;
    }

    :deep(.el-sub-menu) {
      .el-menu-item {
        color: rgba(255, 255, 255, 0.6);

        &.is-active {
          background-image: linear-gradient(270deg, #4670ec 0%, #2d5ef1 100%);
          color: #ffffff;
        }
      }
    }
  }
}
</style>
