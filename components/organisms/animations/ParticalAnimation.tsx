import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useSpring, a } from '@react-spring/three';
import * as THREE from 'three';
import { Points, PointMaterial } from '@react-three/drei';

type ParticleProps = {
  position: [number, number, number];
};

const Particle: React.FC<ParticleProps> = ({ position }) => {
  const ref = useRef<THREE.Points>(null);

  return (
    <Points ref={ref} positions={position}>
      <sphereGeometry args={[0.01, 32, 32]} />
      <PointMaterial color="black" />
    </Points>
  );
};

const ShapeData = {
  globe: (count: number) => {
    const positions = new Float32Array(count * 3);
    const phi = (1 + Math.sqrt(5)) / 2; // golden ratio
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = phi * i;
      positions[i * 3] = Math.cos(theta) * radius;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(theta) * radius;
    }
    return positions;
  },
  laptop: (count: number) => {
    const positions = new Float32Array(count * 3);
    const width = 1.5, height = 1, depth = 0.1;
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * width;
      const y = (Math.random() - 0.5) * height;
      const z = (Math.random() - 0.5) * depth;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  },
  mobile: (count: number) => {
    const positions = new Float32Array(count * 3);
    const width = 0.5, height = 1.2, depth = 0.1;
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * width;
      const y = (Math.random() - 0.5) * height;
      const z = (Math.random() - 0.5) * depth;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }
};

const ParticleAnimation: React.FC = () => {
    const particleCount = 10000;
    const [shape, setShape] = React.useState<'globe' | 'laptop' | 'mobile'>('globe');
  
    const shapes = useMemo(() => ({
      globe: ShapeData.globe(particleCount),
      laptop: ShapeData.laptop(particleCount),
      mobile: ShapeData.mobile(particleCount),
    }), [particleCount]);
  
    const { positions } = useSpring({
      positions: shape === 'globe' ? shapes.globe : shape === 'laptop' ? shapes.laptop : shapes.mobile,
      config: { mass: 5, tension: 500, friction: 100, precision: 0.0001 },
    });
  
    React.useEffect(() => {
      const interval = setInterval(() => {
        setShape((prev) =>
          prev === 'globe' ? 'laptop' : prev === 'laptop' ? 'mobile' : 'globe'
        );
        console.log("Shape changed to:", shape);
      }, 6000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div style={{ width: '100%', height: '100%', minHeight: '400px', position: 'relative', zIndex: 1 }}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ background: 'rgba(200, 200, 200, 0.1)' }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <a.points>
            <bufferGeometry>
              <bufferAttribute
                attachObject={['attributes', 'position']}
                array={positions}
                count={particleCount}
                itemSize={3}
              />
            </bufferGeometry>
            <PointMaterial color="#000000" size={0.05} sizeAttenuation={true} />
          </a.points>
        </Canvas>
      </div>
    );
  };
  
export default ParticleAnimation;