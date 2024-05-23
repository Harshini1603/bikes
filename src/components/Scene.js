import React from 'react';

export default function Model(props) {
    const group = useRef();
    const { nodes, materials } = useLoader(
      GLTFLoader,
      `../${props.permalink}/scene.gltf`,
      draco("/draco-gltf/")
    );
}


