import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import QuilEditorAndroid from "./Pages/QuilEditorAndroid";
import QuilEditorIOS from "./Pages/QuilEditorIOS";
import ReadingEditor from "./Pages/ReadingEditor";
import Login from "./Pages/Login";
import LoginCallback from "./Pages/LoginCallback";
import KakaoLoginCallback from "./Pages/KakaoLoginCallback";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/quileditorIOS" element={<QuilEditorIOS />} />
      <Route path="/quileditorAndroid" element={<QuilEditorAndroid />} />
      <Route path="/readingeditor" element={<ReadingEditor />} />
      <Route
        path="/oauth/callback/kakao"
        element={<KakaoLoginCallback></KakaoLoginCallback>}
      ></Route>
      <Route
        path="/login/callback"
        element={<LoginCallback></LoginCallback>}
      ></Route>
    </Routes>
  );
}

export default App;
