import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import QuilEditor from "./Pages/QuilEditor";
import ReadingEditor from "./Pages/ReadingEditor";
import Login from "./Pages/Login";
import LoginCallback from "./Pages/LoginCallback";

function App() {
  const RNListener = () => {
    /** react native 환경에서만 가능 */
    const listener = (event) => {
      const { data, type } = JSON.parse(event.data);
      if (type === "content") {
        // type이 TOKEN이기 때문에 이곳에 콘솔이 찍히게 됩니다.
        alert(data);
      }
    };

    if (window.ReactNativeWebView) {
      /** android */
      document.addEventListener("message", listener);
      /** ios */
      window.addEventListener("message", listener);
    } else {
      // 모바일이 아니라면 모바일 아님을 alert로 띄웁니다.
      alert("not mobile !!");
    }
    return null;
  };
  return (
    <RNListener>
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
    </RNListener>
  );
}

export default App;
