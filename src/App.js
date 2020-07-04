import React,{useRef} from 'react';
import "./App.scss";

import {Canvas,useFrame} from 'react-three-fiber';
//import {Box,Circle} from 'drei';



const SpinningMesh =({position,args,color})=>{
    const mesh=useRef(null);
    useFrame(()=>(mesh.current.rotation.x=mesh.current.rotation.y += 0.01))
    return(
        <mesh ref={mesh} position={position}>
            <boxBufferGeometry attach='geometry' args={args} />
            <meshStandardMaterial attach='material' color={color}/>
        </mesh>
)
}

const Circle =()=>{
    const mesh=useRef(null);
    useFrame(()=>(mesh.current.rotation.x=mesh.current.rotation.y += 0.01))
    return(
        <mesh ref={mesh}>
            <circleBufferGeometry attach='geometry' args={[1,1,1]} />
            <meshStandardMaterial attach='material' color=''/>
        </mesh>
    )
}
class App extends React.Component{

    render(){

        return (
            <>
                <Canvas shadowMap colorManagement camera={{position:[-5,2,10],fov:60}}>
                    <ambientLight intensity={0.3} />
                    <pointLight poition={[-10,0,-20]}  intensity={0.5} />
                    <pointLight poition={[0,-10,0]} intensity={1.5} />

                    <group>
                        <mesh rotation={[-Math.PI /2 , 0 , 0]} poition={[0,-3,0]}>
                            <planeBufferGeometry attach='geometry' args={[100,100]}/>
                            <meshStandardMaterial attach='material' color='yellow'/>
                        </mesh>
                    </group>
                    <directionalLight poition={[0,10,0]} intensity={1}  shadow-mapSize-shadowMapWidth={1024} shadow-mapSize-shadowMapHeight={1024}
                        shadow-camera-far={50} shadow-camera-left={-10} shadow-camera-right={10} shadow-camera-top={10} shadow-camera-bottom={-10} />
                    <SpinningMesh position={[0,1,0]} args={[3,2,1]} color='lightblue'/>
                    <SpinningMesh position={[-2,1,-5]} color='pink'/>
                    <SpinningMesh position={[5,1,-2]} color='pink'/>

                </Canvas>

            </>
        );
    }

}

export default App;
