import { SceneSubject } from './scene-subject';
import * as THREE from "three";
import { ScreenState } from './state';

export class ScreenManager {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  sceneSubjects: SceneSubject[];
  width: number = window.innerWidth;
  height: number = window.innerHeight;
  canvas: HTMLCanvasElement;
  state: ScreenState;
  cube: SceneSubject;
  constructor(state: ScreenState) {
    this.state = state;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 75, this.width/this.height, 0.1, 1000 );
    this.camera.position.z = 5;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.canvas = this.renderer.domElement; 

    this.createSceneSubjects();
  }
  getCanvas = () => {
    return this.canvas;
  }
  update = (state: ScreenState) => {
    for(let i=0; i<this.sceneSubjects.length; i++) {
      this.sceneSubjects[i].update(state);
    }
    this.renderer.render(this.scene, this.camera);
  }
  onWindowResize = () => {
    const { width, height } = this.renderer.domElement;
    this.width = width;
    this.height = height;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }  
  dispose = () => {
    this.scene.dispose();
    this.renderer.dispose();
    this.disposeScreenSubjects();
  }
  disposeScreenSubjects = () => {
    for(let i=0; i<this.sceneSubjects.length; i++) {
      this.sceneSubjects[i].dispose();
    }
  }  
  createSceneSubjects = () => {
    const sceneSubjects = [ 
      new SceneSubject(this.scene, this.state),
      new SceneSubject(this.scene, this.state)
    ];
    this.sceneSubjects = sceneSubjects;
  }
}

