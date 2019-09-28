import { onDomReady } from "../dom";
import React from "react";
import ReactDOM from 'react-dom';
import { Screen } from './screen';
import { initialState, ScreenProps } from './state';
import { ControllerCommand } from '../controller/command';
import { subscribe } from '../ipc';

const root = () => document.getElementById('root-screen');

function initialRender() {
  ReactDOM.render(
    <Screen data={initialState}/>,
    root()
  );
}

function render() {
  subscribe('screen', (command) => {
    const props = derivePropsFromCommand(command);
    ReactDOM.hydrate(
      <Screen {...props} />,
      root()
    )
  })
}

onDomReady(() => {
  initialRender();
  render();
})

function derivePropsFromCommand(command: ControllerCommand):ScreenProps {
  return { data: {
    ...initialState,
    ...command.payload
  }}
}