import { app, BrowserWindow, ipcMain } from "electron";
import { create as createWindow} from './window-factory';

let screen: Electron.BrowserWindow;
let controller: Electron.BrowserWindow;

function createApp() {
  controller = createWindow(500, 500, 'controller/index.js');
  screen = createWindow(300, 300, 'screen/index.js');
}

ipcMain.on('screen', (event, data) => {
  console.log(event.sender)
  console.log(data);
  screen.webContents.send('screen', data);
})

ipcMain.on('controller', (event, data) => {
  console.log(event.sender)
  console.log(data);
  controller.webContents.send('controller', data);
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createApp);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it"s common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (controller === null) {
    createApp();
  }
});

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
