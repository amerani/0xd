import { onDomReady } from "../dom";
import React from 'react';
import ReactDOM from 'react-dom';
import { Controller } from './controller';

onDomReady(() => {
  ReactDOM.render(
    <Controller />,
    document.getElementById('root-controller')
  );
})