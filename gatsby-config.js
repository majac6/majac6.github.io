module.exports = {
	pathPrefix: '/',
	siteMetadata: {
		title: 'MAJAC Blog',
		author: 'majac6',
	},
	plugins: [
		// {
		// 	resolve: 'gatsby-plugin-favicon',
		// 	options: {
		// 		logo: './src/favicon.png',
		// 		injectHTML: true,
		// 		icons: {
		// 			android: true,
		// 			appleIcon: true,
		// 			appleStartup: true,
		// 			coast: false,
		// 			favicons: true,
		// 			firefox: true,
		// 			twitter: false,
		// 			yandex: false,
		// 			windows: false,
		// 		},
		// 	},
		// },
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				includePaths: [`${__dirname}/node_modules`, `${__dirname}/src/style`],
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/posts/`,
				name: 'posts',
			},
		},
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 590,
							linkImagesToOriginal: false,
						},
					},
				],
			},
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: 'UA-110074065-1',
			},
		},
		'gatsby-plugin-offline',
	],
}

// module.exports = {
// 	siteMetadata: {
// 		title: 'Gatsby Default Starter',
// 	},
// 	plugins: [
// 		{
// 			resolve: `gatsby-plugin-sass`,
// 			options: {
// 				includePaths: [`${__dirname}/node_modules`, `${__dirname}/src/style`],
// 			},
// 		},
// 		{
// 			resolve: `gatsby-source-filesystem`,
// 			options: {
// 				path: `${__dirname}/posts`,
// 				name: `pages`,
// 			},
// 		},
// 		// {
// 		// 	resolve: `gatsby-plugin-typography`,
// 		// 	options: {
// 		// 		pathToConfigModule: `src/utils/typography.js`,
// 		// 	},
// 		// },
// 		`gatsby-transformer-sharp`,
// 		{
// 			resolve: `gatsby-transformer-remark`,
// 			options: {
// 				gfm: true,
// 				commonmark: true,
// 				footnotes: true,
// 				pedantic: true,
// 				// blocks: ["h2"], Blocks option value can be provided here as an array.
// 				excerpt_separator: `<!-- end -->`,
// 				plugins: [
// 					{
// 						resolve: `gatsby-remark-images`,
// 						options: {
// 							maxWidth: 740,
// 						},
// 					},
// 					{
// 						resolve: `gatsby-remark-responsive-iframe`,
// 						options: {
// 							wrapperStyle: `margin-bottom: 1.0725rem`,
// 						},
// 					},
// 					`gatsby-remark-copy-linked-files`,
// 					{
// 						resolve: `gatsby-remark-smartypants`,
// 						options: {
// 							dashes: `oldschool`,
// 						},
// 					},
// 					`gatsby-remark-prismjs`,
// 					`gatsby-remark-autolink-headers`,
// 					`gatsby-remark-katex`,
// 				],
// 			},
// 		},
// 		`gatsby-transformer-yaml`,
// 		`gatsby-plugin-sharp`,
// 		`gatsby-plugin-catch-links`,
// 		// `gatsby-plugin-glamor`,
// 	],
// 	// plugins: [
// 	// 	// 플러그인 시작
// 	// 	'gatsby-plugin-react-helmet',
// 	// 	{
// 	// 		resolve: `gatsby-plugin-manifest`,
// 	// 		options: {
// 	// 			name: 'gatsby-starter-default',
// 	// 			short_name: 'starter',
// 	// 			start_url: '/',
// 	// 			background_color: '#663399',
// 	// 			theme_color: '#663399',
// 	// 			display: 'minimal-ui',
// 	// 			icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
// 	// 		},
// 	// 	},
// 	// 	'gatsby-plugin-offline',
// 	// 	{
// 	// 		resolve: `gatsby-plugin-sass`,
// 	// 		options: {
// 	// 			includePaths: [`${__dirname}/node_modules`, `${__dirname}/src/style`],
// 	// 		},
// 	// 	},
// 	// 	{
// 	// 		resolve: `gatsby-source-filesystem`,
// 	// 		options: {
// 	// 			path: `${__dirname}/src/pages`,
// 	// 			name: 'pages',
// 	// 		},
// 	// 	},
// 	// 	`gatsby-plugin-sharp`,
// 	// 	{
// 	// 		resolve: `gatsby-transformer-remark`,
// 	// 		options: {
// 	// 			plugins: [
// 	// 				{
// 	// 					resolve: `gatsby-remark-responsive-iframe`,
// 	// 					options: {
// 	// 						wrapperStyle: `margin-bottom: 1.0725rem`,
// 	// 					},
// 	// 				},
// 	// 				{
// 	// 					resolve: `gatsby-remark-images`,
// 	// 					options: {
// 	// 						maxWidth: 590,
// 	// 						linkImagesToOriginal: false,
// 	// 						sizeByPixelDensity: false,
// 	// 					},
// 	// 				},
// 	// 				`gatsby-remark-prismjs`,
// 	// 				`gatsby-remark-autolink-headers`,
// 	// 				`gatsby-remark-katex`,
// 	// 			],
// 	// 		},
// 	// 	},
// 	// 	`gatsby-transformer-sharp`,
// 	// 	{
// 	// 		resolve: `gatsby-plugin-google-analytics`,
// 	// 		options: {
// 	// 			trackingId: `UA-110074065-1`,
// 	// 		},
// 	// 	},
// 	// 	// 플러그인 종료
// 	// ],
// }
