---
title: centos 常用命令
date: 2022-05-12
categories:
  - end
tags:
  - centos
---

# centos 常用命令

## 一. 复制

### 1. 复制文件夹到指定目录

命令：cp 需要复制的文件夹 -a 复制到指定目录的位置路径  
-a 参数： 表示复制所有的目录

```js
// 复制 directory文件夹下的所有东西到 home文件夹下
cp directory/ -a /home/
```

### 2. 复制单个文件到指定目录

命令：cp 需要复制的文件 复制到指定目录的位置路径  
-a 参数： 表示复制所有的目录

```js
// 复制 xxx文件 到 home文件夹下
cp xxx /home
```

## 二. 删除

### 1. 删除文件夹命令

rm /home/test

### 2. rm 带参数删除

- 参数 -r 是递归的删除参数表中的目录及其子目录  
  目录将被清空并且删除。当删除目录包含的具有写保护的文件时用户通常是被提示的

  rm -r /home/test

- -f 是不提示用户，删除目录下的所有文件。需要注意检查路径

  rm -rf /home/test

- rm -ir /home/test

  -i 是交互模式。使用这个选项，rm 命令在删除任何文件前提示用户确认
