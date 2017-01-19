// in main.js

// browser 是主进程 renderer 渲染层
// https://github.com/electron/electron/blob/master/docs-translations/zh-CN/api/process.md
console.log(`process in: ${process.type}`)
console.log(`Electron version: ${process.versions.electron}`)
console.log(`Chrome Version: ${process.versions.chrome}`)
console.log(`ResourcesPath: ${process.resourcesPath}`);

let myComputer = process.getProcessMemoryInfo();
console.log(`工作内存: ${(myComputer.workingSetSize/1024).toFixed(2)}MB`)
console.log(`压缩后内存: ${(myComputer.peakWorkingSetSize/1024).toFixed(2)}MB`)
console.log(`不被其他进程共享的内存量: ${(myComputer.privateBytes/1024).toFixed(2)}MB`)
console.log(`进程之间共享的内存量: ${(myComputer.sharedBytes/1024).toFixed(2)}MB`)