import React, { useState, createContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { API } from "./API";

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
import MyPage from "./Pages/MyPage";
import Reading from "./Pages/Reading";
import Reader from "./Pages/Reader";
import { removeCookieToken, getCookieToken } from "./Auth";

import AppContext from "./AppContext";
const queryClient = new QueryClient();

function App() {
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("isLogged") === "true" ? true : false
  );
  const [isReader, setIsReader] = useState(false);
  const value = {
    isLogged,
    setIsLogged,
    isReader,
    setIsReader,
  };

  useEffect(() => {
    //웹 내 cookie refresh token 확인
    var accessToken = localStorage.getItem("accessToken");
    if (!accessToken) return;
    console.log("accessToken : ", accessToken);
    if (!isTokenExpired(accessToken)) {
      console.log("accessToken 유효");
      axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
      getUserInfo();
    } else {
      console.log("accssToken 만료");
      var refreshToken = getCookieToken();
      console.log("refreshToken : ", refreshToken);
      if (!isTokenExpired(refreshToken)) {
        console.log("refreshToken 유효");
        getAccess({
          accessToken: accessToken,
          refreshToken: refreshToken,
        });
      } else {
        console.log("refreshToken 만료");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("isLogged");
        removeCookieToken();
      }
    }
  }, []);

  const getUserInfo = async () => {
    var result2 = await API.memberInfo();
    if (result2.userType === "WRITER") {
      setIsReader(false);
    } else setIsReader(true);
    setIsLogged(true);
  };

  const getAccess = async ({ accessToken, refreshToken }) => {
    var result = await API.getAccessUsingRefresh({
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
    console.log(result);
  };

  const isTokenExpired = (token) => {
    var decoded = jwt_decode(token);

    if (decoded.exp < Date.now() / 1000) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={value}>
        <Routes>
          <Route path="/" element={!isLogged ? <Login /> : <Home />} />
          <Route
            path="/reader"
            element={
              !isLogged ? <Navigate replace to="/" /> : <Reader></Reader>
            }
          />
          <Route
            path="/write"
            element={
              !isLogged ? (
                <Navigate replace to="/" />
              ) : isReader ? (
                <Navigate replace to="/reader" />
              ) : (
                <Write></Write>
              )
            }
          ></Route>
          <Route
            path="/mobilepreview"
            element={<MobilePreview></MobilePreview>}
          ></Route>
          <Route
            path="/reading/:id"
            element={
              !isLogged ? (
                <Navigate replace to="/" />
              ) : isReader ? (
                <Navigate replace to="/reader" />
              ) : (
                <Reading></Reading>
              )
            }
          ></Route>
          <Route
            path="/MyPage"
            element={
              !isLogged ? (
                <Navigate replace to="/" />
              ) : isReader ? (
                <Navigate replace to="/reader" />
              ) : (
                <MyPage />
              )
            }
          />

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
    </QueryClientProvider>
  );
}

export default App;
