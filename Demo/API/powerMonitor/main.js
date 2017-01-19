// in main.js

const electron = require('electron');
const {app} = electron;

app.on('ready', ()=>{
	/*
		睡眠你的电脑时触发

		其它参数有:
		suspend 系统挂起睡眠时
		resume  系统恢复工作时
		on-ac(win)       系统使用交流电时
		on-battery(win)  系统使用电池时
	*/
	electron.powerMonitor.on('suspend', ()=> {
		console.log('The system is going to sleep')
	});

	electron.powerMonitor.on('on-battery', ()=>{
		console.log('你在使用电池~')
	});

	electron.powerMonitor.on('on-ac', ()=> {
		console.log('你在使用电源~')
	})
});
