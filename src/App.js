import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import MobileEditor from "./Pages/MobileEditor";
import MobileEditorTest from "./Pages/MobileEditorTest";
import Home from "./Pages/Home";
import QuilEditor from "./Pages/QuilEditor";
import ReadingEditor from "./Pages/ReadingEditor";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="/mobileeditor" element={<MobileEditor />} />
      <Route path="/mobileeditortest" element={<MobileEditorTest />} /> */}
      <Route path="/quileditor" element={<QuilEditor />} />
      <Route path="/readingeditor" element={<ReadingEditor />} />
    </Routes>
  );
}

export default App;
