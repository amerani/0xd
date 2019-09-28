import React from 'react'
import * as THREE from "three";
import { ScreenState, ScreenProps } from '../screen/state';

export class Screen extends React.Component<ScreenProps,ScreenState> {
  mount: HTMLDivElement;
  canvas: HTMLCanvasElement;
  state = {
    color: this.props.data.color
  }
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
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    if(this.canvas) {
      const newCanvas = renderer.domElement;
      this.mount.replaceChild(newCanvas, this.canvas);
      this.canvas = newCanvas;
    }
    else {
      this.canvas = renderer.domElement;
      this.mount.appendChild(renderer.domElement);
    }
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: this.state.color } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 5;
    const animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };
    animate();
  }  
  render() {
    return (
      <div ref={ref => (this.mount = ref)} />
    )
  }
}