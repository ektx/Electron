// in main.js

// 阻止系统进入休眠
const {powerSaveBlocker} = require('electron');

const id = powerSaveBlocker.start('prevent-display-sleep')
console.log( powerSaveBlocker.isStarted(id), id )

powerSaveBlocker.stop(id)
