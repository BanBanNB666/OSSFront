<template>
    <div id="holder">
        拖动文件到这里
    </div>

    <button @click="showModalHandler">父子模态窗口</button>

    <div class="download-container sureDrag">
        <button @click="openFileHandler">打开文件目录</button>
    </div>

    <div class="download-container sureDrag">
        <button @click="creatdelete">点击传送文件</button>
    </div>

    <div class="download-container sureDrag">
        <button @click="runjar">点击运行jar</button>
    </div>
</template>
  

<script setup lang="ts">
import { ipcRenderer } from 'electron'


//模态窗口
const showModalHandler = () => {
    ipcRenderer.send("child-down-modal");
}

const openFileHandler = () => {
    ipcRenderer.send("openFileWin");
}

const creatdelete = () => {
    ipcRenderer.send("creat-delete-files")
}

const runjar =() => {
    ipcRenderer.send("runjar")
}

// ipcRenderer.on('load', (_, message) => {
//     console.log(message, 123);
// })

//这一串是拖动
document.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log(e.dataTransfer?.files)

    // for (const f of e.dataTransfer?.files) {
    //   console.log('File(s) you dragged here: ', f.path)
    // }
});
document.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
});

</script>
<style>
.form-control {
    padding-right: 30px;
}

.form-control+.glyphicon {
    position: absolute;
    right: 0;
    padding: 8px 27px;
}
</style>
