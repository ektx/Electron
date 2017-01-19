const electron = require('electron');

// 控制应用生命周期模块
const {app, BrowserWindow, globalShortcut} = electron;

function registerKey () {
	console.log('s')
	let ret = globalShortcut.register('CommandOrControl+X', ()=> {
		console.log('CommandOrControl+X is pressed!')
	});

	if (!ret) {
		console.log('Registion failed!')
	} else {
		console.log('Registion Succeed!')
	}

	console.log( globalShortcut.isRegistered('CommandOrControl+X') )
}

function createWindow() {

	mainWindow = new  BrowserWindow({width: 720, height: 470});

	mainWindow.loadURL(`file://${__dirname}/index.html`);

	mainWindow.webContents.openDevTools();

	mainWindow.on('closed', ()=> {
		mainWindow = null;
	});
	
}

app.on('ready', createWindow);

// 当主窗口获得焦点时,注册自定义快捷键
app.on('browser-window-focus', registerKey);

// 当主窗口失去焦点时,取消自定义快捷键
app.on('browser-window-blur', ()=> {
	globalShortcut.unregister('CommandOrControl+X');

	globalShortcut.unregisterAll()
})

