const electron = require('electron');

const path = require('path');
// 控制应用生命周期模块
const {app, dialog} = electron;


// 创建原生浏览器窗口的模块
const {BrowserWindow} = electron;

let mainWindow;

function createWindow() {

	console.log('临时文件夹:', app.getPath('temp') )
	console.log('储存你应用程序设置文件的文件夹:', app.getPath('userData') )
	console.log('当前的可执行文件:', app.getPath('exe') )
	console.log('libchromiumcontent 库:', app.getPath('module') )
	console.log('桌面:', app.getPath('desktop') )
	console.log('文档:', app.getPath('documents') )
	console.log('下载:', app.getPath('downloads') )
	console.log('音乐:', app.getPath('music') )
	console.log('图片:', app.getPath('pictures') )
	console.log('视频:', app.getPath('videos') )
}

app.on('ready', createWindow);

app.on('window-all-closed', ()=> {
	if (process.flatform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow();
	}
});
