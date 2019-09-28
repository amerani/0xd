import React from 'react'
import ReactDOM from 'react-dom'
import { docReady } from "../docReady";

docReady(() => 
  ReactDOM.render(
    <p>Controller</p>,
    document.getElementById('root-controller')
  )
)
