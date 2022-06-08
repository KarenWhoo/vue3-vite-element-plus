import axios from 'axios';
import { ElMessage } from 'element-plus';

// 创建一个 axios 实例
const service = axios.create({
  baseURL: '', // 所有的请求地址前缀部分
  timeout: 60000, // 请求超时时间,默认60s
  headers: {
    // 设置后端需要的传参类型,默认application/json
    'Content-Type': 'application/json',
  },
});

// 添加请求拦截器
service.interceptors.request.use((config) => {
  // .....
  return config;
});

// 添加响应拦截器
service.interceptors.response.use(
  (response) => {
    // response的status大于200,小于300,进入这里
    if (response.request.responseType === 'blob') {
      return response;
    }

    return response.data || true;
  },
  (error) => {
    ElMessage.error(error.response.message || '请求失败！');
    return false;
  }
);

// get请求
export const get = (url, params) =>
  service.get(url, {
    params,
  });

// post请求
export const post = (url, data) => service.post(url, data);

// 文件下载
export const download = (url, params, name) =>
  service.get(url, { params, responseType: 'blob' }).then((response) => {
    if (response.data.type === 'application/json') {
      const reader = new FileReader();
      reader.onload = () => {
        const { message } = JSON.parse(reader.result);
        ElMessage.error(message);
      };
      reader.readAsText(response.data);
    } else {
      const fileNameEncode =
        response.headers['content-disposition'].split('filename=')[1];
      // 解码
      const fileName = decodeURIComponent(fileNameEncode, 'UTF-8').replace(
        /"/g,
        ''
      );
      const href = window.URL.createObjectURL(response.data); // 创建一个临时的url指向blob对象
      const a = document.createElement('a');
      a.href = href;
      a.download = name || fileName;
      a.click();
      // 释放这个临时对象
      window.URL.revokeObjectURL(href);
    }
  });

export default service;
