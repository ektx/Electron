const electron = require('electron');

const path = require('path');
// 控制应用生命周期模块
const {app, dialog} = electron;


// 创建原生浏览器窗口的模块
const {BrowserWindow} = electron;

let mainWindow;

function createWindow() {

	let id;

	// dock 弹跳一次
	// app.dock.bounce()

	// dock 弹跳一次
	// id = app.dock.bounce('informational')

	// dock 弹跳
	id = app.dock.bounce('critical')

	console.log( id )	
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
