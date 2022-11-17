import React from "react";
// import Header from "./components/Header";
// import Main from "./components/Main";

function App() {
  return (
    <div>
      {/* <Header />
      <Main /> */}
      <a-scene embedded arjs>
        <a-entity gltf-model="../public/scene.gltf" position="0 1 0" Crossorigin="anonymous" animation="property: rotation; to: 0 360 0; loop: true; dur: 3000"></a-entity>
        <a-marker-camera preset="hiro"></a-marker-camera>
      </a-scene>
    </div>
  );
}
export default App;
