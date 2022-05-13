(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{408:function(t,s,n){"use strict";n.r(s);var a=n(56),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"使用-apifox-调试接口时保持登陆态"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-apifox-调试接口时保持登陆态"}},[t._v("#")]),t._v(" 使用 Apifox 调试接口时保持登陆态")]),t._v(" "),n("h2",{attrs:{id:"在-header-中添加-token-方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在-header-中添加-token-方式"}},[t._v("#")]),t._v(" 在 header 中添加 token 方式")]),t._v(" "),n("ol",[n("li",[t._v("首先我们需要设置 "),n("a",{attrs:{href:"https://www.apifox.cn/help/app/api-manage/variables/",target:"_blank",rel:"noopener noreferrer"}},[t._v("全局变量"),n("OutboundLink")],1),t._v(", 暂设置为 token（可根据你的业务修改）")])]),t._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/interfaceDocument/1.png",alt:"添加全局变量",title:"添加全局变量"}})]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),n("ul",[n("li",[t._v("等下要编辑一个前置脚本，在脚本中需要引用该全局变量，同时也可以对此变量进行修改。")]),t._v(" "),n("li",[t._v("脚本中使用 "),n("strong",[t._v("pm.globals.set('token', 'xxx')")]),t._v(" 可修改此全局变量。")])])]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[t._v("添加 "),n("strong",[t._v("全局参数")]),n("br"),t._v("\n全局参数中可以设置 Header、Cookie、Query、Body 等参数，在此处设置的参数在每次接口调试时都会携带上。"),n("br"),t._v(" "),n("img",{attrs:{src:"/assets/img/interfaceDocument/2.png",alt:"添加全局参数",title:"添加全局参数"}})])]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),n("ul",[n("li",[t._v("注意此处参数 token 的值需要使用 "),n("code",[t._v(t._s(t.$frontmatter.token))]),t._v(" 的语法表示，接口实际运行的时候系统会将 "),n("code",[t._v(t._s(t.$frontmatter.token))]),t._v(" 替换为全局变量中定义的 token 值，而前置脚本中可以动态设置该 "),n("strong",[t._v("token")]),t._v(" 值， 所以可实现动态添加 header。")]),t._v(" "),n("li",[t._v("所有变量都是通过双大括号的方式引用，当"),n("code",[t._v("不同类型变量")]),t._v("存在"),n("code",[t._v("相同名称")]),t._v("的变量时，系统会根据优先级决定使用哪个类型的变量。")]),t._v(" "),n("li",[t._v("变量优先级：临时变量 > 测试数据变量 > 环境变量 > 全局变量。")])])]),t._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[t._v("进行接口测试"),n("br"),t._v("\n这里我用 "),n("a",{attrs:{href:"https://www.expressjs.com.cn/starter/installing.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("express"),n("OutboundLink")],1),t._v("在本地 3000 端口启动了一个服务，包含两个接口。")])]),t._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/interfaceDocument/3.png",alt:"express",title:"express"}})]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接口 “/” 返回 json 数据")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("msg")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello world!'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接口 “/api/login” 返回一个模拟的 token")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("token")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zuxkij-2isj8hg-osji7899'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("新建分组 “登录态保持”，在该分组下新建测试接口接口，请求路径为 “http://localhost:3000/”，点击运行会得到请求结果")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"msg"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello world!"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:"/assets/img/interfaceDocument/5.png",alt:"express",title:"express"}})]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),n("p",[t._v("“http://localhost:3000” 这一段可不填，前提是您需要在 "),n("a",{attrs:{href:"https://www.apifox.cn/help/app/api-manage/environments/#%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("环境管理"),n("OutboundLink")],1),t._v(" 中添加前置 URL ，最终的请求路径为 “（前置 URL）+ （接口路径）”，因为此处我们主要是进行测试，所以就填写了接口的完整请求路径。")])]),t._v(" "),n("p",[n("strong",[t._v("接下来我们的目的是在请求 “/” 接口的时候，自动在请求头 header 中添加上 “/api/login” 中返回的 token，要完成这个操作就需要我们添加接口“前置操作”")])]),t._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[t._v("添加前置操作")])]),t._v(" "),n("p",[n("strong",[t._v("前置操作")]),t._v("：接口请求前的操作，我们可以进行数据库操作，添加自定义脚本和公共脚本，要完成上诉的目的，我们要使用 “公共脚本”")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),n("p",[t._v("自定义脚本和公共脚本里运行的都是 javascript 编写的脚本，这些脚本在接口请求前会执行，其实选择自定义脚本或者公共脚本都可以，选择公共脚本的目的只是因为保持登录态的操作是个全局操作，可能你测试的每个接口都需要，所以建一个公共脚本以实现复用。")])]),t._v(" "),n("p",[t._v("在"),n("strong",[t._v("前置操作")]),t._v("中的"),n("strong",[t._v("添加前置操作")]),t._v("选择"),n("strong",[t._v("公共脚本")])]),t._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/interfaceDocument/6.png",alt:"express",title:"express"}})]),t._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/interfaceDocument/7.png",alt:"express",title:"express"}})]),t._v(" "),n("p",[t._v("公共脚本管理中可以新建公共脚本，查看/编辑/删除已有的公共脚本，此处可新建一个公共脚本命名为“登陆前置脚本”并填入以下内容。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义发送登录接口请求方法")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendLoginRequest")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取环境里的 前置URL")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" baseUrl "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'BASE_URL'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 登录用户名，这里从环境变量 LOGIN_USERNAME 获取，也可以写死（但是不建议）（测试用，本地启动了 3000 端口服务并没有对此用户名和密码进行校验）")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" username "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'LOGIN_USERNAME'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 登录密码，这里从环境变量 LOGIN_PASSWORD 获取，也可以写死（但是不建议）（测试用，本地启动了 3000 端口服务并没有对此用户名和密码进行校验）")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" password "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'LOGIN_PASSWORD'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 构造一个 POST x-www-form-urlencoded 格式请求。这里需要改成你们实际登录接口的请求参数。")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" loginRequest "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("url")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" baseUrl "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/login'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("method")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  \t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 若 body 为 x-www-form-urlencoded 格式，mode 为 'urlencoded'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// body: {")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     mode: 'urlencoded',")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     urlencoded: [")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         { key: 'account', value: username },")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         { key: 'password', value: password }")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     ]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n    // 若 body 为 form-data 格式，mode 为 'formdata'\n    body: {\n      mode: 'formdata',\n      formdata: [\n        { key: 'account', value: username },\n        { key: 'password', value: password }\n      ]\n    }\n    */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 若 body 为 raw 或 json 格式，mode 为 'raw'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("body")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mode")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'raw'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("raw")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("username")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" username"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("password")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" password "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送请求。 ")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pm.sendrequest 参考文档: https://www.apifox.cn/help/app/scripts/api-references/pm-reference/#pm-sendrequest")]),t._v("\n  pm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendRequest")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("loginRequest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 读取接口返回的 json 数据。")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果你的 token 信息是存放在 cookie 的，可以使用 res.cookies.get('token') 方式获取。 ")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cookies 参考文档：https://www.apifox.cn/help/app/scripts/api-references/pm-reference/#pm-cookies")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" jsonData "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将 token 写入环境变量 token")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在环境变量中添加 token")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pm.environment.set('token', jsonData.token);")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在全局变量中添加 token，因为我们是在全局变量中添加的 token 字段 所以选择这个")]),t._v("\n          pm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globals"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" jsonData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将 accessTokenExpires 过期时间写入环境变量 ACCESS_TOKEN_EXPIRES")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pm.environment.set('ACCESS_TOKEN_EXPIRES', jsonData.data.accessTokenExpires);")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取环境变量里的 token")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// const accessToken = pm.environment.get('token');")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取全局变量里的 token")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" accessToken "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globals"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取环境变量里的 ACCESS_TOKEN_EXPIRES")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// const accessTokenExpires = pm.environment.get('ACCESS_TOKEN_EXPIRES');")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如 token 没有值，或 ACCESS_TOKEN_EXPIRES 已过期，则执行发送登录接口请求")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if (!accessToken || (accessTokenExpires && new Date(accessTokenExpires) <= new Date())) {")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     sendLoginRequest();")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如 token 没有值 则执行登录请求")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("accessToken"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendLoginRequest")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),n("p",[t._v("接口请求成功的返回中有这样一段代码")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("pm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globals"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" jsonData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[n("strong",[t._v("此代码运行后，会修改我们设置的全局变量 token 的值，同时全局参数中 header 中的 token 值引用了该值，所以它的内容会相应的得到更新")])])]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),n("ul",[n("li",[t._v("“登陆前置脚本” 中也包含了 token 过期时间的限制，因为此处只是测试，所以被注释掉，您可根据自身的实际业务需求加上此条件判断。")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.apifox.cn/help/app/scripts/api-references/pm-reference/#%E5%85%A8%E5%B1%80%E6%96%B9%E6%B3%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("pm"),n("OutboundLink")],1),t._v("：pm对象包含了接口（或测试集）运行的相关信息，并且可以通过它访问需要发送的请求信息和发送后返回的结果信息。另外还可以通过它get或set环境变量和全局变量。")])])]),t._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/interfaceDocument/8.png",alt:"全局变量",title:"全局变量"}})]),t._v(" "),n("p",[n("img",{attrs:{src:"/assets/img/interfaceDocument/9.png",alt:"请求头",title:"请求头"}})]),t._v(" "),n("p",[n("strong",[t._v("在全局变量中我们可以看到，登录请求接口中返回的 token 值已经更新到了全局变量中，同时在实际接口请求中会发现，请求头中已经携带了 token 值。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);