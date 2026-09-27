import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';
const launch = document.querySelector('#launch-screen'), canvas = document.querySelector('#launch-canvas');
let renderer;
try {
  const scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, .1, 100), texture = new THREE.TextureLoader().load('/assets/images/moai-hull.jpg');
  renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true }); renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5)); renderer.setSize(innerWidth, innerHeight);
  const stars = new THREE.BufferGeometry(), points = new Float32Array(900);
  for (let i = 0; i < points.length; i += 3) { points[i] = (Math.random() - .5) * 35; points[i + 1] = (Math.random() - .5) * 20; points[i + 2] = -Math.random() * 25; }
  stars.setAttribute('position', new THREE.BufferAttribute(points, 3)); scene.add(new THREE.Points(stars, new THREE.PointsMaterial({ color: 0xffc94a, size: .035 })));
  const ship = new THREE.Group(), hull = new THREE.Mesh(new THREE.CapsuleGeometry(1.3, 2.8, 8, 16), new THREE.MeshStandardMaterial({ map: texture, color: 0xff6a1a, roughness: .8 })); hull.rotation.z = Math.PI / 2; ship.add(hull);
  const wing = new THREE.Mesh(new THREE.ConeGeometry(.8, 2.4, 4), new THREE.MeshBasicMaterial({ color: 0xb14eff })); wing.rotation.z = Math.PI / 2; wing.position.x = -1.4; ship.add(wing); scene.add(ship); camera.position.z = 7;
  function animate(t) { ship.rotation.y = Math.sin(t * .0004) * .3; ship.position.y = Math.sin(t * .001) * .15; renderer.render(scene, camera); requestAnimationFrame(animate); } requestAnimationFrame(animate);
  addEventListener('resize', () => { camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth, innerHeight); });
} catch (error) { canvas.hidden = true; }
const enter = () => { if (launch.classList.contains('gone')) return; launch.classList.add('gone'); sessionStorage.setItem('gfg-launch-seen', '1'); };
document.querySelector('#ignite').addEventListener('click', enter); document.querySelector('#skip-launch').addEventListener('click', enter); addEventListener('keydown', e => { if (e.key === 'Enter') enter(); });
if (sessionStorage.getItem('gfg-launch-seen')) launch.classList.add('gone');
