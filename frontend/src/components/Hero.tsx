import { Canvas } from "@react-three/fiber";
import { Float, PresentationControls, Stage } from "@react-three/drei";
// @ts-ignore
import Burger from "./Burger";

export default function Hero() {
  return (
    <div className="flex h-72 w-full touch-none bg-slate sm:h-96 md:h-[486px] lg:h-[642px]">
      <Canvas
        shadows
        camera={{
          fov: 45,
          position: [0, 0.5, 12],
        }}
      >
        <Stage  intensity={1.5} preset="soft">
          <PresentationControls
            global
            snap
            polar={[-Math.PI / 15, Math.PI / 12]}
          >
            <Float floatingRange={[0.12,0.25]}>
            <Burger />
            </Float>
          </PresentationControls>
        </Stage>
      </Canvas>
    </div>
  );
}
