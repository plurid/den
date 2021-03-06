import {
    app,
    // BrowserView,
    BrowserWindow,
    // systemPreferences,
} from 'electron';



// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win: any;

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 1000,
        height: 800,
        icon: './assets/meta/den.png',
        minHeight: 500,
        minWidth: 300,
        title: 'den',
        titleBarStyle: 'hiddenInset',
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true,
        },
    });
    // systemPreferences.isDarkMode();

    // and load the index.html of the app.
    win.loadFile('index.html');

    // Open the DevTools.
    // win.webContents.openDevTools();

    // const view = new BrowserView({
    //     webPreferences: {
    //         nodeIntegration: false,
    //     },
    // });
    // win.setBrowserView(view);
    // view.setBounds({ x: 0, y: 38, width: 1440, height: 860 });
    // view.webContents.loadURL('https://electronjs.org');


    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
});


app.allowRendererProcessReuse = true;
