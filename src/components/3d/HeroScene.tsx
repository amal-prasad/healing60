"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";

function Blob() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  // Track mouse position
  if (typeof window !== "undefined") {
    window.addEventListener("mousemove", (e) => {
      mousePos.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mousePos.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    });
  }

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();

    // Slow organic rotation
    meshRef.current.rotation.x = Math.sin(t * 0.15) * 0.1;
    meshRef.current.rotation.y = Math.cos(t * 0.1) * 0.15 + t * 0.05;
    meshRef.current.rotation.z = Math.sin(t * 0.12) * 0.05;

    // Subtle mouse reactivity
    meshRef.current.position.x +=
      (mousePos.current.x * 0.3 - meshRef.current.position.x) * 0.02;
    meshRef.current.position.y +=
      (mousePos.current.y * 0.2 - meshRef.current.position.y) * 0.02;

    // Breathing scale
    const scale = 1 + Math.sin(t * 0.5) * 0.03;
    meshRef.current.scale.setScalar(scale);
  });

  const gradientColors = useMemo(() => {
    return {
      color: new THREE.Color("#C4B5E0"), // lavender
      emissive: new THREE.Color("#A8C5A0"), // sage
    };
  }, []);

  return (
    <mesh ref={meshRef} position={[0.5, 0, 0]}>
      <sphereGeometry args={[1.8, 64, 64]} />
      <MeshDistortMaterial
        color={gradientColors.color}
        emissive={gradientColors.emissive}
        emissiveIntensity={0.15}
        roughness={0.4}
        metalness={0.1}
        distort={0.35}
        speed={1.5}
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

function SecondaryBlob() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.cos(t * 0.1) * 0.15;
    meshRef.current.rotation.y = Math.sin(t * 0.08) * 0.2 + t * 0.03;
    meshRef.current.position.y = Math.sin(t * 0.3) * 0.15;
  });

  return (
    <mesh ref={meshRef} position={[-2, -0.5, -2]}>
      <sphereGeometry args={[1, 48, 48]} />
      <MeshDistortMaterial
        color="#A8C5A0"
        emissive="#C4B5E0"
        emissiveIntensity={0.1}
        roughness={0.6}
        metalness={0.05}
        distort={0.25}
        speed={2}
        transparent
        opacity={0.5}
      />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.4} color="#FAF7F2" />
        <pointLight position={[-3, 2, 4]} intensity={0.3} color="#C4B5E0" />
        <pointLight position={[3, -1, 3]} intensity={0.2} color="#A8C5A0" />

        <Blob />
        <SecondaryBlob />

        <Preload all />
      </Canvas>
    </div>
  );
}
