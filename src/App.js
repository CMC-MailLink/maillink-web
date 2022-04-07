import React, { useState, createContext } from "react";
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
import MobilePreview from "./Pages/MobilePreview";
import Reader from "./Pages/Reader";

import AppContext from "./AppContext";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [isReader, setIsReader] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const value = {
    isLogged,
    setIsLogged,
    isReader,
    setIsReader,
    accessToken,
    setAccessToken,
  };

  return (
    <AppContext.Provider value={value}>
      <Routes>
        <Route path="/" element={!isLogged ? <Login /> : <Home />} />
        {/* <Route path="/" element={<Main />} /> */}
        {/* <Route path="/home" element={<Home />} /> */}
        {/* <Route path="/Main" element={<Home />}></Route> */}
        <Route path="/write" element={<Write></Write>}></Route>
        <Route
          path="/mobilepreview"
          element={<MobilePreview></MobilePreview>}
        ></Route>
        <Route path="/reader" element={<Reader></Reader>}></Route>

        {/* RNWebView */}
        <Route path="/quileditor" element={<QuilEditor />} />
        <Route path="/quileditorAndroid" element={<QuilEditorAndroid />} />
        <Route path="/readingeditor" element={<ReadingEditor />} />

        {/* logincallback */}
        <Route
          path="/oauth/callback/kakao"
          element={<KakaoLoginCallback></KakaoLoginCallback>}
        ></Route>
        <Route
          path="/login/callback"
          element={<LoginCallback></LoginCallback>}
        ></Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
