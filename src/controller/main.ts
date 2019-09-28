import './controller';
import { docReady } from "../docReady";
import { ipcRenderer } from "electron";

console.log('controller')

docReady(() => {
  setTimeout(() => {
    ipcRenderer.send('screen', 'im your controller')
  }, 2000);
  ipcRenderer.on('controller', (_,data) => console.log(data))
})