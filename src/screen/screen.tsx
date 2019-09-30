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
    if(this.screenManager) {
      this.screenManager.dispose();
      cancelAnimationFrame(this.animationId);
    }
    this.screenManager = new ScreenManager(this.state);
    const { renderer } = this.screenManager;
    if(this.canvas) {
      const newCanvas = renderer.domElement;
      this.mount.replaceChild(newCanvas, this.canvas);
      this.canvas = newCanvas;
    }
    else {
      this.canvas = renderer.domElement;
      this.mount.appendChild(renderer.domElement);
    }
    const animate = () => {
      this.animationId = requestAnimationFrame(animate);
      this.screenManager.update(this.state);
    };
    animate();
  }  
  render() {
    return (
      <div ref={ref => (this.mount = ref)} />
    )
  }
}