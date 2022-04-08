import React, { useEffect, useContext } from "react";
import { useLocation, useParams } from "react-router";
import jwt_decode from "jwt-decode";
import { API } from "../API";
import { setRefreshTokenToCookie, getCookieToken } from "../Auth";
import AppContext from "../AppContext";

const LoginCallback = () => {
  const myContext = useContext(AppContext);
  const location = useLocation(); //바뀐 부분

  useEffect(() => {
    var result = location.hash.split("id_token=");
    var decoded = jwt_decode(result[1]);
    console.log(decoded.sub);
    userLogin(decoded.sub);
  }, [location]);

  const userLogin = async (id) => {
    var result = await API.authLogin({
      socialType: "APPLE",
      socialId: id,
    });
    if (result) handleLogin(result);
  };

  const handleLogin = async (result) => {
    if (result) {
      localStorage.setItem("accessToken", result.token.accessToken);
      setRefreshTokenToCookie(result.token.refreshToken); // cookie에 refresh_token 저장

      var result2 = await API.memberInfo();
      if (result2.userType === "WRITER") {
        myContext.setIsReader(false);
      } else myContext.setIsReader(true);

      localStorage.setItem("isLogged", true);
      myContext.setIsLogged(true);
    } else {
      localStorage.setItem("isLogged", false);
      myContext.setIsLogged(false);
    }
  };

  return <div>로그인중</div>;
};

export default LoginCallback;
