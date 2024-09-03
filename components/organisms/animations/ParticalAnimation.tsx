import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useSpring, a } from '@react-spring/three';
import { Sphere, Box, Icosahedron } from '@react-three/drei';

// Define the type for the Particle component props
interface ParticleProps {
  position: [number, number, number];
  scale: [number, number, number];
}

const Particle: React.FC<ParticleProps> = ({ position, scale }) => {
  const ref = useRef<THREE.Mesh>(null!); // Non-null assertion for ref

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
    }
  });

  return (
    <a.mesh ref={ref} position={position} scale={scale}>
      <sphereBufferGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="orange" />
    </a.mesh>
  );
};

// Define the type for the ShapeChanger component props
interface ShapeChangerProps {
  shape: string;
}

const ShapeChanger: React.FC<ShapeChangerProps> = ({ shape }) => {
  switch (shape) {
    case 'laptop':
      return <Box args={[1, 1, 1]} />;
    case 'mobile':
      return <Icosahedron args={[1, 0]} />;
    default:
      return <Sphere args={[1, 32, 32]} />;
  }
};

const ParticleAnimation: React.FC = () => {
  const [shape, setShape] = useState<string>('globe');

  // Animation transitions
  const {    scale } = useSpring({
    scale: shape === 'globe' ? [1, 1, 1] : [0, 0, 0],
    config: { mass: 5, tension: 500, friction: 80 },
  });

  // Change shapes every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShape((prev) =>
        prev === 'globe' ? 'laptop' : prev === 'laptop' ? 'mobile' : 'globe'
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <ShapeChanger shape={shape} />
      {Array.from({ length: 50 }).map((_, i) => (
        <Particle
          key={i}
          position={[Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5]}
          scale={scale}
        />
      ))}
    </Canvas>
  );
};

export default ParticleAnimation;
