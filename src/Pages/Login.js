import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import KakaoLogin from "react-kakao-login";
import AppleLogin from "react-apple-login";
import { API } from "../API";
import { setRefreshTokenToCookie } from "../Auth";
import AppContext from "../AppContext";

import LoginIllust from "../images/LoginIllust.png";
import MainLogo from "../images/MainLogo.png";
import KakaoLoginImage from "../images/KakaoLogin.png";
import AppleLoginImage from "../images/AppleLogin.png";

const Login = () => {
  const myContext = useContext(AppContext);

  const responseKaKao = async (data) => {
    console.log(data.profile.id);
    var result = await API.authLogin({
      socialType: "KAKAO",
      socialId: data.profile.id,
    });
    if (result) {
      handleLogin(result);
    }
  };
  const responseFail = (err) => {
    console.log(err);
  };

  function handleLogin(result) {
    if (result) {
      console.log(result);
      console.log("로그인 성공!");

      setRefreshTokenToCookie(result.token.refreshToken); // cookie에 refresh_token 저장
      myContext.setAccessToken(result.token.accessToken);

      if (result.userType === "READER") {
        myContext.setIsReader(true);
      }

      myContext.setIsLogged(true);
    } else {
      console.log("로그인 실패");
    }
  }
  return (
    <Container>
      <MainImage src={LoginIllust} />
      <LoginContainer>
        <MainLogoImage src={MainLogo} />
        <KakaoLogin
          jsKey={process.env.REACT_APP_KAKAO_KEY}
          buttonText="KaKao"
          onSuccess={responseKaKao}
          onFailure={responseFail}
          getProfile={true}
          render={({ onClick }) => {
            return (
              <KakaoLoginWrapper onClick={onClick}>
                <KakaoLoginButton src={KakaoLoginImage} />
              </KakaoLoginWrapper>
            );
          }}
        ></KakaoLogin>
        <AppleLogin
          clientId="com.mail--link.cmclogin"
          redirectURI="https://www.mail-link.co.kr/login/callback"
          responseType={"code id_token"}
          responseMode={"fragment"}
          render={(props) => (
            <AppleLoginButton
              onClick={props.onClick}
              src={AppleLoginImage}
            ></AppleLoginButton>
          )}
        />
        {/* <AppleLoginButton onClick={props} src={AppleLoginImage}></AppleLoginButton> */}

        <Line />
        <LoginText>기존 가입 경로를 통해 로그인해주세요</LoginText>
      </LoginContainer>
      <Footer></Footer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainImage = styled.img`
  width: 627.72px;
  position: absolute;
  bottom: 0px;
  margin-right: 548.86px;
`;
const LoginContainer = styled.div`
  height: 426px;
  width: 312px;
  margin-left: 639px;
  text-align: center;
`;
const MainLogoImage = styled.img`
  width: 283.65px;
`;
const KakaoLoginWrapper = styled.button`
  all: unset;
`;
const KakaoLoginButton = styled.img`
  width: 312px;
  margin-top: 77px;
`;
const AppleLoginButton = styled.img`
  margin-top: 18px;
  width: 312px;
`;
const Line = styled.div`
  height: 1px;
  width: 64px;
  background-color: #bebebe;
  margin: 39px auto;
`;
const LoginText = styled.div`
  font-family: NotoSansKR-Light;
  font-size: 12;
  color: #bebebe;
`;
const Footer = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 129px;
  background-color: #4562f1;
`;
export default Login;
