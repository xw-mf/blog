---
title: centos 实现 gitlab CI/CD 自动化部署
date: 2022-05-09
categories:
  - devops
tags:
  - CI/CD
---

# centos 实现 gitlab CI/CD 自动化部署

## 一. 安装 runner

### 1. 下载 runner

```js
// arch 的值为 amd64 arm arm64
curl -LJO "https://gitlab-runner-downloads.s3.amazonaws.com/latest/deb/gitlab-runner_${arch}.deb"

// centos 选择此安装方式 用 rpm 包，arch 换成 amd64
curl -LJO "https://gitlab-runner-downloads.s3.amazonaws.com/latest/rpm/gitlab-runner_${arch}.rpm"
```

### 2. 安装 runner

```js
rpm -i gitlab-runner_amd64.rpm
```

::: warning 注意
常见报错：错误：依赖检测失败：git 被 gitlab-runner-14.10.1-1.x86_64 需要  
解决办法：安装 git ，运行以下命令

```js
sudo yum install git
```

:::

### 3. 注册 runner

```js
// url 和 token 填写 gitlab 中自己对应的项目 url 和 token
sudo gitlab-runner register \
  --non-interactive \
  --url "http://27177x3g76.zicp.vip:44813/" \
  --registration-token "XqzG1VSu-8najgv2-tzU" \
  --executor "shell" \
  --docker-image alpine:latest \
  --description "shell-runner" \
  --tag-list "lh,0702" \
  --run-untagged="true" \
  --locked="false" \
  --access-level="not_protected"

```
