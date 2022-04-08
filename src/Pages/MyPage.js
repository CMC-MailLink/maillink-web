import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./Write.css";
import MailBox from "./MailBox";
import { API } from "../API";

import SmallScreen from "../images/SmallScreen.png";
import DefaultProfile from "../images/DefaultProfile.png";
import HeaderLogo from "../images/HeaderLogo.png";
import Pencil from "../images/Pencil.png";

const MyPage = () => {
  const navigate = useNavigate();
  const [selectPublish, setSelectPublish] = useState(true);
  const [selectTemp, setSelectTemp] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const now = new Date();
  const year = now.getFullYear();
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 842px)",
  });

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    var result = await API.memberInfo();
    setUserInfo(result);
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

  const onClickLogo = () => {
    navigate("/");
  };
  const onClickLogOut = () => {
    console.log("logout");
  };
  const onClickMyPage = () => {
    navigate("/MyPage");
  };
  const onClickWritePage = () => {
    navigate("/write");
  };
  const onClickPublish = () => {
    setSelectPublish(!selectPublish);
    setSelectTemp(false);
  };
  const onClickTemp = () => {
    setSelectTemp(!selectTemp);
    setSelectPublish(false);
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
        <LeftColor></LeftColor>
        <Body>
          {/* 왼쪽 프로필 부분 */}
          <BodyLeftWrapper>
            <AuthorInfoArea>
              <AuthorInfoAreaTop>
                <DefaultProfileImage2 src={DefaultProfile} />
              </AuthorInfoAreaTop>
              <AuthorInfoAreaBottom>안녕하세요, 작가님</AuthorInfoAreaBottom>
              <AuthorInfoAreaBottomName>
                {userInfo ? userInfo.nickName : ""}
              </AuthorInfoAreaBottomName>
            </AuthorInfoArea>
            <WriteButton onClick={onClickWritePage}>
              <PencilImage src={Pencil}></PencilImage>
              <WriteText>새글쓰기</WriteText>
            </WriteButton>
          </BodyLeftWrapper>

          {/* 오른쪽 메일함 부분 */}
          <BodyRightWrapper>
            <BodyRightAuthorName>
              {userInfo ? userInfo.nickName : ""}
            </BodyRightAuthorName>
            <BodyRightTitle>&nbsp;님이 보낸메일함입니다.</BodyRightTitle>
            {/* 메일함 */}
            <MailBox></MailBox>
          </BodyRightWrapper>
        </Body>
      </BodyWrapper>
      <FooterWrapper>
        <FooterCopyRightText>
          © {year} {userInfo ? userInfo.nickName : ""}
        </FooterCopyRightText>
      </FooterWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;
const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 66px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  box-shadow: 0px 4px 20px -15px rgba(0, 0, 0, 0.3);
`;
const Header = styled.div`
  width: 966px;
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
const BodyLeftWrapper = styled.div`
  position: relative;
  margin-top: 66px;
  width: 246px;
  z-index: 3;
`;
const AuthorInfoArea = styled.div`
  width: 199px;
  height: 208px;
  margin-top: 52px;
  margin-right: 47px;
  font-family: NotoSansKR-Medium;
  border-radius: 16px;
  text-align: center;
  background-color: white;
`;
const WriteButton = styled.div`
  width: 197px;
  height: 34px;
  margin-top: 21px;
  border-radius: 20.5px;
  background-color: #4562f1;
  cursor: pointer;
  text-align: center;
`;
const AuthorInfoAreaTop = styled.div`
  background-color: #4562f1;
  height: 71px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;
const AuthorInfoAreaBottom = styled.div`
  color: #bebebe;
  margin-top: 52px;
  font-size: 16px;
`;
const AuthorInfoAreaBottomName = styled.div`
  color: #3c3c3c;
  margin-top: 2px;
  font-size: 22px;
`;
const PencilImage = styled.img`
  all: unset;
  width: 12.16px;
  height: 11.81px;
  margin-top: 10px;
`;
const WriteText = styled.div`
  all: unset;
  font-family: NotoSansKR-Medium;
  color: #ffffff;
  font-size: 14px;
  margin-left: 5px;
`;
const DefaultProfileImage2 = styled.img`
  width: 77px;
  height: 77px;
  margin-top: 33px;
`;
const FooterWrapper = styled.div`
  bottom: 20px;
  width: 100%;
  height: 73px;
  background-color: #ebebeb;
  text-align: center;
  z-index: 3;
`;
const FooterCopyRightText = styled.div`
  font-family: NotoSansKR-Medium;
  color: #bfbfbf;
  margin-top: 26px;
`;

const BodyRightWrapper = styled.div`
  position: relative;
  margin-top: 66px;
  width: 720px;
  padding-left: 41px;
  padding-top: 66px;
  background-color: white;
  z-index: 3;
`;
const BodyRightAuthorName = styled.div`
  font-family: NotoSansKR-Medium;
  color: #3c3c3c;
  font-size: 26px;
  float: left;
`;
const BodyRightTitle = styled.div`
  font-family: NotoSansKR-Medium;
  color: #bebebe;
  font-size: 26px;
  margin-left: 8px;
`;
const BodyWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Body = styled.div`
  width: 966px;
  display: flex;
  justify-content: center;
  z-index: 2;
`;
const LeftColor = styled.div`
  position: absolute;
  height: 100%;
  left: 0;
  top: 0px;
  width: 50%;
  background-color: #f8f8f8;
  z-index: 0;
`;

export default MyPage;
