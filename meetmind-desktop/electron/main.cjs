const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

function creatWindow(){
    const win = new BrowserWindow({
        width: 1400,
        height: 900,
        minWidth: 1100,
        minHeight: 700,
        title: "MeetMind AI",
        backcgroundColor : "#10131C",
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            contextIsolation: true,
            nodeIntegration: false
        }
    });

if(process.env.VITE_DEV_SERVER_URL){
    win.loadURL(process.env.VITE_DEV_SERVER_URL);

}else{
    win.loadFile(path.join(__dirname, "../dist/index.html"));

}
}
ipcMain.handle("get-app-version", () => app.getVersion());

app.whenReady().then(creatWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});