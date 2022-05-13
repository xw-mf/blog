---
title: virtualBox 安装 centos7 系统
date: 2022-05-12
categories:
  - end
tags:
  - centos
---

# virtualBox 安装 centos7 系统

## 一： 新建虚拟机

- 打开 virtualBox 并点击新建，类型选择 Linux，版本选择如图，点击继续

![新建虚拟机](/assets/img/virtualBoxInstallCentos/1.png '新建虚拟机')

- 分配内存大小，按自己需求设定，点击继续

![分配内存](/assets/img/virtualBoxInstallCentos/2.png '分配内存')

- 虚拟硬盘，选择如图，现在创建虚拟硬盘 -> 选择虚拟硬盘文件类型 -> 选择虚拟硬盘文件类型 -> 动态分配 -> 文件位置和大小

![虚拟硬盘](/assets/img/virtualBoxInstallCentos/3.png '虚拟硬盘')
![硬盘类型](/assets/img/virtualBoxInstallCentos/4.png '硬盘类型')
![动态分配](/assets/img/virtualBoxInstallCentos/5.png '动态分配')
![硬盘大小](/assets/img/virtualBoxInstallCentos/6.png '硬盘大小')

- 创建好的虚拟机如图

![虚拟机](/assets/img/virtualBoxInstallCentos/7.png '虚拟机')

## 二： 安装系统

- 下载系统：[centos7 系统下载](http://isoredirect.centos.org/centos/7/isos/x86_64/)

![阿里云镜像](/assets/img/virtualBoxInstallCentos/8.png '阿里云镜像')
![镜像文件](/assets/img/virtualBoxInstallCentos/9.png '镜像文件')

- 安装系统，如图选择下好的 centos7 系统，点击 ok 配置好系统镜像文件

![选择系统](/assets/img/virtualBoxInstallCentos/10.png '选择系统')
![选择系统文件](/assets/img/virtualBoxInstallCentos/11.png '选择系统文件')
![选择系统文件安装](/assets/img/virtualBoxInstallCentos/12.png '选择系统文件安装')

- 配置玩镜像文件后，双击左侧的虚拟机安装系统，在出来的界面中选择 **Install CentOS 7** 按 enter 继续下一步，稍等一会将会进入系统设置界面

![双击安装系统](/assets/img/virtualBoxInstallCentos/13.png '双击安装系统')
![Install CentOS 7](/assets/img/virtualBoxInstallCentos/14.png 'Install CentOS 7')

- 设置系统语言，这里我们选择中文 -> 简体中文，点击继续

![选择系统语言](/assets/img/virtualBoxInstallCentos/15.png '选择系统语言')

- 选择安装位置后点击开始安装

![选择安装位置](/assets/img/virtualBoxInstallCentos/17.png '选择安装位置')
![选择安装位置](/assets/img/virtualBoxInstallCentos/16.png '选择安装位置')

- 设置 root 密码

![点击设置root密码](/assets/img/virtualBoxInstallCentos/18.png '点击设置root密码')
![设置root密码](/assets/img/virtualBoxInstallCentos/19.png '设置root密码')

- 等待安装完成，安装完成后点击重启

![安装完成](/assets/img/virtualBoxInstallCentos/20.png '安装完成')

- 重启完成后，输入账户 root，然后输入之前设置的 root 密码即可进入 CentOS 7 命令行交互页面，至此系统装完

![输入 root 密码](/assets/img/virtualBoxInstallCentos/21.png '输入 root 密码')
![进入系统](/assets/img/virtualBoxInstallCentos/22.png '进入系统')
