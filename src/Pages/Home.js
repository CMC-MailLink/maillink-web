import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import HeaderLogo from "../images/HeaderLogo.png";
import DefaultProfile from "../images/DefaultProfile.png";
import MainIllust from "../images/MainIllust.png";
import WriteIcon from "../images/WriteIcon.png";
import SmallScreen from "../images/SmallScreen.png";

const Home = (props) => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 842px)",
  });

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

  const onClickLogOut = () => {
    console.log("logout");
  };

  const onClickMyPage = () => {
    console.log("mypage");
  };

  const onClickLogo = () => {
    navigate("/");
  };

  const onClickWrite = () => {
    navigate("/write");
  };
  return (
    <Container>
      <MainIllustImage src={MainIllust} />
      <Footer></Footer>
      <HeaderWrapper>
        <Header>
          <HeaderLogoImage src={HeaderLogo} onClick={onClickLogo} />
          <UserContainer>
            <LogOut onClick={onClickLogOut}>로그아웃</LogOut>
            <DefaultProfileImage src={DefaultProfile} onClick={onClickMyPage} />
          </UserContainer>
        </Header>
      </HeaderWrapper>
      <TitleWrapper>
        <TitleContainer>
          <TitleText1>메일로 연결되는 우리,</TitleText1>
          <TitleText2>메일링크</TitleText2>
          <TitleText3>
            웹사이트에서도 편하게 글을 작성하고 발행해보세요!
          </TitleText3>
          <WriteContainer onClick={onClickWrite}>
            <WriteIconImage src={WriteIcon}></WriteIconImage>
            <WriteText4>새글쓰기</WriteText4>
          </WriteContainer>
        </TitleContainer>
      </TitleWrapper>
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
const HeaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 66px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Header = styled.div`
  width: 842px;
  height: 66px;
  display: flex;
  align-items: center;
  position: relative;
`;
const HeaderLogoImage = styled.img`
  width: 137px;
  height: 25.64px;
  cursor: pointer;
`;
const UserContainer = styled.div`
  position: absolute;
  right: 0px;
`;
const DefaultProfileImage = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
`;
const LogOut = styled.button`
  all: unset;
  float: left;
  width: 98px;
  height: 35px;
  background-color: #f8f8f8;
  text-align: center;
  font-family: NotoSansKR-Medium;
  font-size: 14px;
  color: #3c3c3c;
  border-radius: 20.5px;
  margin-right: 20px;
  cursor: pointer;
`;
const TitleWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 201px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;
const TitleContainer = styled.div`
  width: 842px;
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
const WriteContainer = styled.div`
  margin-top: 40px;
  width: 110px;
  border-bottom: 2px solid #4562f1;
  cursor: pointer;
`;
const WriteText4 = styled.div`
  font-family: NotoSansKR-Bold;
  font-size: 22px;
  color: #4562f1;
`;
const WriteIconImage = styled.img`
  width: 20.53px;
  height: 18.75px;
  margin-top: 7px;
  margin-right: 5px;
  float: left;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: calc(100vh - 100px);
  background-color: #4562f1;
  z-index: 1;
`;
export default Home;
