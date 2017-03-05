const electron = require('electron');
const {app, BrowserWindow} = electron;

function createWindow() {

	let win = new BrowserWindow({
		width: 800,
		height: 600,
		frame: false,
		vibrancy: 'dark'
	})
	
}

app.on('ready', createWindow);