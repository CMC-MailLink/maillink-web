import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import ReactQuill from "react-quill";
import { API } from "../API";
import AppContext from "../AppContext";

import SmallScreen from "../images/SmallScreen.png";
import BackIcon from "../images/BackIcon.png";
import ReportIcon from "../images/ReportIcon.png";
import StarIcon from "../images/StarIcon.png";
import MessageIcon from "../images/MessageIcon.png";
import MobileLogo from "../images/MobileLogo.png";
import iphone13_1 from "../images/iphone13_1.png";
import iphone13_2 from "../images/iphone13_2.png";
import iphone13mini_1 from "../images/iphone13mini_1.png";
import iphone13mini_2 from "../images/iphone13mini_2.png";
import galaxys21_1 from "../images/galaxys21_1.png";
import galaxys21_2 from "../images/galaxys21_2.png";
import galaxyzflip3_1 from "../images/galaxyzflip3_1.png";
import galaxyzflip3_2 from "../images/galaxyzflip3_2.png";
import DefaultProfile from "../images/DefaultProfile.png";

const size = {
  iphone13: { width: "331.5px", height: "717.4px" },
  iphone13mini: { width: "306px", height: "663px" },
  galaxys21: { width: "306px", height: "680px" },
  galaxyzflip3: { width: "306px", height: "748px" },
};

const MobilePreview = (props) => {
  const myContext = useContext(AppContext);
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 842px)",
  });
  const [select, setSelect] = useState("iphone13");
  var today = new window.Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  if (month < 10) month = "0" + month;
  let date = today.getDate();
  if (date < 10) date = "0" + date;
  let hours = today.getHours();
  if (hours > 12) {
    var temp = hours - 12;
    if (temp < 10) temp = "0" + temp;
    hours = "오후 " + temp;
  } else {
    var temp = hours - 12;
    if (temp < 10) temp = "0" + temp;
    hours = "오전 " + temp;
  }
  let minutes = today.getMinutes();
  if (minutes < 10) minutes = "0" + minutes;

  const [imgUrl, setImgUrl] = useState("");
  const [nickName, setNickName] = useState("");

  const getUserInfo = async () => {
    console.log(myContext.accessToken);
    var result = await API.memberInfo({ accessToken: myContext.accessToken });
    console.log(result);
    setImgUrl(result.imgUrl);
    setNickName(result.nickName);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

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
      <Header select={select}>
        <HeaderItem onClick={() => setSelect("iphone13")}>
          <PhoneImage
            src={select === "iphone13" ? iphone13_2 : iphone13_1}
          ></PhoneImage>
          <HeaderItemTitle>아이폰 13</HeaderItemTitle>
        </HeaderItem>
        <HeaderItem onClick={() => setSelect("iphone13mini")}>
          <PhoneImage
            src={select === "iphone13mini" ? iphone13mini_2 : iphone13mini_1}
          ></PhoneImage>
          <HeaderItemTitle>아이폰 13 mini</HeaderItemTitle>
        </HeaderItem>
        <HeaderItem onClick={() => setSelect("galaxys21")}>
          <PhoneImage
            src={select === "galaxys21" ? galaxys21_2 : galaxys21_1}
          ></PhoneImage>
          <HeaderItemTitle>갤럭시 S21</HeaderItemTitle>
        </HeaderItem>
        <HeaderItem onClick={() => setSelect("galaxyzflip3")}>
          <PhoneImage
            src={select === "galaxyzflip3" ? galaxyzflip3_2 : galaxyzflip3_1}
          ></PhoneImage>
          <HeaderItemTitle>
            갤럭시 Z<br></br>플립3
          </HeaderItemTitle>
        </HeaderItem>
        <MobileLogoImage src={MobileLogo}></MobileLogoImage>
      </Header>
      <Mobile select={select}>
        <MobileHeader>
          <BackImage src={BackIcon}></BackImage>
          <ReportImage src={ReportIcon}></ReportImage>
          <StarImage src={StarIcon}></StarImage>
          <MessageImage src={MessageIcon}></MessageImage>
        </MobileHeader>
        <TitleHeader>
          <Title>
            {window.opener.document.getElementById("childTitle").value}
          </Title>
          <Date>
            {year}.{month}.{date} {hours}:{minutes}
          </Date>
        </TitleHeader>
        <AuthorHeader>
          <AuthorImage
            src={!imgUrl || imgUrl === "" ? DefaultProfile : imgUrl}
          ></AuthorImage>
          <AuthorName>{nickName}</AuthorName>
        </AuthorHeader>
        {/* <MobileBody> */}
        <ReactQuill
          style={{
            height: `${parseInt(size[select].height) - 114 - 70}px`,
            overflow: "scroll",
          }}
          className="ReadingEditor"
          readOnly
          modules={{
            toolbar: false,
          }}
          value={
            window.opener.document.getElementById("childContents").innerText
          }
          theme="snow"
        />
        {/* </MobileBody> */}
      </Mobile>
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
const Header = styled.div`
  width: 60px;
  height: ${(props) => size[props.select].height};
  border-right: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  float: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const HeaderItem = styled.div`
  width: 60px;
  height: 83px;
  border-bottom: 1px solid #ebebeb;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const PhoneImage = styled.img`
  width: 15.15px;
  height: 25px;
  margin-bottom: 7px;
`;
const HeaderItemTitle = styled.div`
  font-family: "NotoSansKR-Medium";
  font-size: 9px;
  color: #828282;
  text-align: center;
`;
const MobileLogoImage = styled.img`
  width: 33.64px;
  height: 22.62px;
  position: absolute;
  bottom: 20px;
`;
const Mobile = styled.div`
  float: left;
  width: ${(props) => size[props.select].width};
  height: ${(props) => size[props.select].height};
  border-right: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
`;
const MobileHeader = styled.div`
  height: 37px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #f8f8f8;
`;
const BackImage = styled.img`
  width: 6px;
  height: 11px;
  margin-left: 16px;
`;
const ReportImage = styled.img`
  width: 13.83px;
  height: 13.83px;
  position: absolute;
  right: 68px;
`;
const StarImage = styled.img`
  width: 13px;
  height: 12px;
  position: absolute;
  right: 41px;
`;
const MessageImage = styled.img`
  width: 17.14px;
  height: 17.02px;
  position: absolute;
  right: 14px;
`;
const TitleHeader = styled.div`
  width: 100%;
  height: 46px;
  border-bottom: 1px solid #f8f8f8;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 14px;
`;
const Title = styled.div`
  font-family: "NotoSansKR-Bold";
  font-size: 11px;
  color: #3c3c3c;
`;
const Date = styled.div`
  margin-top: 2px;
  font-family: "NotoSansKR-Regular";
  font-size: 8px;
  color: #bebebe;
`;
const AuthorHeader = styled.div`
  width: 100%;
  height: 28px;
  border-bottom: 1px solid #f8f8f8;
  display: flex;
  align-items: center;
  padding-left: 14px;
`;
const AuthorImage = styled.img`
  width: 18px;
  height: 18px;
  border-radius: 90px;
  margin-right: 7px;
`;
const AuthorName = styled.div`
  font-family: "NotoSansKR-Medium";
  font-size: 9px;
  color: #3c3c3c;
`;
const MobileBody = styled.div`
  height: ${(props) => parseInt(size[props.select].height) - 114 - 30}px;
  overflow: scroll;
  padding: 15px;
  word-break: break-all;
  white-space: normal;
`;
export default MobilePreview;
