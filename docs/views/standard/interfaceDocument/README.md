---
token: "{{ token }}"
---

# 使用 Apifox 调试接口时保持登陆态

## 在 header 中添加 token 方式
1. 首先我们需要设置 [全局变量](https://www.apifox.cn/help/app/api-manage/variables/), 暂设置为 token（可根据你的业务修改）  

![添加全局变量](/assets/img/interfaceDocument/1.png "添加全局变量")
::: tip 提示
+ 等下要编辑一个前置脚本，在脚本中需要引用该全局变量，同时也可以对此变量进行修改。
+ 脚本中使用 **pm.globals.set('token', 'xxx')** 可修改此全局变量。
:::
2. 添加 **全局参数**  
全局参数中可以设置 Header、Cookie、Query、Body 等参数，在此处设置的参数在每次接口调试时都会携带上。  
![添加全局参数](/assets/img/interfaceDocument/2.png "添加全局参数")
::: warning 注意
+ 注意此处参数 token 的值需要使用 `{{ $frontmatter.token }}` 的语法表示，接口实际运行的时候系统会将 `{{ $frontmatter.token }}` 替换为全局变量中定义的 token 值，而前置脚本中可以动态设置该 **token** 值， 所以可实现动态添加 header。
+ 所有变量都是通过双大括号的方式引用，当`不同类型变量`存在`相同名称`的变量时，系统会根据优先级决定使用哪个类型的变量。
+ 变量优先级：临时变量 > 测试数据变量 > 环境变量 > 全局变量。
:::  
3. 进行接口测试  
这里我用 [express](https://www.expressjs.com.cn/starter/installing.html)在本地 3000 端口启动了一个服务，包含两个接口。  

![express](/assets/img/interfaceDocument/3.png "express")  
``` js
// 接口 “/” 返回 json 数据
{
  msg: 'Hello world!'
}

// 接口 “/api/login” 返回一个模拟的 token
{
  token: 'zuxkij-2isj8hg-osji7899'
}
``` 

新建分组 “登录态保持”，在该分组下新建测试接口接口，请求路径为 “http://localhost:3000/”，点击运行会得到请求结果
``` js
{
  "msg": "Hello world!"
}
```
![express](/assets/img/interfaceDocument/5.png "express")
::: tip 提示
“http://localhost:3000” 这一段可不填，前提是您需要在 [环境管理](https://www.apifox.cn/help/app/api-manage/environments/#%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B) 中添加前置 URL ，最终的请求路径为 “（前置 URL）+ （接口路径）”，因为此处我们主要是进行测试，所以就填写了接口的完整请求路径。
:::

**接下来我们的目的是在请求 “/” 接口的时候，自动在请求头 header 中添加上 “/api/login” 中返回的 token，要完成这个操作就需要我们添加接口“前置操作”**

4. 添加前置操作  

**前置操作**：接口请求前的操作，我们可以进行数据库操作，添加自定义脚本和公共脚本，要完成上诉的目的，我们要使用 “公共脚本”  
::: tip 提示
自定义脚本和公共脚本里运行的都是 javascript 编写的脚本，这些脚本在接口请求前会执行，其实选择自定义脚本或者公共脚本都可以，选择公共脚本的目的只是因为保持登录态的操作是个全局操作，可能你测试的每个接口都需要，所以建一个公共脚本以实现复用。
:::

在**前置操作**中的**添加前置操作**选择**公共脚本** 

![express](/assets/img/interfaceDocument/6.png "express")

![express](/assets/img/interfaceDocument/7.png "express")  

公共脚本管理中可以新建公共脚本，查看/编辑/删除已有的公共脚本，此处可新建一个公共脚本命名为“登陆前置脚本”并填入以下内容。
``` js
// 定义发送登录接口请求方法
function sendLoginRequest() {
  // 获取环境里的 前置URL
  const baseUrl = pm.environment.get('BASE_URL');

  // 登录用户名，这里从环境变量 LOGIN_USERNAME 获取，也可以写死（但是不建议）（测试用，本地启动了 3000 端口服务并没有对此用户名和密码进行校验）
  const username = pm.environment.get('LOGIN_USERNAME');

  // 登录密码，这里从环境变量 LOGIN_PASSWORD 获取，也可以写死（但是不建议）（测试用，本地启动了 3000 端口服务并没有对此用户名和密码进行校验）
  const password = pm.environment.get('LOGIN_PASSWORD');

  // 构造一个 POST x-www-form-urlencoded 格式请求。这里需要改成你们实际登录接口的请求参数。
  const loginRequest = {
    url: baseUrl + '/api/login',
    method: 'GET',
  	// 若 body 为 x-www-form-urlencoded 格式，mode 为 'urlencoded'
    // body: {
    //     mode: 'urlencoded',
    //     urlencoded: [
    //         { key: 'account', value: username },
    //         { key: 'password', value: password }
    //     ]
    // }
    /*
    // 若 body 为 form-data 格式，mode 为 'formdata'
    body: {
      mode: 'formdata',
      formdata: [
        { key: 'account', value: username },
        { key: 'password', value: password }
      ]
    }
    */
    // 若 body 为 raw 或 json 格式，mode 为 'raw'
    body: {
      mode: 'raw',
      raw: JSON.stringify({ username: username, password: password }),
    }
        
  };

  // 发送请求。 
  // pm.sendrequest 参考文档: https://www.apifox.cn/help/app/scripts/api-references/pm-reference/#pm-sendrequest
  pm.sendRequest(loginRequest, function (err, res) {
      if (err) {
          console.log(err);
      } else {
          // 读取接口返回的 json 数据。
          // 如果你的 token 信息是存放在 cookie 的，可以使用 res.cookies.get('token') 方式获取。 
          // cookies 参考文档：https://www.apifox.cn/help/app/scripts/api-references/pm-reference/#pm-cookies
          const jsonData = res.json();
          // 将 token 写入环境变量 token
          // 在环境变量中添加 token
          // pm.environment.set('token', jsonData.token);
          // 在全局变量中添加 token，因为我们是在全局变量中添加的 token 字段 所以选择这个
          pm.globals.set('token', jsonData.token)
          // 将 accessTokenExpires 过期时间写入环境变量 ACCESS_TOKEN_EXPIRES
          // pm.environment.set('ACCESS_TOKEN_EXPIRES', jsonData.data.accessTokenExpires);
      }
  });
}

// 获取环境变量里的 token
// const accessToken = pm.environment.get('token');
// 获取全局变量里的 token
const accessToken = pm.globals.get('token');

// 获取环境变量里的 ACCESS_TOKEN_EXPIRES
// const accessTokenExpires = pm.environment.get('ACCESS_TOKEN_EXPIRES');

// 如 token 没有值，或 ACCESS_TOKEN_EXPIRES 已过期，则执行发送登录接口请求
// if (!accessToken || (accessTokenExpires && new Date(accessTokenExpires) <= new Date())) {
//     sendLoginRequest();
// }
// 如 token 没有值 则执行登录请求
if (!accessToken) {
    sendLoginRequest();
}
```
::: tip 提示
接口请求成功的返回中有这样一段代码
``` js
pm.globals.set('token', jsonData.token)
```
**此代码运行后，会修改我们设置的全局变量 token 的值，同时全局参数中 header 中的 token 值引用了该值，所以它的内容会相应的得到更新**
:::
::: tip 提示
+ “登陆前置脚本” 中也包含了 token 过期时间的限制，因为此处只是测试，所以被注释掉，您可根据自身的实际业务需求加上此条件判断。
+ [pm](https://www.apifox.cn/help/app/scripts/api-references/pm-reference/#%E5%85%A8%E5%B1%80%E6%96%B9%E6%B3%95)：pm对象包含了接口（或测试集）运行的相关信息，并且可以通过它访问需要发送的请求信息和发送后返回的结果信息。另外还可以通过它get或set环境变量和全局变量。
:::  

![全局变量](/assets/img/interfaceDocument/8.png "全局变量")  

![请求头](/assets/img/interfaceDocument/9.png "请求头")  

**在全局变量中我们可以看到，登录请求接口中返回的 token 值已经更新到了全局变量中，同时在实际接口请求中会发现，请求头中已经携带了 token 值。**





