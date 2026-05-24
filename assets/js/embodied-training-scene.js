import * as THREE from 'three';

const sceneRoots = document.querySelectorAll('[data-embodied-training-scene]');
const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

function canUseWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext('webgl2') || canvas.getContext('webgl')),
    );
  } catch {
    return false;
  }
}

function seededRandom(seed) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function makeParticleCloud(count) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const palette = [
    new THREE.Color(0x22d3ee),
    new THREE.Color(0x10b981),
    new THREE.Color(0xf59e0b),
    new THREE.Color(0x64748b),
  ];

  for (let index = 0; index < count; index += 1) {
    const progress = index / count;
    const turn = progress * Math.PI * 8.5;
    const drift = seededRandom(index + 7) - 0.5;
    const radius = 1.1 + progress * 2.45 + drift * 0.28;
    const layer = seededRandom(index + 13);
    const height = (layer - 0.5) * 2.25 + Math.sin(turn * 0.7) * 0.28;

    positions[index * 3] = Math.cos(turn) * radius + (seededRandom(index + 19) - 0.5) * 0.36;
    positions[index * 3 + 1] = height;
    positions[index * 3 + 2] = Math.sin(turn) * radius * 0.56 + (seededRandom(index + 23) - 0.5) * 0.4;

    const color = palette[index % palette.length].clone();
    color.lerp(palette[(index + 1) % palette.length], seededRandom(index + 29) * 0.45);
    colors[index * 3] = color.r;
    colors[index * 3 + 1] = color.g;
    colors[index * 3 + 2] = color.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  return new THREE.Points(
    geometry,
    new THREE.PointsMaterial({
      size: 0.028,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.82,
      vertexColors: true,
      depthWrite: false,
    }),
  );
}

function makeCurve(points, color, opacity) {
  const curve = new THREE.CatmullRomCurve3(points);
  const geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(96));
  const material = new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity,
  });
  return new THREE.Line(geometry, material);
}

function makeTrainingSystem(isCompact) {
  const group = new THREE.Group();
  const particleCount = isCompact ? 420 : 760;
  const cloud = makeParticleCloud(particleCount);
  cloud.rotation.z = -0.08;
  group.add(cloud);

  const tokenGroup = new THREE.Group();
  const tokenGeometry = new THREE.IcosahedronGeometry(0.11, 1);
  const tokenMaterials = [
    new THREE.MeshStandardMaterial({
      color: 0x22d3ee,
      emissive: 0x075985,
      emissiveIntensity: 0.45,
      roughness: 0.35,
      metalness: 0.1,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x065f46,
      emissiveIntensity: 0.38,
      roughness: 0.42,
      metalness: 0.08,
    }),
    new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0x92400e,
      emissiveIntensity: 0.32,
      roughness: 0.42,
      metalness: 0.08,
    }),
  ];

  const hub = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.22, 2),
    new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      emissive: 0x0e7490,
      emissiveIntensity: 0.35,
      roughness: 0.22,
      metalness: 0.18,
    }),
  );
  tokenGroup.add(hub);

  const connectionPositions = [];
  const nodes = [];
  const nodeCount = isCompact ? 8 : 12;
  for (let index = 0; index < nodeCount; index += 1) {
    const angle = (index / nodeCount) * Math.PI * 2;
    const y = Math.sin(angle * 1.6) * 0.72;
    const node = new THREE.Mesh(tokenGeometry, tokenMaterials[index % tokenMaterials.length]);
    node.position.set(Math.cos(angle) * 1.82, y, Math.sin(angle) * 0.92);
    node.userData.phase = index * 0.45;
    nodes.push(node);
    tokenGroup.add(node);

    connectionPositions.push(0, 0, 0, node.position.x, node.position.y, node.position.z);
  }

  const connectionGeometry = new THREE.BufferGeometry();
  connectionGeometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(connectionPositions, 3),
  );
  tokenGroup.add(
    new THREE.LineSegments(
      connectionGeometry,
      new THREE.LineBasicMaterial({
        color: 0x94a3b8,
        transparent: true,
        opacity: 0.18,
      }),
    ),
  );

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.86, 0.006, 8, 96),
    new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.34,
    }),
  );
  ring.rotation.x = Math.PI / 2.4;
  tokenGroup.add(ring);
  tokenGroup.position.set(0.45, 0.02, 0.2);
  group.add(tokenGroup);

  group.add(
    makeCurve(
      [
        new THREE.Vector3(-3.7, -1.05, -0.4),
        new THREE.Vector3(-2.2, -0.15, 0.7),
        new THREE.Vector3(-0.2, 0.16, -0.2),
        new THREE.Vector3(1.9, 0.84, 0.56),
        new THREE.Vector3(3.45, 0.28, -0.38),
      ],
      0x22d3ee,
      0.72,
    ),
  );
  group.add(
    makeCurve(
      [
        new THREE.Vector3(-3.4, 0.74, 0.34),
        new THREE.Vector3(-1.95, 0.32, -0.68),
        new THREE.Vector3(-0.35, -0.52, -0.1),
        new THREE.Vector3(1.3, -0.18, 0.64),
        new THREE.Vector3(3.3, -0.82, 0.1),
      ],
      0x10b981,
      0.62,
    ),
  );
  group.add(
    makeCurve(
      [
        new THREE.Vector3(-2.85, 1.05, -0.65),
        new THREE.Vector3(-1.2, 0.92, 0.24),
        new THREE.Vector3(0.35, 0.28, 0.72),
        new THREE.Vector3(1.78, -0.42, -0.18),
        new THREE.Vector3(3.0, 0.06, -0.58),
      ],
      0xf59e0b,
      0.55,
    ),
  );

  return { group, cloud, ring, nodes };
}

function initScene(root) {
  if (!canUseWebGL()) return;

  const canvas = root.querySelector('[data-embodied-training-canvas]');
  if (!canvas) return;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    preserveDrawingBuffer: true,
    powerPreference: 'high-performance',
  });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0.15, 7.4);

  scene.add(new THREE.AmbientLight(0xffffff, 1.45));
  const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
  keyLight.position.set(2.8, 3.2, 4.4);
  scene.add(keyLight);

  const visual = makeTrainingSystem(root.clientWidth < 680);
  scene.add(visual.group);

  const pointer = { x: 0, y: 0 };
  let frameId = 0;
  let isVisible = true;

  function resize() {
    const width = Math.max(root.clientWidth, 1);
    const height = Math.max(root.clientHeight, 1);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  }

  function render(time = 0) {
    const seconds = time * 0.001;
    const reducedMotion = reduceMotionQuery.matches;

    visual.group.rotation.y = reducedMotion ? -0.12 : seconds * 0.055 - 0.12 + pointer.x * 0.035;
    visual.group.rotation.x = reducedMotion ? 0.02 : Math.sin(seconds * 0.24) * 0.045 + pointer.y * 0.035;
    visual.cloud.rotation.y = reducedMotion ? 0 : seconds * 0.025;
    visual.ring.rotation.z = reducedMotion ? 0.16 : seconds * 0.18;

    for (const node of visual.nodes) {
      const pulse = reducedMotion ? 1 : 1 + Math.sin(seconds * 1.2 + node.userData.phase) * 0.08;
      node.scale.setScalar(pulse);
    }

    camera.position.x += (pointer.x * 0.24 - camera.position.x) * 0.045;
    camera.position.y += (0.15 + pointer.y * 0.08 - camera.position.y) * 0.045;
    camera.lookAt(0.2, 0, 0);
    renderer.render(scene, camera);
  }

  function animate(time) {
    render(time);
    if (!reduceMotionQuery.matches && isVisible) {
      frameId = window.requestAnimationFrame(animate);
    }
  }

  function start() {
    window.cancelAnimationFrame(frameId);
    if (reduceMotionQuery.matches || !isVisible) {
      render();
      return;
    }
    frameId = window.requestAnimationFrame(animate);
  }

  function handlePointerMove(event) {
    const rect = root.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    pointer.y = -((event.clientY - rect.top) / rect.height - 0.5) * 2;
  }

  resize();
  render();
  root.classList.add('is-ready');

  const resizeObserver = new ResizeObserver(() => {
    resize();
    render();
  });
  resizeObserver.observe(root);

  const intersectionObserver = new IntersectionObserver((entries) => {
    isVisible = entries.some((entry) => entry.isIntersecting);
    start();
  });
  intersectionObserver.observe(root);

  root.addEventListener('pointermove', handlePointerMove, { passive: true });
  reduceMotionQuery.addEventListener('change', start);
  document.addEventListener('visibilitychange', () => {
    isVisible = document.visibilityState === 'visible';
    start();
  });

  start();
}

for (const root of sceneRoots) {
  initScene(root);
}
