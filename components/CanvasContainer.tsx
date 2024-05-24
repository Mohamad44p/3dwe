"use client";

import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Shoes from "./Shoes";
import { Suspense } from "react";
import { Loading } from "./Loading";

export default function CanvasContainer() {
  return (
    <Canvas
      camera={{
        position: [4.742922067308307, 2.2387122409413784, 1.2218255872664914],
      }}
      shadows
    >
      <OrbitControls
        enablePan={false}
        enableRotate={false}
        enableZoom={false}
      />

      <Environment preset="city" />
      <Suspense fallback={<Loading />}>
        <Shoes />
      </Suspense>
    </Canvas>
  );
}
