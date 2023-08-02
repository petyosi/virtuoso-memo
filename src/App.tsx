import React from "react";
import { Virtuoso } from "react-virtuoso";
import "./App.css";
import { itemContent } from "./itemContent";

function App() {
  return (
    <div className="App">
      <Virtuoso
        increaseViewportBy={{ top: 800, bottom: 800 }}
        totalCount={500}
        itemContent={(subIndex) => itemContent(subIndex)}
        components={{
          // empty space on top and bottom
          // careful: must have at least 70px on top for 'Install the browser extension' message!
          Header: () => <div style={{ height: "70px" }}></div>,
          Footer: () => <div style={{ height: "70px" }}></div>,
        }}
        style={{
          height: "100%",
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
        }}
      />
    </div>
  );
}

export default App;
