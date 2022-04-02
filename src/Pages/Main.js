import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import HeaderLogo from "../images/HeaderLogo.png";
import DefaultProfile from "../images/DefaultProfile.png";
import MainIllust from "../images/MainIllust.png";
import WriteIcon from "../images/WriteIcon.png";
import SmallScreen from "../images/SmallScreen.png";

const Main = (props) => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 842px)",
  });
  const [isLogged, setIsLogged] = useState(false);

  const onClickLogo = () => {
    navigate("/");
  };

  if (isSmallScreen) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={SmallScreen} style={{ height: "501.79px" }} />
      </div>
    );
  }

  return (
    <Container>
      <MainIllustImage src={MainIllust} />
      <Footer></Footer>
      <Header>
        <HeaderLogoImage src={HeaderLogo} onClick={onClickLogo} />

        <TitleContainer>
          <TitleText1>메일로 연결되는 우리,</TitleText1>
          <TitleText2>메일링크</TitleText2>
          <TitleText3>Coming Soon!</TitleText3>
        </TitleContainer>
      </Header>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: MainIllust;
  overflow: hidden;
`;
const MainIllustImage = styled.img`
  position: absolute;
  margin-top: 66px;
  width: 100%;
  height: auto;
  z-index: 2;
  background-color: white;
`;
const Header = styled.div`
  position: absolute;
  width: 100%;
  height: 66px;
  z-index: 3;
`;
const HeaderLogoImage = styled.img`
  width: 137px;
  height: 25.64px;
  margin-top: 20.36px;
  margin-left: 200px;
  cursor: pointer;
`;
const TitleContainer = styled.div`
  margin-top: 134px;
  margin-left: 200px;
`;
const TitleText1 = styled.div`
  font-family: NotoSansKR-Light;
  font-size: 45px;
  color: #3c3c3c;
`;
const TitleText2 = styled.div`
  font-family: NotoSansKR-Medium;
  font-size: 45px;
  color: #3c3c3c;
`;
const TitleText3 = styled.div`
  margin-top: 20px;
  font-family: NotoSansKR-Light;
  font-size: 22px;
  color: #bebebe;
`;
const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: calc(100vh - 100px);
  background-color: #4562f1;
  z-index: 1;
`;
export default Main;
