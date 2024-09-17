import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react'; // React Integration import kiya
// https://astro.build/config
export default defineConfig({
	integrations: [
		react(), // React ko integrations me add kiya
		starlight({
			title: 'Self-Learning',
			logo: {
				src: '/src/assets/logo.png'
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
			customCss : [
				'/src/styles/custom.css'
			]

		}),
	],
});
