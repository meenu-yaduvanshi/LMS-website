import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Sajhe Sapne Learning Platform',
			sidebar: [
				{ label: 'Dr. Racket', autogenerate: { directory: 'racket/' } },
				{ label: 'Front-end', autogenerate: { directory: 'html' } },
			], components: {
				Sidebar: './src/overrides/Sidebar.astro',
				Pagination: './src/overrides/Pagination.astro',
			},

		}),
	],
});
