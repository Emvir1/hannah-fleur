import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import FloatingFlowers from './FloatingFlower';
import { Suspense } from 'react';

function Particles() {
  return (
    <Stars radius={30} depth={10} count={800} factor={2} saturation={0.8} fade speed={1} />
  );
}

export default function HeroScene() {
  return (
    <Canvas
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      camera={{ position: [0, 0, 5], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.7} color="#ffe4ec" />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#fff5f5" />
      <pointLight position={[-4, 2, 2]} intensity={0.8} color="#f48fb1" />
      <pointLight position={[4, -2, 2]} intensity={0.6} color="#ce93d8" />
      <Suspense fallback={null}>
        <FloatingFlowers />
        <Particles />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
    </Canvas>
  );
}
