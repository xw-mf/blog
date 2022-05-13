---
title: gitlab 教程
date: 2022-05-12
categories:
  - devops
tags:
  - CI/CD
---

# gitlab 教程

## 一. gitlab 工作流程

- 创建并克隆项目

- 创建项目某 Feature 分支

- 编写代码并提交该分支

- 推送该项目分支至远程 Gitlab 服务器

- 进行代码检查并提交 Master 主分支合并申请

- 项目领导审查代码并确认合并申请

## 二. gitlab 安装配置管理

### 1. 利用 VirtualBox 创建测试服务器

[虚拟机下载](https://www.virtualbox.org/wiki/Downloads)

### 2. 安装 gitlab 系统前预配置准备工作

- 关闭 centos 64 位系统下自带的 firewalld 防火墙，保证本地 PC 可以访问该 centos 系统下的所有端口

```js
// 关闭正在运行的防火墙
systemctl stop firewalld

// 禁用防火墙开机启动
systemctl disable firewalld
```

- 关闭 SELINUX （强制访问控制安全策略），保证该安全策略不会影响 gitlab 的正常运行，并重启系统

```js
/*
// 编辑 /etc/sysconfig/selinux 文件，并将该文件内的 SELINUX 变量值改为 disabled
vi /etc/sysconfig/selinux

// reboot 重启系统
reboot
*/
```

### 3. 安装 Omnibus Gitlab-ce package

- 安装 gitlab 组件

```js
yum -y install curl policycoreutils openssh-server openssh-clients postfix
```

- 配置 YUM 仓库

```js
curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.rpm.sh | sudo bash
```

- 启动 postfix 邮件服务（发送相关的任务通知给我们的账户邮箱）

```js
systemctl start postfix && systemctl enable postfix
```

- 安装 Gitlab-ce 社区版本

```js
yum install -y gitlan-ce
```

### 4. Omnibus Gitlab 等相关配置初始化并完成安装

- 证书创建于配置加载

- Nginx SSL 代理服务配置

- 初始化 Gitlab 相关服务并完成安装
