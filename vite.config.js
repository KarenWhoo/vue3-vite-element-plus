import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import legacy from '@vitejs/plugin-legacy';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite';
import viteCompression from 'vite-plugin-compression';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    base: env.VITE_APP_BASE_URL,
    plugins: [
      vue(),
      viteCompression({
        // gzip压缩
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
      }),
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ['vue', 'vuex', 'vue-router'],
        // // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        resolvers: [ElementPlusResolver()],
        eslintrc: {
          // 此处为true运行后会生成.eslintrc-auto-import.json文件
          enabled: false, // 此处第一次运行使用true,之后改为false
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true,
        },
      }),
      Components({
        resolvers: [
          // 自动注册图标组件
          IconsResolver({
            prefix: 'icon',
          }),
          // 自动导入 Element Plus 组件
          ElementPlusResolver(),
        ],
      }),
      Icons({
        autoInstall: true,
      }),

      legacy({
        // 为打包后的文件提供传统浏览器兼容性支持
        targets: ['defaults', 'not IE 11'],
      }),
    ],
    // 配置别名
    resolve: {
      alias: {
        '@': '/src',
        components: '/src/components',
        views: '/src/views',
      },
      extensions: ['*', '.js', '.json'],
    },
    cssPreprocessOptions: {
      scss: {
        // 这里写你想导入全局scss变量的路径
        // 这里注意只能写相对路径，alias貌似在css中不会生效
        // additionalData: "@import './src/style/a.scss';",
      },
    },
    server: {
      port: 3000, // 启动端口
      open: true, // 自动打开
      proxy: {},
    },
    build: {
      outDir: env.VITE_APP_OUT_DIR,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
      },
    },
  };
});
