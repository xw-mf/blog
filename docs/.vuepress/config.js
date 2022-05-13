module.exports = {
	title: '莫凡莫烦',
	// description: '公司基建博客平台',
	theme: 'reco',
	themeConfig: {
		logo: '/assets/img/logo.jpeg',
		type: 'blog',
		sidebar: 'auto',
		authorAvatar: '/assets/img/logo.jpeg',
		blogConfig: {
			category: {
				location: 2, // 在导航栏菜单中所占的位置，默认2
				text: '分类', // 默认文案 “分类”
			},
			tag: {
				location: 3, // 在导航栏菜单中所占的位置，默认3
				text: '标签', // 默认文案 “标签”
			},
		},
		nav: [
			{ text: '首页', link: '/' },
			{ text: '时间线', link: '/timeline/', icon: 'reco-date' },
			// 	{
			// 		text: '前端',
			// 		ariaLabel: '前端',
			// 		items: [
			// 			{
			// 				text: 'github-actions',
			// 				link: '/views/front/github/github-actions/',
			// 			},
			// 		],
			// 	},
			// 	{
			// 		text: '后端',
			// 		ariaLabel: '后端',
			// 		items: [
			// 			{ text: 'centos 常用命令', link: '/views/end/centosOrder/' },
			// 			{
			// 				text: 'virtualBox 安装 centos系统',
			// 				link: '/views/end/virtualBoxInstallCentos/',
			// 			},
			// 		],
			// 	},
			// 	{
			// 		text: '运维',
			// 		ariaLabel: '运维',
			// 		items: [
			// 			{ text: 'centos gitlab CI/CD', link: '/views/devops/centosCICD/' },
			// 			{ text: 'gitlab', link: '/views/devops/gitlab/' },
			// 		],
			// 	},
			// 	{
			// 		text: '约定规范',
			// 		ariaLabel: '约定规范',
			// 		items: [
			// 			{ text: '接口文档', link: '/views/standard/interfaceDocument/' },
			// 			{ text: 'restful API', link: '/views/standard/restfulApi/' },
			// 			{
			// 				text: '前后端约定规范',
			// 				link: '/views/standard/agreedSpecification/',
			// 			},
			// 		],
			// 	},
		],
	},
}
