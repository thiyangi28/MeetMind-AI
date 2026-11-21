const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("meetmind", {
    getAppVersion: () => ipcRenderer.invoke("get-app-version")
});