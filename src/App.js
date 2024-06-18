import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import Scene from "./Model1";
const App = () => {
  return (
      <Canvas style={{height:"100vh"}}>
          <ambientLight intensity={3}/>
          <OrbitControls/>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <Scene />
      </Canvas>
  );
};

export default App;