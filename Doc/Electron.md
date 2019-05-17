# Electron

[toc]

## 安装

```shell
# 局部安装
npm install electron --save-dev

# 全局安装 
npm install electron -g

```



## 启动应用

```shell
# 全局安装应用启动方式
electron .

# 局部安装方用启动方式
./node_modules/.bin/electron .

# 开发环境局部安装应用启动方式
NODE_ENV=development ./node_modules/.bin/electron .
```



## electron-packager 打包

~~在使用 electron-package 打包时,先要确认已经安装了 electron-prebuilt~~

```shell
npm install elelctron-packager --save-dev

# 不推荐使用了
npm install electron-prebuilt --save-dev
```

然后在 package.json 中添加如下命令:

```javascript
{
  "name": "helloworld",
  "version": "0.0.1",
  "main": "main.js",
  "scripts": {
    "build": "electron-packager --platform=darwin --arch=x64 --electronVersion=1.4.14 --overwrite --ignore=dev-settings --ignore=.git --prune . myWork --icon=app.icns --app-version=$npm_package_version"
  },
  "devDependencies": {
    "electron": "^1.6.2"
  }
}
```

`—platform` 平台,这里是指生成 Mac 使用程序包,

| 参数                | 说明                           |
| ----------------- | ---------------------------- |
| --arch            | 系统位数                         |
| --electronVersion | 打包使用的 electron 版本            |
| --overwrite       | 打包覆盖之前的包                     |
| --ignore          | 不打进包中的数据                     |
| --platform        | 平台,这里是指生成 Mac 使用程序包          |
| --platform        | 平台,这里是指生成 Mac 使用程序包          |
| --icon            | 应用图标                         |
| --prune           | 减小打包大小,除去 devDependencies 内容 |
| --app-version     | 你的程序当前版本                     |

[Doc API](https://github.com/electron-userland/electron-packager/blob/master/docs/api.md)


然后运行: **npm run build** 会自动生成包,这时可能会下载你指定的打包程序,因为国内网络的问题,我们自己手动下载下来,

然后走入用户的根目录,找到 .electron 文件夹(Mac上通常是隐藏的,可以用前往文件功能),把你下载好的文件包放进去就好,不用解压,之后再运行你的代码.

### 无法删除打包文件?

```shell
# 测试用命令行
rm -rf yourFilesName
```



## 淘宝镜像

对于国内开发Electron.js 我会需要科学上网。我们可以通过淘宝镜像功能，先把我们需要的文件下载下来，比如，我们想要开发 4.0.0-beta.7，我们可以打开地址: [4.0.0-beta.7](https://npm.taobao.org/mirrors/electron/4.0.0-beta.7/),然后下载: electron-v4.0.0-beta.7-darwin-x64.zip  文件。

> 对于不同系统于你想要打包的内容不同，你可能需要的不同，我这边示例的是 MacOS 上的文件。

下载完成后，我们进入自己的根目录
```bash
cd ~

# 打开electron 文件夹
cd .electron
```

然后把我们下载的文件放入，这时，你再进行以下命令时，会快很多：
```bash
yarn add electron
```

[淘宝镜像](http://npm.taobao.org/mirrors/electron/)  
[eletron安装卡在 node install.js](https://segmentfault.com/q/1010000007594059)  

## FAQ

### No path.txt

```shell
Error: ENOENT: no such file or directory, open '/Users/ZWL/Sites/Electron/workMan/node_modules/electron/path.txt'
```

出现以上错误是,可以尝试使用:

```javascript
npm install --save-dev electron-prebuilt
```

然后再运行

```shell
# 本地局部安装时,启动应用
./node_modules/.bin/electron .
```

