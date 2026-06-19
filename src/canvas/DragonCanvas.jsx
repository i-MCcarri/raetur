'use client'; // Required if using Next.js App Router

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useScroll, ScrollControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// The animated entity
const AnimatedDragon = () => {
  const dragonRef = useRef();
  const scroll = useScroll(); // Captures scroll progress from 0 to 1

  // Load the 3D model (replace with your actual file name)
  // const { scene } = useGLTF('/earth-dragon.glb'); 

  useFrame((state) => {
    if (!dragonRef.current) return;

    // 1. Map scroll offset (0 to 1) to a full cycle (0 to 2π)
    // We multiply by Math.PI * 2 so a full page scroll completes one full loop
    const t = scroll.offset * Math.PI * 2;

    // 2. Figure-Eight (Lissajous Curve) Mathematics
    // x = A * sin(t), y = B * sin(2t)
    const xAmplitude = 3; 
    const yAmplitude = 4; // Taller loop to match the vertical scrolling phone screen

    const x = Math.sin(t) * xAmplitude;
    const y = Math.sin(t * 2) * yAmplitude;

    // 3. Apply position
    dragonRef.current.position.set(x, y, 0);

    // 4. Calculate rotation so the dragon "looks" along the path
    // We take the derivative of the position to find the tangent vector
    const dx = Math.cos(t) * xAmplitude;
    const dy = 2 * Math.cos(t * 2) * yAmplitude;
    const angle = Math.atan2(dy, dx);
    
    // Rotate the model to face the direction of movement
    dragonRef.current.rotation.z = angle; 
    
    // Add a slight continuous breathing/floating effect independent of scroll
    dragonRef.current.position.z = Math.sin(state.clock.elapsedTime) * 0.5;
  });

  return (
    <group ref={dragonRef}>
      {/* Replace this mesh with your actual model once you have the GLTF:
        <primitive object={scene} scale={1.5} /> 
      */}
      <mesh>
        <torusKnotGeometry args={[0.5, 0.15, 100, 16]} />
        <meshStandardMaterial 
          color="#CD7F32" // Metallic Bronze base
          metalness={0.8} 
          roughness={0.2} 
        />
      </mesh>
    </group>
  );
};

// The Main Canvas Wrapper
export default function DragonCanvas() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#0A0A0A]"> 
      {/* Obsidian dark background */}
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        
        {/* Environmental Lighting based on your brand palette */}
        <ambientLight intensity={0.4} color="#ffffff" />
        
        {/* Neon Green light coming from the top left */}
        <directionalLight position={[-5, 5, 2]} intensity={2} color="#39FF14" />
        
        {/* Deep Purple light coming from the bottom right */}
        <directionalLight position={[5, -5, 2]} intensity={2} color="#800080" />

        {/* ScrollControls creates a hidden HTML scroll area.
          pages={2} means the scroll height is 2x the viewport height.
        */}
        <ScrollControls pages={2} damping={0.2}>
          <AnimatedDragon />
        </ScrollControls>

      </Canvas>
    </div>
  );
}