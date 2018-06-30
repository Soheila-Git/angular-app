const { app, BrowserWindow } = require('electron');

function createWindow() {
    let win;
    win = new BrowserWindow({});
    win.loadURL(`file://${__dirname}/dist/angular-app/index.html`);
}

// Create window on electron initialization
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', app.quit);