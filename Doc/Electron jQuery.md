# Electron jQuery

在electron中引用jq的方法:

## 官方推荐:

```html
	<script>
	// 移交 node require ,兼容JQ
	window.nodeRequire = require;
	delete window.require;
	delete window.exports;
	delete window.module;	
	</script>

	<script src="contents/js/jquery-3.1.0.min.js"></script>

```

## 野生技术方案:

```html
<!-- Insert this line above script imports  -->
<script>if (typeof module === 'object') {window.module = module; module = undefined;}</script>

<!-- normal script imports etc  -->
<script src="contents/js/jquery-3.1.0.min.js"></script>

<!-- Insert this line after script imports -->
<script>if (window.module) module = window.module;</script>
```

