const { app, BrowserWindow } = require('electron')

function createWindow () {
    // Create the browser window.
    let win = new BrowserWindow({
      width: 300,
      height: 300,
      frame: false,
      webPreferences: {
        nodeIntegration: true
      }
    })
  
    // and load the index.html of the app.
    win.loadURL('http://localhost:3000')
  }
  
  app.whenReady().then(createWindow)