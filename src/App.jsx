import React from "react";
// import Header from "./components/Header";
// import Main from "./components/Main";

function App() {
  return (
    <div>
      {/* <Header />
      <Main /> */}
      <a-scene artoolkit>
        <a-text value="Hello, World!"></a-text>
        <a-marker-camera preset="Hiro"></a-marker-camera>
      </a-scene>
    </div>
  );
}
export default App;
