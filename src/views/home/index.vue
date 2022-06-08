<script setup>
import { useStore } from 'vuex';
import Header from '@/components/layout/Header.vue';
import Siderbar from '@/components/layout/Siderbar.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';

const store = useStore();

onMounted(async () => {
  if (!store.state.global.token) {
    await store.dispatch('global/init');
  }
});
</script>

<template>
  <el-container class="container" direction="horizontal">
    <el-aside class="aside" width="208">
      <Siderbar :routeList="store.state.global.homeRoutes"></Siderbar
    ></el-aside>
    <el-container direction="vertical">
      <el-header class="header"><Header></Header></el-header>
      <div class="breadcrumb"><Breadcrumb /></div>
      <el-main class="mainBody">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  height: 100vh;
  .header {
    color: #ffffff;
    height: 56px;
    background: #2c49c2;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
  }

  .aside {
    height: 100%;
  }

  .breadcrumb {
    padding-left: 24px;

    .el-breadcrumb {
      height: 40px;
      line-height: 40px;
    }
  }

  .mainBody {
    flex: auto;
    background: #f4f6fa;
    padding: 16px 16px 24px 16px;
  }
}
</style>
