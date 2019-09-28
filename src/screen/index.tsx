import { docReady } from "../docReady";
import { ipcRenderer } from "electron";
import React from "react";
import ReactDOM from 'react-dom';
import { Screen } from './screen';
import { initialState, ScreenState } from './state';
import { ControllerCommand } from '../controller/command';

docReady(() => {
  ReactDOM.render(
    <Screen data={initialState}/>,
    document.getElementById('root-screen')
  );
  ipcRenderer.on('screen', (_, data:ControllerCommand) => {
    ReactDOM.hydrate(
      <Screen data={deriveStateFromCommand(data)}/>,
      document.getElementById('root-screen')
    );    
  })
})

function deriveStateFromCommand(command: ControllerCommand):ScreenState {
  return {
    ...initialState,
    ...command.payload
  }
}