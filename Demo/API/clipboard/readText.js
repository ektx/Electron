const electron = require('electron');

const path = require('path');
// 控制应用生命周期模块
const {app, clipboard} = electron;


// 创建原生浏览器窗口的模块
const {BrowserWindow} = electron;

let mainWindow;

function createWindow() {
	// 给剪贴板添加以下内容
	clipboard.writeText('hello world!', 'selection');
	console.log( clipboard.readText('selection') );

	clipboard.writeText('can you see?', 'selection2');
	console.log( clipboard.readText('selection2') );

	app.quit();

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
