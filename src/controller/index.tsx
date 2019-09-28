import { docReady } from "../docReady";
import { ipcRenderer } from "electron";
import React from 'react';
import ReactDOM from 'react-dom';
import { Controller } from './controller';

docReady(() => {
  ReactDOM.render(
    <Controller />,
    document.getElementById('root-controller')
  );
  setTimeout(() => {
    ipcRenderer.send('screen', 'im your controller')
  }, 2000);
  ipcRenderer.on('controller', (_,data) => console.log(data))
})