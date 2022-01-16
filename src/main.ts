import * as THREE from "three"
import Stats from "stats.js"

const stats = new Stats()
let perfMode = 1
stats.showPanel(perfMode)
document.body.appendChild(stats.dom)

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene();

const fov = 75

const camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 0.1, 1000)

//for (let i=1; i<100000; i++){
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
//}

camera.position.z = 5;

const animate = () => {

    stats.begin()

    renderer.render(scene, camera)

    stats.end()

    requestAnimationFrame(animate)
}

animate()