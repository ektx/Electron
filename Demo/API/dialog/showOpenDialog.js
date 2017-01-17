const electron = require('electron');
// 控制应用生命周期模块
const {app, dialog} = electron;


// 创建原生浏览器窗口的模块
const {BrowserWindow} = electron;

let mainWindow;

function createWindow() {
	mainWindow = new  BrowserWindow({width: 800, height: 600});

	mainWindow.loadURL(`file://${__dirname}/index.html`);

	mainWindow.webContents.openDevTools();

	mainWindow.on('closed', ()=> {
		mainWindow = null;
	});

	
	console.log(dialog.showOpenDialog({
		properties: ['openFile', 'openDirectory', 'multiSelections']
	}))
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
