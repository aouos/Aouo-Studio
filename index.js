const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let aexcel = {};

function createWindow() {
  aexcel = new BrowserWindow({
    width: 1080,
    height: 720,
    backgroundColor: '#ffffff',
    // frame: false,
    icon: 'src/assets/logo.png',
    webPreferences: {
      webviewTag: true,
      javascript: true,
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })
  // Entrance Page
  aexcel.loadFile('dist/index.html');
  aexcel.setMenu(null);
  // DevTools
  // aexcel.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();
})

// Window event
ipcMain.on('miniwin', e => {
  aexcel.minimize();
})

ipcMain.on('closewin', e => {
  aexcel.close();
})

ipcMain.on('maxiwin', e => {
  aexcel.maximize();
})

ipcMain.on('restore', e => {
  aexcel.restore();
})