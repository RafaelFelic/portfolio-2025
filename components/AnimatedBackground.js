import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function AnimatedBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    // 1. Basic Scene Setup
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 40;

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // 3. Geometry + Material (wireframe)
    const geometry = new THREE.IcosahedronGeometry(30, 2);
    const material = new THREE.MeshBasicMaterial({
      color: 0x4285f4,
      wireframe: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // 4. Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.0001;
      mesh.rotation.y += 0.0001;
      renderer.render(scene, camera);
    };
    animate();

    // 5. Cleanup on unmount
    return () => {
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      scene.remove(mesh);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        opacity: window.innerWidth < 768 ? 0.3 : 0.2,
      }}
    />
  );
}
