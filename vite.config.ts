import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import path from 'path'

import electron from 'vite-plugin-electron'
import electronRenderer from 'vite-plugin-electron-renderer'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),electron({
    main:{
      entry:"electron/index.ts"
    }
  }),electronRenderer()]
})
