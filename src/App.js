import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import MobileEditor from "./Pages/MobileEditor";
import MobileEditorTest from "./Pages/MobileEditorTest";
import Home from "./Pages/Home";
import QuilEditor from "./Pages/QuilEditor";
import ReadingEditor from "./Pages/ReadingEditor";
import Login from "./Pages/Login";
import LoginCallback from "./Pages/LoginCallback";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="/mobileeditor" element={<MobileEditor />} />
      <Route path="/mobileeditortest" element={<MobileEditorTest />} /> */}
      <Route path="/quileditor" element={<QuilEditor />} />
      <Route path="/readingeditor" element={<ReadingEditor />} />
      <Route path="/login" element={<Login></Login>}></Route>
      <Route
        path="/login/callback"
        element={<LoginCallback></LoginCallback>}
      ></Route>
    </Routes>
  );
}

export default App;
