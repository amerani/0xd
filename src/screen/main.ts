import './screen';
import { docReady } from "../docReady";
import { ipcRenderer } from "electron";

console.log('screen')

docReady(() => {
  setTimeout(() => {
    ipcRenderer.send('controller', 'im your screen')
  }, 2000);
  ipcRenderer.on('screen', (_, data) => {
    console.log(data);
  });
})

