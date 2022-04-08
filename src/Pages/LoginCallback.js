import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import jwt_decode from "jwt-decode";

const LoginCallback = () => {
  const location = useLocation(); //바뀐 부분

  useEffect(() => {
    var result = location.hash.split("id_token=");
    var decoded = jwt_decode(result[1]);
    console.log(decoded.sub);
  }, [location]);
  return <div>로그인중</div>;
};

export default LoginCallback;
