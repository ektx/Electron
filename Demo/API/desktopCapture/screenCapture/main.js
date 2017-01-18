const electron = require('electron');

const path = require('path');
// 控制应用生命周期模块
const {app, clipboard} = electron;


// 创建原生浏览器窗口的模块
const {BrowserWindow} = electron;

let mainWindow;

function createWindow() {
	
	mainWindow = new  BrowserWindow({width: 720, height: 470});

	mainWindow.loadURL(`file://${__dirname}/screenCapture.html`);

	mainWindow.webContents.openDevTools();

	mainWindow.on('closed', ()=> {
		mainWindow = null;
	});

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
