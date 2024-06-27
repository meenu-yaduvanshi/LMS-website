import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Sajhe Sapne Learning Platform',
			sidebar: [
				{
					label: 'Dr. Racket',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Installation', link: '/racket/install/' },
						{ label: 'Function design', link: '/racket/function/' },
						{ label: 'Data Design', link: '/racket/data/' },
						{ label: 'Animations', link: '/racket/anima/' },
						{ label: 'List mechanism', link: '/racket/lists/' },
						{ label: 'Natural data type', link: '/racket/natural/' }
					],
				},
				{
					label: 'HTML',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'introduction', link: '/html/example/' },
						{ label: 'tags', link: '/html/tags/' },
						{ label: 'attributes', link: '/html/attributes/' },
						{ label: 'website structure', link: '/html/structure/' }
					],
				},
				{
					label: 'CSS',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'introduction', link: '/css/intro/' },
						{ label: 'classes', link: '/css/classes/' },
						{ label: 'id', link: '/css/id/' },
						{ label: 'grid', link: '/css/grid/' },
						{ label: 'flex', link: '/css/flex/' }
					],
				},
				{
					label: 'JavaScript',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', link: '/javascript/intro/' },
						{ label: 'Variables and Data Type ', link: '/javascript/vardata/' },
						{ label: 'Function', link: '/javascript/function/' },
						{ label: 'Objects', link: '/javascript/objects/' },
						{ label: 'Operators', link: '/javascript/operat/' },
						{ label: 'DOM', link: '/javascript/dom/' }
					],
				},
			],
		}),
	],
});
