import React from 'react'

export class Screen extends React.Component<any,any> {
  render() {
    const { data } = this.props;
    const style:any = {
      backgroundColor: data && data.color,
      height: "100%",
      width: "100%"
    }
    return <div style={style}>{JSON.stringify(data)}</div>;
  }
}