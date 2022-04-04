import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import ReactQuill from "react-quill";
import "./Write.css";

import BackIcon from "../images/BackIcon.png";
import SendIcon from "../images/SendIcon.png";
import SmallScreen from "../images/SmallScreen.png";
import DefaultProfile from "../images/DefaultProfile.png";
import SendImage from "../images/SendImage.png";
import CheckIcon from "../images/CheckIcon.png";
import MainIllust from "../images/MainIllust.png";
import HeaderLogo from "../images/HeaderLogo.png";

const MyPage = () => {
  const navigate = useNavigate();
  const [send, setSend] = useState(false);
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

  const onClickLogo = () => {
    navigate("/");
  };
  const onClickLogOut = () => {
    console.log("logout");
  };
  const onClickMyPage = () => {
    navigate("/MyPage")
  };

  return (
    <Container>
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

      </TitleWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  /* background-color: green; */
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
  position: 
  relative;
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
const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: calc(100vh - 100px);
  background-color: white;
  z-index: 1;
`;

export default MyPage;
