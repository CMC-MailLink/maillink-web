import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import QuilEditorAndroid from "./Pages/QuilEditorAndroid";
import QuilEditor from "./Pages/QuilEditor";
import ReadingEditor from "./Pages/ReadingEditor";
import Login from "./Pages/Login";
import LoginCallback from "./Pages/LoginCallback";
import KakaoLoginCallback from "./Pages/KakaoLoginCallback";
import Write from "./Pages/Write";
import Main from "./Pages/Main";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <Routes>
      <Route path="/" element={!isLogged ? <Login /> : <Home />} />
      {/* <Route path="/" element={<Main />} /> */}
      {/* <Route path="/home" element={<Home />} /> */}
      {/* <Route path="/Main" element={<Home />}></Route> */}
      <Route path="/write" element={<Write></Write>}></Route>

      {/* RNWebView */}
      <Route path="/quileditor" element={<QuilEditor />} />
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
