import React from 'react'
import * as THREE from "three";
import { ScreenState, ScreenProps } from '../screen/state';
import { ScreenManager } from './screen-manager';
import { SceneSubject } from './scene-subject';

export class Screen extends React.Component<ScreenProps,ScreenState> {
  mount: HTMLDivElement;
  canvas: HTMLCanvasElement;
  state = {
    color: this.props.data.color
  }
  screenManager: ScreenManager;
  animationId: number;
  constructor(props:any) {
    super(props);
  }
  static getDerivedStateFromProps(props:ScreenProps, state:ScreenState) {
    if (props.data.color !== state.color) {
      return {
        color: props.data.color
      };
    }
    return null;
  }
  componentDidMount() {
    this.renderCanvas();
  }
  componentDidUpdate() {
    this.renderCanvas();
  }
  renderCanvas = () => {
    this.dispose();
    this.screenManager = new ScreenManager(this.state);
    this.mountCanvas();
    this.animate();
  }
  animate = () => {
    this.animationId = requestAnimationFrame(this.animate);
    this.screenManager.update(this.state);
  }
  mountCanvas = () => {
    if(this.canvas) {
      const newCanvas = this.screenManager.getCanvas();
      this.mount.replaceChild(newCanvas, this.canvas);
      this.canvas = newCanvas;
    }
    else {
      this.canvas = this.screenManager.getCanvas();
      this.mount.appendChild(this.canvas);
    }
  }
  dispose = () => {
    if(this.screenManager) {
      this.screenManager.dispose();
      cancelAnimationFrame(this.animationId);
    }
  }
  render() {
    return (
      <div ref={ref => (this.mount = ref)} />
    )
  }
}