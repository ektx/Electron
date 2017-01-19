const electron = require('electron');

// 控制应用生命周期模块
const {app, BrowserWindow, ipcMain} = electron;

ipcMain.on('send-message', (event, arg)=> {
	console.log(`异步信息为: ${arg}`);
	event.sender.send('asynchronous-reply', `异步信息为: ${arg}`)
});

ipcMain.on('sendSync-message', (event, arg)=> {
	console.log(`同步得到信息为: ${arg}`);
	event.returnValue = `同步得到信息为: ${arg}`
})

function createWindow() {

	mainWindow = new  BrowserWindow({width: 220, height: 470});

	mainWindow.loadURL(`file://${__dirname}/index.html`);

	mainWindow.webContents.openDevTools();

	mainWindow.on('closed', ()=> {
		mainWindow = null;
	});
	
}

app.on('ready', createWindow);
