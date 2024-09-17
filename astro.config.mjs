import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 
			'Self-Learning',
			logo: {
				src: '/src/assets/logo.png'
			},
			// Set English as the default language for this site.
			defaultLocale: 'en',
			locales: {
				// English docs in `src/content/docs/en/`
				en: {
					label: 'English',
				},
				// Simplified Chinese docs in `src/content/docs/zh-cn/`
				'hindi': {
					label: 'Hindi',
					lang: 'hindi',
				},
			},
			sidebar: [
				{ label: 'Dr. Racket', autogenerate: { directory: 'racket/' } },
				{ label: 'Front-end', autogenerate: { directory: 'html' } },
				{ label: 'Umang', autogenerate: { directory: 'umang' } },
				{ label: 'CSS', autogenerate: { directory: 'css' } },
			],
			components: {
				Sidebar: './src/overrides/Sidebar.astro',
				Pagination: './src/overrides/Pagination.astro',
				SocialIcons: './src/components/PageCom.astro',
			},
			customCss: [
				'/src/styles/custom.css'
			]

		}),
	],
});
