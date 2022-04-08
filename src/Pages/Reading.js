import React, { useEffect, useRef, useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import ReactQuill from "react-quill";
import "./Reading.css";
import { useParams } from "react-router-dom";
import { API } from "../API";
import AppContext from "../AppContext";
import { removeCookieToken } from "../Auth";

import SmallScreen from "../images/SmallScreen.png";
import DefaultProfile from "../images/DefaultProfile.png";
import HeaderLogo from "../images/HeaderLogo.png";
import BackIcon from "../images/BackIcon.png";

const Reading = () => {
  let { id } = useParams();
  const myContext = useContext();
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const now = new Date();
  const year = now.getFullYear();
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 842px)",
  });
  const quillRef = useRef();

  useEffect(() => {
    getMail();
  }, []);

  const getMail = async () => {
    var result = await API.mailReading({ mailId: id });
    console.log(result);
    setMail(result);
  };

  const onClickLogo = () => {
    navigate("/");
  };
  const onClickLogOut = () => {
    removeCookieToken();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("isLogged");
    myContext.setIsLogged(false);
    navigate("/");
  };
  const onClickMyPage = () => {
    navigate("/MyPage");
  };
  const onClickBack = () => {
    navigate(-1);
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
      <HeaderWrapper>
        <Header>
          <HeaderLogoImage src={HeaderLogo} onClick={onClickLogo} />
          <UserContainer>
            <LogOut onClick={onClickLogOut}>로그아웃</LogOut>
            <DefaultProfileImage src={DefaultProfile} onClick={onClickMyPage} />
          </UserContainer>
        </Header>
      </HeaderWrapper>

      <EditorWrapper>
        <EditorHeader>
          <BackHeader>
            <BackIconImage src={BackIcon} onClick={onClickBack}></BackIconImage>
            <Title>{mail ? mail.title : ""}</Title>
          </BackHeader>
          <AuthorHeader>
            <DefaultProfileImage
              src={
                mail
                  ? !mail.imgUrl || mail.imgUrl === ""
                    ? DefaultProfile
                    : mail.imgUrl
                  : ""
              }
              style={{ cursor: "default", marginRight: "12px" }}
            />
            {mail ? mail.writerNickname : ""}
            <DateText>{mail ? mail.publishedTime.slice(0, 10) : null}</DateText>
          </AuthorHeader>
        </EditorHeader>
        <Editor>
          <ReactQuill
            className="Reading"
            readOnly
            ref={quillRef}
            modules={{
              toolbar: false,
            }}
            value={mail ? mail.content : ""}
            theme="snow"
          />
        </Editor>
      </EditorWrapper>
      <FooterWrapper>
        <FooterCopyRightText>
          © {year} {mail ? mail.writerNickname : ""}
        </FooterCopyRightText>
      </FooterWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: auto;
  top: 0px;
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
  border-radius: 90px;
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
const EditorWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f8f8f8;
  z-index: 2;
`;
const Editor = styled.div`
  width: 842px;
  min-height: calc(100vh - 66px);
  background-color: white;
`;
const EditorHeader = styled.div`
  margin-top: 66px;
  width: 842px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const BackHeader = styled.div`
  width: 742px;
  padding: 30px 0px;
  border-bottom: 1px solid #ebebeb;
`;
const BackIconImage = styled.img`
  width: 9.5px;
  height: 19px;
  cursor: pointer;
`;
const Title = styled.div`
  margin-top: 30px;
  font-family: "NotoSansKR-Medium";
  font-size: 26px;
  color: #3c3c3c;
`;
const AuthorHeader = styled.div`
  width: 742px;
  position: relative;
  padding: 10px 0px;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  align-items: center;
`;
const DateText = styled.div`
  position: absolute;
  right: 0px;
  font-family: "NotoSansKR-Regular";
  font-size: 14px;
  color: #bebebe;
`;
const FooterWrapper = styled.div`
  bottom: 20px;
  width: 100%;
  height: 73px;
  background-color: #ebebeb;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;
const FooterCopyRightText = styled.div`
  font-family: NotoSansKR-Medium;
  color: #bfbfbf;
`;
export default Reading;
