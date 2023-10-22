import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'; // ! yarn add @types/node

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~global_styles': path.resolve(__dirname, './src/01_app/styles'),
      '~providers': path.resolve(__dirname, './src/01_app/providers'),
      '~store': path.resolve(__dirname, './src/01_app/store'),
      '~routing': path.resolve(__dirname, './src/01_app/routing'),
      '~app': path.resolve(__dirname, './src/01_app'),
      '~pages': path.resolve(__dirname, './src/02_pages'),
      '~widgets': path.resolve(__dirname, './src/03_widgets'),
      '~features': path.resolve(__dirname, './src/04_features'),
      '~entities': path.resolve(__dirname, './src/05_entities'),
      '~shared': path.resolve(__dirname, './src/06_shared'),
      // '~': path.resolve(__dirname, './src'), // ! <=
    },
  },
  plugins: [react()]
})