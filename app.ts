const { app, BrowserWindow } = require('electron')

function createWindow () {
    // Create the browser window.
    let win = new BrowserWindow({
      resizable: false,
      width: 1000,
      height: 600,
      // frame: false,
      webPreferences: {
        nodeIntegration: true
      }
    })
    win.webContents.openDevTools() 
    // and load the index.html of the app.
    win.loadURL('http://localhost:3000')
  }
  
  app.whenReady().then(createWindow)