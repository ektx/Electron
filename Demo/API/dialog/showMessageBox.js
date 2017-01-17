const electron = require('electron');

const path = require('path');
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

	dialog.showMessageBox({
		/*
			type options
			none
			info 默认会自动选中 buttons 第一个参考
			error 默认会自动选中 buttons 第一个参考
			question 默认会自动选中 buttons 第一个参考
			warning 默认会自动选中 buttons 第一个参考
		*/
		type: 'warning',
		title: '导出',
		/*
			filters options:
			Images 可选 ['jpg'|'png'|'git']
			Movies 可选 ['mkv' | 'aiv'|'mp4']
			Custom File Type 自定义可选扩展名
			All Files 可以使用 *,默认为此

			在 showSaveDialog 中,filter功能是规定保存文件扩展名(不可更换,如果不要请删除)
		*/
		buttons: ['OK','No','Let\'s think..'],
		// 类似标题
		message: 'Hello! Can you see ?',
		// 详细说明
		detail: 'I dont\' know why i was here.',
		// 目前不可用(报错,未解决)
		// icon: path.join(__dirname, '/img/app.icns'),
		// Mac 上目前没有显现
		cancelId: 999,
	}, function(response) {
		console.log(`end ${response}`)
	})
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
