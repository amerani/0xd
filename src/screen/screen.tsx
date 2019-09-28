import React from 'react'
import ReactDOM from 'react-dom'
import { docReady } from '../docReady';

docReady(() => 
  ReactDOM.render(
    <p>Screen</p>,
    document.getElementById('root-screen'),
  )
)