# webview

[官网](http://electron.atom.io/docs/api/web-view-tag/)

[Github中文](https://github.com/electron/electron/blob/master/docs-translations/zh-CN/api/web-view-tag.md)

## Debugger

```html
<!-- html -->
<webview id="debugger">...</webview>
```

```js
// debugger webview
const webview = document.getElementById("debugger");
webview.addEventListener("dom-ready", function(){ 
    webview.openDevTools(); 
});
```

