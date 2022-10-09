import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const root = resolve(__dirname, 'htdocs');
const outDir = resolve(__dirname, 'dist');
const publicDir = resolve(__dirname, 'public');

// https://vitejs.dev/config/
export default defineConfig({
	root,
	publicDir,

  build: {
    outDir,
		rollupOptions: {
			input: {
				index: resolve(root, 'index.html'),
				about: resolve(root, 'about', 'index.html')
			}
		}
  },

	server: {
		host: true,
		port: 3000,
	},

  plugins: [vue()],

	resolve: {
		alias: {
			'vue': 'vue/dist/vue.esm-bundler.js',
		},
	},
})
