import * as THREE from 'three';

export const initThreeJsBackground = () => {
  const container = document.getElementById('three-background-container');
  
  if (!container) return;

  // Dimensões
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  container.appendChild(renderer.domElement);

  // Cena
  const scene = new THREE.Scene();

  // Câmera
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 2000);
  camera.position.set(0, 0, 1000);

  // Iluminação
  const pointLight = new THREE.PointLight(0xFFFFFF, 0.5, 1500);
  scene.add(pointLight);

  // Criar o grupo de esferas
  const group = new THREE.Group();
  const geometry = new THREE.SphereGeometry(30, 32, 16);
  const material = new THREE.MeshToonMaterial({
    color: 0xffcc33,
    transparent: true,
    opacity: 0.8,
    side: THREE.DoubleSide
  });

  for (let i = 0; i < 700; i++) {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = Math.random() * 2000 - 1000;
    mesh.position.y = Math.random() * 2000 - 1000;
    mesh.position.z = Math.random() * 2000 - 1000;
    mesh.rotation.x = Math.random() * 20 * Math.PI;
    mesh.rotation.y = Math.random() * 20 * Math.PI;
    const scale = Math.random();
    mesh.scale.set(scale, scale, scale);
    group.add(mesh);
  }

  scene.add(group);

  // Fog (opcional)
  scene.fog = new THREE.FogExp2(0x000000, 0.0005);

  // Animação
  function animate() {
    requestAnimationFrame(animate);
    group.rotation.x += 0.009;
    group.rotation.y += 0.02;
    renderer.render(scene, camera);
  }

  animate();

  // Atualizar no resize
  window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });
};
