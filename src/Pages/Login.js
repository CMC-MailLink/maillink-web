import React, { useEffect } from "react";
import styled from "styled-components";
import KakaoLogin from "react-kakao-login";

import LoginIllust from "../images/LoginIllust.png";
import MainLogo from "../images/MainLogo.png";
import KakaoLoginImage from "../images/KakaoLogin.png";
import AppleLoginImage from "../images/AppleLogin.png";

const Login = () => {
  const responseKaKao = (data) => {
    console.log(data.profile.id);
  };
  const responseFail = (err) => {
    console.log(err);
  };
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
        <AppleLoginButton src={AppleLoginImage} />
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
