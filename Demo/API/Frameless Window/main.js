const electron = require('electron');

// 控制应用生命周期模块
const {app} = electron;


// 创建原生浏览器窗口的模块
const {BrowserWindow} = electron;

let mainWindow;

function createWindow() {
	
	// mainWindow = new  BrowserWindow({width: 720, height: 470});
	
	// 隐藏标题栏(包含默认的关闭最小化等按钮) 方案一
	// mainWindow = new  BrowserWindow({width: 720, height: 470, frame: false});

	// 隐藏标题栏 方案二
	// mainWindow = new BrowserWindow({titleBarStyle:'hidden'})

	// 生成一个透明无边框窗口
	mainWindow = new BrowserWindow({transparent: true, frame: false, titleBarStyle:'hidden'})

	mainWindow.loadURL(`file://${__dirname}/index.html`);

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
