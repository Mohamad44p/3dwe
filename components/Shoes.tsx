import { useGLTF } from "@react-three/drei";
import { JordanGLTF } from "@/typings";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useLayoutEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Shoes() {
  const { nodes, materials } = useGLTF("/air_jordan_1.glb") as JordanGLTF;
  const { scene, camera } = useThree();
  const tl = gsap.timeline();
  const [visible, setVisible] = useState(true);

  useLayoutEffect(() => {
    // Initial animations
    tl.to(camera.position, {
      x: 5,
      y: 4.0,
      z: 2.8,
      scrollTrigger: {
        trigger: ".second-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })
      .to(scene.position, {
        x: 2.5,
        y: 1,
        z: 3.7,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.rotation, {
        x: -0.93,
        y: -3.48,
        z: -0.21,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      /* Section 3 */
      .to(camera.position, {
        x: 5,
        y: 3.8,
        z: 2.8,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.position, {
        x: 2.1,
        y: -0.5,
        z: -0.7,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.rotation, {
        x: 0.67,
        y: -12.9,
        z: 0.79,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      });

    ScrollTrigger.create({
      trigger: ".fourth-section",
      start: "top bottom",
      end: "top top",
      onEnter: () => setVisible(false),
      onLeaveBack: () => setVisible(true),
    });
  }, [camera.position, scene.position, scene.rotation, tl]);

  if (!visible) return null;

  return (
    <>
      <directionalLight
        castShadow
        position={[-2.38, 1.32, 0.74]}
        intensity={5}
      />
      <ambientLight intensity={0.5} />
      <group
        castShadow
        scale={10}
        position={[2, 1, -2]}
        rotation-x={[-Math.PI * 0.5]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shoe_shoe_0.geometry}
          material={materials.shoe}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shoelace_shoelace_0.geometry}
          material={materials.shoelace}
        />
      </group>
    </>
  );
}
