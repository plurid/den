// #region imports
    // #region libraries
    import {
        app,
        screen,
        BrowserWindow,
    } from 'electron';
    // #endregion libraries
// #endregion imports



// #region module
let window: BrowserWindow | null = null;


const createWindow = () => {
    const mainScreen = screen.getPrimaryDisplay();

    window = new BrowserWindow({
        width: mainScreen.size.width,
        height: mainScreen.size.height,
        icon: './assets/meta/den.png',
        minHeight: 500,
        minWidth: 300,
        title: 'den',
        titleBarStyle: 'hiddenInset',
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true,
            nativeWindowOpen: true,
        },
        show: false,
        backgroundColor: '#000000',
    });

    window.loadFile('index.html');

    window.once('ready-to-show', () => {
        if (!window) {
            return;
        }

        window.show();
    })

    window.on('closed', () => {
        window = null;
    });
}


app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (window === null) {
        createWindow();
    }
});
// #endregion module
