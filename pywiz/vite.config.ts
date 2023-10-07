import { defineConfig } from 'vite';
// import { createServer } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // 后端服务器地址
        changeOrigin: true, // 允许跨域
        rewrite: (path) => path.replace(/^\/api/, ''), // 重写请求路径
      },
    },
  },
  // 其他配置...
});
