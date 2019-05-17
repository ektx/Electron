# Shell

[toc]

## 打开文件夹
支持在 Win MacOS Linux | 进程 Both

单击按钮打开指定的文件夹。

```html
<template>
    <section class="database-view">
        <el-button size="mini" @click="open">打开</el-button>
    </section>
</template>

<script>
import os from 'os'
import { shell } from 'electron'

export default {
    data () {
        return {
            path: os.homedir() + '/mock-x/db/'
        }
    },
    methods: {
        open () {
            shell.showItemInFolder(this.path)
        }
    }
}
</script>
```

## 参考
[使用 Electron 打开外部链接或文件管理器](https://segmentfault.com/a/1190000008530047)  