import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pugPlugin from '@macropygia/vite-plugin-pug-static'

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
				index: resolve(root, 'index.pug'),
				about: resolve(root, 'about', 'index.pug')
			}
		}
  },

	server: {
		host: true,
		port: 3000,
	},

  plugins: [
		vue(),
		pugPlugin({
			buildOptions: {
				basedir: root,
			},
			serveOptions: {
				basedir: root,
			}
		})
	],

	resolve: {
		alias: {
			'vue': 'vue/dist/vue.esm-bundler.js',
		},
	},
})
