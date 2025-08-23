import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";

export default defineConfig({
	plugins: [tailwindcss(), tsconfigPaths(), enhancedImages(), sveltekit()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./")
		}
	},
	server: {
		port: 3000,
		fs: {
			allow: [
				path.resolve(__dirname, 'registry') // allow registry folder
			]
  	}
	},
	test: {
		projects: [
			{
				extends: './vite.config.ts',
				test: {
					name: 'client',
					environment: 'browser',
					browser: {
						enabled: true,
						provider: 'playwright',
						instances: [{ browser: 'chromium' }]
					},
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**'],
					setupFiles: ['./vitest-setup-client.ts']
				}
			},
			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
});
