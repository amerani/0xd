import React from 'react'
import { publish } from '../ipc';

export class Controller extends React.Component {
  sendColor = (e:any) => {
    const color = e.target.color.value;
    publish('screen', { type: 'set-color', payload: { color }})
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