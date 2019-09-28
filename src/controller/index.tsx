import { docReady } from "../docReady";
import React from 'react';
import ReactDOM from 'react-dom';
import { Controller } from './controller';

docReady(() => {
  ReactDOM.render(
    <Controller />,
    document.getElementById('root-controller')
  );
})