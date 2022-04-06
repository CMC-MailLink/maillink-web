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
import Pencil from "../images/Pencil.png";
import { applyEntity } from "draft-js/lib/CharacterMetadata";

const MyPage = () => {
  const navigate = useNavigate();
  const [send, setSend] = useState(false);
  const [AuthorNameData, setAuthorNameData] = useState('하하호호')
  const now = new Date();
  const year = now.getFullYear();
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
  const onClickWritePage = () => {
    navigate("/write")
  };
  return (
    <Container>
      <HeaderWrapper>
        <Header>
          <HeaderLogoImage src={HeaderLogo} onClick={onClickLogo} />
          <UserContainer>
            <LogOut onClick={onClickLogOut}>로그아웃</LogOut>
            <DefaultProfileImage src={DefaultProfile} onClick={onClickMyPage} />
          </UserContainer>
        </Header>
      </HeaderWrapper>
      <BodyWrapper>
        <AuthorInfoArea>
          <AuthorInfoAreaTop>
            <DefaultProfileImage2 src={DefaultProfile}/>
          </AuthorInfoAreaTop>
          <AuthorInfoAreaBottom>
              안녕하세요, 작가님
          </AuthorInfoAreaBottom>
          <AuthorInfoAreaBottomName>
              {AuthorNameData}
          </AuthorInfoAreaBottomName>
        </AuthorInfoArea>
        <WriteButton onClick ={onClickWritePage}>
          <PencilImage src={Pencil}>
          </PencilImage>
           <WriteText>새글쓰기</WriteText>
        </WriteButton>
      </BodyWrapper>
      <FooterWrapper>
      </FooterWrapper>
      <FooterWrapper>
        <FooterCopyRightText>
          © {year} {AuthorNameData}
        </FooterCopyRightText>
      </FooterWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #FFFFFF; 
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
const BodyWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  background-color: #f8f8f8;
  width: 32.65vw;
  height: 100vh;
`;
const AuthorInfoArea = styled.div`
  width: 199px;
  height: 208px;
  margin-top: 118px;
  margin-right: 47px;
  font-family: NotoSansKR-Medium;
  background-color: #FFFFFF;
  border-radius: 15px;
  text-align: center;
`;
const WriteButton = styled.button`
  position: absolute;
  width: 197px;
  height: 34px;
  margin-top: 347px;
  margin-right: 47px;
  border-radius: 20.5px;
  background-color: #4562F1;
   cursor: pointer;
`;
const AuthorInfoAreaTop = styled.div`
  background-color: #4562F1;
  height: 71px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;
const AuthorInfoAreaBottom = styled.div`
  color: #BEBEBE;
  margin-top: 52px;
  font-size: 16px;
`;
const AuthorInfoAreaBottomName = styled.div`
  color: #3C3C3C;
  margin-top: 2px;
  font-size: 22px;
`;
const PencilImage = styled.img`
  all: unset;
  width: 12.16px;
  height: 11.81px;
`;
const WriteText = styled.div`
  all: unset;
  font-family: NotoSansKR-Medium;
  color: #FFFFFF;
  font-size: 14px;
  margin-left: 5px;
`;
const DefaultProfileImage2 = styled.img`
  width: 77px;
  height: 77px;
  margin-top: 33px;
`;
const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 73px;
  background-color: #EBEBEB;
  text-align: center;
`;
const FooterCopyRightText = styled.div`
  font-family: NotoSansKR-Medium;
  color: #BFBFBF;
  margin-top: 26px;
`;
export default MyPage;
