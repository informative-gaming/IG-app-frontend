const { app, BrowserWindow, screen } = require("electron")

let win = null;
let loadingWindow = null;

app.whenReady().then(() => {
    // Create the loading window
    loadingWindow = new BrowserWindow({
        width: 500,
        height: 300,
        transparent: true,
        frame: false,
        alwaysOnTop: true,
        resizable: false,
        // devTools: false,
        // icon: __dirname + './project files/icon/finished/icon.png'
    });
    loadingWindow.loadFile('./app/loading/index.html');
    loadingWindow.center();

    // Create the main window
    const primaryDisplay = screen.getPrimaryDisplay()
    const { width, height } = primaryDisplay.size
    if (width == 1920 && height == 1080) {
        createMainWindow(1280, 720)
    } else if (width == 1280 && height == 720) {
        createMainWindow(854, 480)
    } else {
        let widthDevided = width / 1.5;
        let heighDevided = height / 1.5;
        createMainWindow(widthDevided, heighDevided)
    }

    // Close the loading window and show the main window
    setTimeout(function() {
        loadingWindow.close();
        win.show();
    }, 3000);
});

function createMainWindow(winWidth, winHeight) {
    win = new BrowserWindow({
        width: winWidth,
        height: winHeight,
        show: false,
        resizable: true,
        // icon: __dirname + './project files/icon/finished/icon.png',
        webPreferences: {
            nodeIntegration: true,
            devTools: false
        }
    })
    win.loadFile('./app/main/index.html')
    win.center();
}