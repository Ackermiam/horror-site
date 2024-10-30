import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  Object3D,
  PointLight,
  DirectionalLight,
  AnimationMixer,
  Clock
} from "three";

import { useScroll } from "../composable/useScroll";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const { isScrollDown, scrollDown } = useScroll();
export class Logic {
  scene: Scene;
  renderer: WebGLRenderer;
  camera: PerspectiveCamera;
  mesh: any;
  mixer: AnimationMixer | null = null;
  clock = new Clock();
  animation: any;

  constructor(ref: HTMLElement) {
    isScrollDown();
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight
    );
    this.camera.position.set(0, 1, 3);

    const loader = new GLTFLoader();

    loader.load("/models/scene.gltf", (gltf: any) => {
      this.mesh = gltf.scene;
      this.animation = gltf.animations
      this.scene.add(this.mesh);
      this.mesh.translateY(-.5)

      if (gltf.animations.length > 0) {
        this.mixer = new AnimationMixer(this.mesh);
        const action = this.mixer.clipAction(gltf.animations[0]);
        action.play();
      }
    });

    this.renderer = new WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x000000, 0);
    ref.appendChild(this.renderer.domElement);

    const pointLight1 = new PointLight(0x19ace6, 10, 100);
    pointLight1.position.set(0, 5, 5);
    this.scene.add(pointLight1);

    const pointLight2 = new PointLight(0xff9500, 10, 100);
    pointLight2.position.set(5, 5, 5);
    this.scene.add(pointLight2);

    const pointLight3 = new PointLight(0x19ace6, 10, 100);
    pointLight3.position.set(-5, 5, 5);
    this.scene.add(pointLight3);

    const pointLight4 = new PointLight(0xff9500, 10, 100);
    pointLight4.position.set(0, -5, 5);
    this.scene.add(pointLight4);

    const directionalLight = new DirectionalLight(0x19ace6, 3);
    directionalLight.position.set(0, 10, 10).normalize();
    this.scene.add(directionalLight);

    window.addEventListener('scroll', (e) => {
      console.log(e.target);
      this.move();
      this.scale();
      //this.translate();
    })

    this.tick();
  }

  tick() {
    this.renderer.render(this.scene, this.camera);
    if (this.mesh) {
      //this.move();
    }
    if (this.mixer) {
      const delta = this.clock.getDelta();
      this.mixer.update(delta);
    }
    requestAnimationFrame(() => {
      this.tick();
    });
  }

  move() {
    if (scrollDown.value === true) {
      this.mesh.rotateY(-0.05);
    } else {
      this.mesh.rotateY(0.05);
    }
  }

  scale() {

    if(this.mesh.scale.x <= 2.4) {
      this.mesh.scale.x += 0.015
      this.mesh.scale.y += 0.015
      this.mesh.scale.z += 0.015
      this.mesh.translateY(-0.02);
    }
  }
}
