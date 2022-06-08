# Vue 3 + Vite

vue3 + vite + element-plus + eslint-config-airbnb 使用模板

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

### Project setup

```
npm install or yarn install
```

### Compiles and hot-reloads for development

```
npm run dev or yarn dev
```

### Compiles and minifies for production

```
npm run build or yarn build
```

## 注意事项

```
1.node 版本为 14 以上

2.路由部分加了后台权限处理，可根据实际项目调整

3.如果项目地址不在根路径下，需要在vite.config.js中配置base，'./'只用于开发环境
```

### icon 使用方法

```
1. https://icon-sets.iconify.design/ 中查找需要使用的图标，找到对应的名字，如：carbon:user-avatar（carbon 为图标集名称，user-avatar 为 icon 名称）

2. 在代码中已 【icon-图标集名称-icon 名称】 的命名方式使用，如：<icon-carbon-user-avatar />
```
