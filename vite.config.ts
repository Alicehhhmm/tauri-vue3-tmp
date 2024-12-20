import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path';
const projectRoot = path.resolve(__dirname, '');

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.join(projectRoot, 'src')
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.json'],
    },
    server: {
        host: 'localhost',
        port: 5173,
    },

})
