<script setup>
const router = useRouter();
const ruleFormRef = ref();
const ruleForm = reactive({
  userName: '',
  password: '',
});

const rules = {
  userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
};

const login = (form) => {
  form.validate(async (valid) => {
    if (valid) {
      ElMessage.success('登录成功！');
      localStorage.setItem('token', '66666666');
      localStorage.setItem('username', 'admin');
      router.push('/');
    }
  });
};

// 按enter键进行登录
const enterLogin = () => {
  document.onkeydown = () => {
    const key = window.event.keyCode;
    if (key === 13) {
      login(ruleFormRef.value);
    }
  };
};
enterLogin();

onBeforeUnmount(() => {
  document.onkeydown = '';
});
</script>

<template>
  <div class="loginPage center">
    <h1 class="title">XXX管理平台</h1>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      class="loginForm"
    >
      <el-form-item prop="userName" required>
        <el-input v-model="ruleForm.userName" placeholder="请输入用户名">
          <template #prefix>
            <el-icon><icon-carbon-user-avatar /></el-icon> </template
        ></el-input>
      </el-form-item>
      <el-form-item prop="password" required>
        <el-input
          v-model="ruleForm.password"
          type="password"
          placeholder="请输入密码"
          ><template #prefix>
            <el-icon><icon-carbon-password /></el-icon> </template
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="login(ruleFormRef)"
          class="submit"
          @keyup.enter="enterLogin"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.loginPage {
  height: 100vh;
  flex-direction: column;

  .title {
    font-size: 28px;
    letter-spacing: 6px;
    margin-bottom: 30px;
  }
  .loginForm {
    background-color: #c6e2ff;
    padding: 32px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 300px;
    height: 250px;

    .submit {
      width: 100%;
    }
  }
}
</style>
