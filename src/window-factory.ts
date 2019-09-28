import { BrowserWindow } from "electron";
import * as path from "path";

export function create(height:number, width:number, preloadPath: string) {
  let mainWindow = new BrowserWindow({
    height,
    webPreferences: {
      preload: path.join(__dirname, preloadPath),
    },
    width,
  });

  mainWindow.loadFile(path.join(__dirname, "../index.html"));

  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  return mainWindow;
}