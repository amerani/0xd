import * as THREE from "three";
import { ScreenState } from './state';

export class SceneSubject {
  geometry: THREE.BoxGeometry;
  material: THREE.MeshBasicMaterial;
  cube: THREE.Mesh;
  state: ScreenState;

  constructor(scene: THREE.Scene, state: ScreenState) {
    this.state = state;
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshBasicMaterial({
      color: this.state.color
    });
    this.cube = new THREE.Mesh(this.geometry, this.material);
    scene.add(this.cube);
  }

  update = (state: ScreenState) => {
    this.state = state;
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
  };

  dispose = () => {
    this.geometry.dispose();
    this.material.dispose();
  }
}
  