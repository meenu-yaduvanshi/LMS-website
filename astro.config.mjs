import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Self-Learning',
			logo: {
				src: '/src/assets/logo.png'
			},
			sidebar: [
				{ label: 'Dr. Racket', autogenerate: { directory: 'racket/' } },
				{ label: 'Front-end', autogenerate: { directory: 'html' } },
			], 
			components: {
				Sidebar: './src/overrides/Sidebar.astro',
				Pagination: './src/overrides/Pagination.astro',
				SocialIcons: './src/components/PageCom.astro',
			},
			customCss : [
				'/src/styles/custom.css'
			]

		}),
	],
});
