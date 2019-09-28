import React from 'react'
import { ipcRenderer } from 'electron';

export class Controller extends React.Component {
  sendColor = (e:any) => {
    const color = e.target.color.value;
    console.log(color);
    ipcRenderer.send('screen', { command: 'set-color', payload: { color }})
  }
  render() {
    return (
      <>
        <p>Controller</p>
        <form onSubmit={this.sendColor}>
          <input name="color" placeholder="red" autoComplete="off"/>
          <button type="submit">Send</button>
        </form>        
      </>
    )
  }
}