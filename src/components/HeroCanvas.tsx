'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, Center, Environment } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function RotatingG() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.2;
      group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Center>
          <Text3D
            font="/fonts/Inter_Bold.json" // Note: This requires a font file in public/fonts
            size={4}
            height={1}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.1}
            bevelSize={0.05}
            bevelOffset={0}
            bevelSegments={5}
          >
            G.
            <meshStandardMaterial 
              color="#E8181A" 
              metalness={0.8} 
              roughness={0.2} 
              envMapIntensity={2}
            />
          </Text3D>
        </Center>
      </Float>
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      dpr={[1, 1.5]} // Optimize for mobile by capping pixel ratio
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <directionalLight position={[-10, -10, -10]} intensity={0.5} />
      
      {/* Fallback to simple lighting if environment isn't needed, but Env makes it look premium */}
      <Environment preset="city" />
      
      <RotatingG />
    </Canvas>
  );
}
