import {Suspense, useEffect, useState} from 'react'
import{ Canvas} from '@react-three/fiber';
import {OrbitControls, Preload, useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader'
// import {HemisphereLight} from 'three'


const Computers = ({isMobile}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [transformStyle, setTransformStyle] = useState({
    scale: isMobile ? 0.7 : 0.75,
    rotation: [-0.01, -0.2, -0.1],
  });

  const computer = useGLTF('./desktop_pc/scene.gltf');

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateTransformStyle = () => {
      const targetScale = isMobile ? 0.7 : 0.75;
      const scale = 1 - Math.min(1, scrollPosition * 0.002);
      const rotation = [-0.01, -0.2, -0.1].map((angle, index) =>
        angle + (targetScale - scale) * 0.1
      );
      setTransformStyle({ scale, rotation });
    };

    window.addEventListener('scroll', updateTransformStyle);
    return () => {
      window.removeEventListener('scroll', updateTransformStyle);
    };
  }, [scrollPosition, isMobile]);


  return (
    <mesh  >
      // eslint-disable-next-line
      <hemisphereLight intensity={0.2} 
       groundColor="black"/>
      <pointLight intensity={1}/>
      <spotLight 
        position={[-20,50,10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        shadow-mapSize={1024}
      />
       
      <primitive object={computer.scene}
        scale={transformStyle.scale}
        position={isMobile ? [0, -4, -2.2] : [0, -3.25, -1.5]}
        rotation={transformStyle.rotation}
        style={{
          transition: 'transform 0.3s ease-out', // Ajustez la durée et l'effet d'animation selon vos préférences
        }}
      />
    </mesh>
  )
}

const ComputerCanvas = ()=>{
  const [isMobile, setIsMobile] = useState(false);

   useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event)=>{
      setIsMobile(event.matches)
    }
    mediaQuery.addEventListener('change',handleMediaQueryChange)
    return ()=>{
      mediaQuery.removeEventListener('change',handleMediaQueryChange)
    }
   })
  return(
    <Canvas
      frameLoop="demand"
      shadows 
      camera={{position:[20,3,5],fov:25}}
      gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}/>
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all/>
    </Canvas>
  )
}



export default ComputerCanvas