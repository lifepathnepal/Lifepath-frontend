"use client";

import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Model } from "../Lifepathbook/Lifepathbook";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Component to apply animated values to the camera
const CameraHandler = ({
  animValues,
}: {
  animValues: React.MutableRefObject<any>;
}) => {
  const { camera } = useThree();

  useFrame(() => {
    if (animValues.current) {
      camera.position.set(
        animValues.current.camX,
        animValues.current.camY,
        animValues.current.camZ,
      );
      camera.lookAt(0, 0, 0); // Keep looking at the center
    }
  });

  return null;
};

// Component to apply rotation and position to the model
const RotatingModel = ({
  animValues,
}: {
  animValues: React.MutableRefObject<any>;
}) => {
  const groupRef = useRef<any>(null);

  useFrame(() => {
    if (groupRef.current && animValues.current) {
      groupRef.current.rotation.x = animValues.current.rotation - Math.PI / 2;
      groupRef.current.position.y = animValues.current.y;
    }
  });

  return (
    <group ref={groupRef}>
      <Center>
        <Model animValues={animValues} />
      </Center>
    </group>
  );
};

const HeroSection = () => {
  const animValues = useRef({
    rotation: 0,
    y: 0,
    open: 0,
    camX: 3.86,
    camY: 29.96,
    camZ: 0.01,
  });
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "center center",
          scrub: 0.5,
        },
      });

      // Part 1: Initial rotation and opening
      tl.to(animValues.current, {
        rotation: -Math.PI * 1.5,
        // y: -15,
        open: Math.PI / 2,
        ease: "none",
        duration: 1,
      });

      // Part 2: Camera transition (starts at 60% of the timeline)
      tl.to(
        animValues.current,
        {
          camX: 17.48,
          camY: 19.11,
          camZ: 0.17,
          ease: "power1.inOut",
          duration: 0.4,
        },
        0.6,
      ); // 0.6 is the start time in the timeline (60%)
    },
    { scope: containerRef },
  );

  return (
    <div className="w-screen min-h-[120vh] relative" ref={containerRef}>
      <div className="sticky top-0 w-full h-screen">
        <Canvas camera={{ position: [3.86, 29.96, 0.01], fov: 50 }}>
          <CameraHandler animValues={animValues} />
          <ambientLight intensity={2} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={3}
            color={"#ffffff"}
          />
          <directionalLight
            position={[0, 8, 0]}
            intensity={1}
            color={"#ffffff"}
          />
          <directionalLight
            position={[0, 0, -10]}
            intensity={4}
            color={"#ffffff"}
          />
          <RotatingModel animValues={animValues} />
        </Canvas>
      </div>
    </div>
  );
};

export default HeroSection;
