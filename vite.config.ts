import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 设置 @ 指向 src 目录
      // 可以添加更多别名
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
})
