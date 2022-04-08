import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { removeCookieToken } from "../Auth";
import AppContext from "../AppContext";
import { API } from "../API";

import ReaderIllust from "../images/ReaderIllust.png";
import HeaderLogo from "../images/HeaderLogo.png";
import DefaultProfile from "../images/DefaultProfile.png";

const Reader = () => {
  const myContext = useContext(AppContext);
  const navigate = useNavigate();
  const [imgUrl, setImgUrl] = useState("");

  const getUserInfo = async () => {
    var result = await API.memberInfo({ accessToken: myContext.accessToken });
    console.log(result);
    setImgUrl(result.imgUrl);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const onClickLogOut = () => {
    removeCookieToken();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("isLogged");
    myContext.setIsLogged(false);
    navigate("/");
  };

  const onClickLogo = () => {
    navigate("/");
  };
  return (
    <Container>
      <HeaderWrapper>
        <Header>
          <HeaderLogoImage src={HeaderLogo} onClick={onClickLogo} />
          <UserContainer>
            <LogOut onClick={onClickLogOut}>로그아웃</LogOut>
            <DefaultProfileImage
              src={!imgUrl || imgUrl === "" ? DefaultProfile : imgUrl}
            />
          </UserContainer>
        </Header>
      </HeaderWrapper>
      <img
        src={ReaderIllust}
        style={{
          width: "100vw",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></img>
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
const HeaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 66px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 20px -15px rgba(0, 0, 0, 0.3);
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
  border-radius: 90px;
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

export default Reader;
