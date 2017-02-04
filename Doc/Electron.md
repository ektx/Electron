# Electron

## 安装

```shell
# 局部安装
npm install electron --save-dev

# 全局安装 
npm install electron -g

# 1.3.0 之前安装
npm install electron-prebuilt --save-dev
```



## 启动应用

```shell
# 全局安装应用启动方式
electron .

# 局部安装说用启动方式
./node_modules/.bin/electron .
```



## electron-packager 打包

在使用 electron-package 打包时,先要确认已经安装了 electron-prebuilt

```shell
npm install elelctron-packager --save-dev

npm install electron-prebuilt --save-dev
```



然后在 package.json 中添加如下命令:

```javascript
{
  "name": "helloworld",
  "version": "0.0.1",
  "main": "main.js",
  "scripts": {
    "build": "electron-packager --platform=darwin --arch=x64 --version=1.4.14 --overwrite --ignore=dev-settings --ignore=.git --prune . myWork --icon=app.icns --app-version=$npm_package_version"
  },
  "devDependencies": {
    "electron-packager": "^7.3.0",
    "electron-prebuilt": "^1.2.7"
  }
}
```

`—platform` 平台,这里是指生成 Mac 使用程序包,

| 参数            | 说明                           |
| ------------- | ---------------------------- |
| --arch        | 系统位数                         |
| --version     | 打包使用的 electron 版本            |
| --overwrite   | 打包覆盖之前的包                     |
| --ignore      | 不打进包中的数据                     |
| --platform    | 平台,这里是指生成 Mac 使用程序包          |
| --platform    | 平台,这里是指生成 Mac 使用程序包          |
| --icon        | 应用图标                         |
| --prune       | 减小打包大小,除去 devDependencies 内容 |
| --app-version | 你的程序当前版本                     |




然后运行: **npm run build** 会自动生成包,这时可能会下载你指定的打包程序,因为国内网络的问题,我们自己手动下载下来,

然后走入用户的根目录,找到 .electron 文件夹(Mac上通常是隐藏的,可以用前往文件功能),把你下载好的文件包放进去就好,不用解压,之后再运行你的代码.

### 无法删除打包文件?

```shell
# 测试用命令行
rm -rf yourFilesName
```



### 淘宝镜像

对于这个不用多说,科学上网!

http://npm.taobao.org/mirrors/electron/



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

