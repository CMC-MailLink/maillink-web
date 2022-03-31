import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import HeaderLogo from "../images/HeaderLogo.png";
import DefaultProfile from "../images/DefaultProfile.png";
import MainIllust from "../images/MainIllust.png";
import WriteIcon from "../images/WriteIcon.png";

const Home = (props) => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);

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
    console.log("Write");
  };
  return (
    <Container>
      <MainIllustImage src={MainIllust} />
      <Footer></Footer>
      <Header>
        <HeaderLogoImage src={HeaderLogo} onClick={onClickLogo} />
        <UserContainer>
          <LogOut onClick={onClickLogOut}>로그아웃</LogOut>
          <DefaultProfileImage src={DefaultProfile} onClick={onClickMyPage} />
        </UserContainer>
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
const UserContainer = styled.div`
  float: right;
  margin-top: 16px;
`;
const DefaultProfileImage = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 200px;
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
  border-radius: 20.5px;
  margin-right: 20px;
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
