import { useEffect, useRef } from "react";
import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

const MyRotatingKnot = () => {
  const myMesh = useRef();
  const [map] = useLoader(THREE.TextureLoader, [
    "https://bruno-simon.com/prismic/matcaps/3.png",
  ]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    myMesh.current.rotation.x = t / 8;
    myMesh.current.rotation.z = t / 8;
  });

  return (
    <mesh ref={myMesh}>
      <torusKnotGeometry args={[1.5, 0.7, 100, 22]} />
      <meshMatcapMaterial matcap={map} />
    </mesh>
  );
};

export default function MyTorus() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <MyRotatingKnot />
      </Canvas>
    </div>
  );
}
