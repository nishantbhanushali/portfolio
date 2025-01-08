import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

// Computers component
const Computers = ({ isMobile }) => {
  const computer = useGLTF("../desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} position={[0, 1, 0]} groundColor="black" />
      <pointLight intensity={5} position={[0, 1, 0]} />
      <spotLight position={[0, 1, 0]} angle={0.3} penumbra={1} />
      <ambientLight intensity={1} />
      <primitive
        object={computer.scene}
        position={isMobile ? [-0.5, -2.3, -0.7] : [-0.5, -2.5, -1.3]}
        scale={isMobile ? 0.35 : 0.8}
      />
    </mesh>
  );
};

// ComputerCanvas component
const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
};

export default ComputerCanvas;
