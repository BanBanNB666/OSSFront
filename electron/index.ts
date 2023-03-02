import { app, BrowserWindow, ipcMain, dialog } from 'electron'
import fs from 'fs'
import path from 'path'
let win: BrowserWindow;

const createWindow = () => {
    win = new BrowserWindow({
        //
        webPreferences: {
            devTools: true,
            contextIsolation: false,
            nodeIntegration:true
            //允许html页面上的javascipt代码访问nodejs 环境api代码的能力（与node集成的意思）
        }
    })

    win.loadURL(`http://${process.env['VITE_DEV_SERVER_HOST']}:${process.env['VITE_DEV_SERVER_PORT']}`)

    win.webContents.openDevTools()

    //主线程主动给渲染线程信息
    setTimeout(() => {
        win?.webContents.send('load', { message: "初始化完成了" })
    }, 3000)
}
app.whenReady().then(createWindow)

//这一连串是模态窗口的
let childDownModal;
ipcMain.on('child-down-modal', () => {
    childDownModal = new BrowserWindow({
        parent: win,
        modal: true,
        show: false,
        width: 300,
        height: 300,
        resizable: false,
        backgroundColor: "#fff",

        hasShadow: true,
        closable: true,
        webPreferences: {
            devTools: false
        }
    })
    childDownModal.once('ready-to-show', () => {
        childDownModal.show();
    })
    childDownModal.loadURL(`http://${process.env['VITE_DEV_SERVER_HOST']}:${process.env['VITE_DEV_SERVER_PORT']}` + '#/downloadModal')
})
ipcMain.on('close-down-modal', () => {
    childDownModal.hide();
})

//这一串是获取文件路径，文件大小，图片预览
ipcMain.on('openFileWin', () => {
    dialog.showOpenDialog(win, {
        properties: ['openFile']
    }).then(result => {
        if (result.canceled) {
            console.log('Dialog was canceled')
        } else {
            const file = result.filePaths[0]
            win.loadURL(`file://${file}`)
            console.log(result)
            fs.stat(file, (err, statdata) => {
                console.log(statdata.size, path.basename(file), path.extname(file))
            })

        }
    }).catch(err => {
        console.log(err)
    })
})

//这一串是写文件到固定文件夹下
ipcMain.on('creat-delete-files', () => {
    let content = "Some text to save into the file";
    let fileName = "F:\\programmes\\OSS\\ossface - 副本\\rubbish\\hello.txt"
    
    fs.writeFile(fileName, content, (err) => {
        if (err) {
            console.log("An error ocurred creating the file " + err.message)
        }
        console.log("The file has been succesfully saved");
    })
})


//这一串是运行jar
ipcMain.on("runjar",() => {
    const { spawn } = require('child_process');
    const child = spawn('java', ['-jar', `F:\\programmes\\OSS\\ossface - 副本\\jars\\test-1.0-SNAPSHOT.jar`,1,2]);
    child.stdout.on('data', (data) => {
        console.log(`child stdout: ${data}`)
    });
})

