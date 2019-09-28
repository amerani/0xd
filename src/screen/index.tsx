import { docReady } from "../docReady";
import { ipcRenderer } from "electron";
import React from "react";
import ReactDOM from 'react-dom';
import { Screen } from './screen';

docReady(() => {
  ReactDOM.render(
    <Screen data={null}/>,
    document.getElementById('root-screen')
  );
  ipcRenderer.on('screen', (_, data) => {
    console.log(data)
    ReactDOM.hydrate(
      <Screen data={data.payload}/>,
      document.getElementById('root-screen')
    );    
  })
})