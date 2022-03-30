import React from "react";
import styled from "styled-components";
import MainLogin from "../images/MainLogin.png";
import MainLogo from "../images/MainLogo.png";
import KakaoLogin from "../images/KakaoLogin.png";
import AppleLogin from "../images/AppleLogin.png";

const Home = () => {
  return (
    <Container>
      <MainImage src={MainLogin} />
      <LoginContainer>
        <MainLogoImage src={MainLogo} />
        <KakaoLoginImage src={KakaoLogin} />
        <AppleLoginImage src={AppleLogin} />
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
const KakaoLoginImage = styled.img`
  width: 312px;
  margin-top: 77px;
`;
const AppleLoginImage = styled.img`
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
export default Home;
