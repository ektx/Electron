const { app, BrowserWindow } = require('electron');

function createWindow() {

	let win = new BrowserWindow();

	win.webContents.session.on('will-download', (event, item, webContents) => {
		item.setSavePath('/tmp/save.pdf');

		item.on('updated', (event, state) => {
			if (state === 'interrupted') {
				console.log('Download is interrupted but can be resumed')
			} else if (state === 'progressing') {
				if (item.isPaused()) {
					console.log('Download is paused')
				} else {
					console.log(`Received bytes: ${item.getReceivedBytes()}`)
				}
			}
		})

		item.once('done', (event, state)=> {
			if (state === 'completed') {
				console.log('Download successfully')
			} else {
				console.log(`Download faild: ${state}`)
			}
		})
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
