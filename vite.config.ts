import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ find: '@', replacement: fileURLToPath( new URL( './src', import.meta.url ) ) },
			{
				find: '@styles',
				replacement: fileURLToPath(
					new URL( './src/common/styles/index.scss', import.meta.url )
				),
			},
		],
	},
	server: {
		port: 3000,
	},
})
