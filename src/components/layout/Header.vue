<script setup>
import { useStore } from 'vuex';

const store = useStore();

const logout = () => {
  store.dispatch('global/logout');
};
</script>

<template>
  <el-dropdown class="adminDropdown">
    <span>
      <el-icon :size="16"><icon-carbon-user-avatar /></el-icon>
      <span style="margin-left: 8px">{{ store.state.global.username }}</span>
      <el-icon style="margin-left: 12px"><icon-carbon-chevron-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped>
.adminDropdown {
  font-size: 14px;
  color: #fff;
  :deep(.el-tooltip__trigger) {
    display: flex;
    align-items: center;
  }

  .userImg {
    width: 18px;
    height: 18px;
    margin-right: 9px;
  }
}
</style>
