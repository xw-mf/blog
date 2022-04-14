module.exports = {
	title: '技术文档合集',
	description: '公司基建博客平台',
	themeConfig: {
		logo: '/assets/img/logo.jpeg',
		nav: [
			{ text: '指南', link: '/' },
			{
				text: '前端',
				ariaLabel: '前端',
				items: [
					{
						text: 'github-actions',
						link: '/views/front/github/github-actions/',
					},
				],
			},
			{ text: '后端', link: '/views/end/' },
			{
				text: '约定规范',
				ariaLabel: '约定规范',
				items: [
					{ text: '接口文档', link: '/views/standard/interfaceDocument/' },
					{ text: 'restful API', link: '/views/standard/restfulApi/' },
					{
						text: '前后端约定规范',
						link: '/views/standard/agreedSpecification/',
					},
				],
			},
		],
	},
}
