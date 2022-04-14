# Github actions 实现持续集成

github actions 支持 push 驱动，会启动一个小虚拟机，帮助我们跑 build 和 scp 的过程

### 添加工作流 workflow

在我们的每个 github 项目里都有一个 actions 选项，选择 actions 选项，然后点击 New workflow

![New workflow](/assets/img/githubActions/1.png 'New workflow')

这里面为我们内置了很多工作流，此时我们要自己配置一个工作流，点击 set up a workflow yourself

![New workflow](/assets/img/githubActions/2.png 'New workflow')

然后就可以编写 yml 配置文件

### 编写自动化配置文件

```js
# This is a basic workflow to help you get started with Actions

# 工作流的名称
name: deploy-website

# Controls when the workflow will run
# 控制什么时候会启动工作流
on:
  # Triggers the workflow on push or pull request events but only for the master branch
  # 将代码 push 到 master 分支时触发
  push:
    branches: [master]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
# 启动工作流时执行的任务
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    # 执行在哪个操作系统上
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    # 具体的每一个任务的步骤，一般要修改的地方就是 steps 中的内容
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      # checkout 我们当前的代码 每个步骤执行的命令 由 uses 指定
      - uses: actions/checkout@v3
      # 每个步骤都有一个名字 由 name 指定
      - name: install nodejs
        uses: actions/setup-node@v3.1.1
        # with 具体的命令
        with:
          # 期望的 node 版本是 14.x
          node-version: '14.X'
      - name: install deps
        # 安装项目依赖
        run: npm install
      - name: build app
        # 打包项目
        run: npm run docs:build
      # 部署项目到执行服务器
      - name: copy dist file with scp
        uses: appleboy/scp-action@master
        with:
          host: ${{ secrets.REMOTE_HOST }}
          username: ${{ secrets.REMOTE_USER }}
          password: ${{ secrets.REMOTE_PASS }}
          source: 'docs/'
          target: '/usr/local/nginx/html/blog'

```

环境变量如 secrets.REMOTE_HOST 可以在 github 中配置

![secrets](/assets/img/githubActions/3.png 'secrets')

::: tip 提示

- host：服务器的 ip
- username：服务器用户名，一般为 root
- password：服务器登录密码
- source：要上传到服务器的目录
- target：上传到服务器的指定目录
- 此次用的是 vuepress 搭建的博客项目，"docs/" 指的是将 docs 文件夹上传到服务器上的 '/usr/local/nginx/html/blog' 目录下
  :::

### 测试

1. 修改前首页：

![home](/assets/img/githubActions/4.png 'home')

2. 修改首页 README.md 文件中的 heroText 字段为 技术文档合集 123，然后将代码 push 到远程仓库的 master 分支
3. push 完成后打开 github 中的项目，点击 actions，然后会发现工作流中有工作流正在运行，可以点击进去看具体的每一步

![home](/assets/img/githubActions/5.png 'home')
![home](/assets/img/githubActions/6.png 'home')

4. 等待工作流完成后，打开项目发现首页被修改了
