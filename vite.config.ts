import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';
import legacy from '@vitejs/plugin-legacy';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		basicSsl(),
		legacy({
			targets: ['defaults', 'not IE 11'],
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src/'),
		},
	},
	envPrefix: 'ENV_',
	server: {
		port: 3000,
		https: true,
		cors: true,
	},
});
