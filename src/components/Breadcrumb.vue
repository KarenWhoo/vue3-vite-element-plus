<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <el-breadcrumb separator="/">
    <template v-for="(item, index) in route.matched">
      <el-breadcrumb-item v-if="item.meta.title" :key="index" :to="item.path">{{
        item.meta.title
      }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<style lang="scss" scoped>
:deep(.el-breadcrumb) {
  .el-breadcrumb__item {
    .breadcrumb__inner.is-link {
      color: #527dff !important;
    }
  }
}
</style>
