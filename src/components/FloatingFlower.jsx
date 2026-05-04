import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Petal({ angle, color, petalLength = 0.5 }) {
  const mesh = useRef();
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, 0);
    s.bezierCurveTo(0.15, 0.1, 0.2, petalLength * 0.6, 0, petalLength);
    s.bezierCurveTo(-0.2, petalLength * 0.6, -0.15, 0.1, 0, 0);
    return s;
  }, [petalLength]);

  const geometry = useMemo(() => new THREE.ShapeGeometry(shape, 12), [shape]);

  return (
    <mesh
      ref={mesh}
      geometry={geometry}
      rotation={[0, 0, angle]}
      position={[
        Math.cos(angle) * petalLength * 0.3,
        Math.sin(angle) * petalLength * 0.3,
        0,
      ]}
    >
      <meshStandardMaterial color={color} side={THREE.DoubleSide} roughness={0.4} metalness={0.1} />
    </mesh>
  );
}

function Flower({ position, scale = 1, color = '#f4a7b9', centerColor = '#ffd54f', speed = 1 }) {
  const group = useRef();
  const petalCount = 8;

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.z += 0.003 * speed;
      group.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.15;
    }
  });

  return (
    <group ref={group} position={position} scale={scale}>
      {Array.from({ length: petalCount }).map((_, i) => (
        <Petal key={i} angle={(i / petalCount) * Math.PI * 2} color={color} petalLength={0.5} />
      ))}
      <mesh position={[0, 0, 0.01]}>
        <circleGeometry args={[0.18, 32]} />
        <meshStandardMaterial color={centerColor} roughness={0.3} metalness={0.2} />
      </mesh>
      <mesh position={[0, -0.5, -0.05]}>
        <cylinderGeometry args={[0.03, 0.03, 0.6, 8]} />
        <meshStandardMaterial color="#4caf50" roughness={0.6} />
      </mesh>
    </group>
  );
}

export default function FloatingFlowers() {
  const flowers = useMemo(() => [
    { position: [-3.5, 1.2, -1], scale: 1.4, color: '#f8a5c2', center: '#ffd54f', speed: 0.8 },
    { position: [3.2, 0.5, -0.5], scale: 1.1, color: '#ce93d8', center: '#ff8a65', speed: 1.2 },
    { position: [-2.0, -1.5, -1.5], scale: 0.9, color: '#80cbc4', center: '#fff176', speed: 0.9 },
    { position: [2.5, -1.0, -2], scale: 1.0, color: '#ffab91', center: '#f48fb1', speed: 1.1 },
    { position: [0, 2.2, -2], scale: 0.8, color: '#b39ddb', center: '#ffe082', speed: 0.7 },
    { position: [-4.5, -0.5, -2.5], scale: 1.2, color: '#ef9a9a', center: '#a5d6a7', speed: 1.0 },
    { position: [4.5, 1.8, -2.5], scale: 0.85, color: '#90caf9', center: '#ffccbc', speed: 1.3 },
    { position: [1.0, -2.5, -1], scale: 1.0, color: '#f48fb1', center: '#fff59d', speed: 0.85 },
  ], []);

  return (
    <>
      {flowers.map((f, i) => (
        <Flower key={i} position={f.position} scale={f.scale} color={f.color} centerColor={f.center} speed={f.speed} />
      ))}
    </>
  );
}
