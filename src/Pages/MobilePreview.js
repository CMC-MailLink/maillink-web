import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

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

const size = {
  iphone13: { width: "331.5px", height: "717.4px" },
  iphone13mini: { width: "306px", height: "663px" },
  galaxys21: { width: "306px", height: "680px" },
  galaxyzflip3: { width: "306px", height: "748px" },
};

const MobilePreview = (props) => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 842px)",
  });
  const [select, setSelect] = useState("iphone13");

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
          <Title>청춘예찬</Title>
          <Date>2021.02.11 오후 8:12</Date>
        </TitleHeader>
        <AuthorHeader>
          <AuthorImage></AuthorImage>
          <AuthorName>이작가</AuthorName>
        </AuthorHeader>
        <MobileBody select={select}>
          피가 광야에서 이는 위하여 없으면, 풍부하게 심장의 영락과 곳으로
          것이다. 끝까지 목숨을 청춘 거선의 무엇을 얼마나 철환하였는가? 같은
          천지는 꽃이 끝까지 피가 있다. 하여도 인간은 트고, 우리의 살 자신과
          피에 봄바람이다. 그들에게 피가 천지는 예수는 새 이것이다. 곳으로 청춘
          사랑의 청춘에서만 약동하다. 현저하게 무엇을 그들에게 봄바람이다. 피는
          귀는 구할 공자는 말이다. 때에, 그것은 장식하는 발휘하기 싶이 그들의
          때까지 피어나는 원질이 쓸쓸하랴? 일월과 따뜻한 꾸며 열락의 듣기만
          찾아다녀도, 살 것이다. 피가 광야에서 이는 위하여 없으면, 풍부하게
          심장의 영락과 곳으로 것이다. 끝까지 목숨을 청춘 거선의 무엇을 얼마나
          철환하였는가? 같은 천지는 꽃이 끝까지 피가 있다. 하여도 인간은 트고,
          우리의 살 자신과 피에 봄바람이다. 그들에게 피가 천지는 예수는 새
          이것이다. 곳으로 청춘 사랑의 청춘에서만 약동하다. 현저하게 무엇을
          그들에게 봄바람이다. 피는 귀는 구할 공자는 말이다. 때에, 그것은
          장식하는 발휘하기 싶이 그들의 때까지 피어나는 원질이 쓸쓸하랴? 일월과
          따뜻한 꾸며 열락의 듣기만 찾아다녀도, 살 것이다. 피가 광야에서 이는
          위하여 없으면, 풍부하게 심장의 영락과 곳으로 것이다. 끝까지 목숨을
          청춘 거선의 무엇을 얼마나 철환하였는가? 같은 천지는 꽃이 끝까지 피가
          있다. 하여도 인간은 트고, 우리의 살 자신과 피에 봄바람이다. 그들에게
          피가 천지는 예수는 새 이것이다. 곳으로 청춘 사랑의 청춘에서만
          약동하다. 현저하게 무엇을 그들에게 봄바람이다. 피는 귀는 구할 공자는
          말이다. 때에, 그것은 장식하는 발휘하기 싶이 그들의 때까지 피어나는
          원질이 쓸쓸하랴? 일월과 따뜻한 꾸며 열락의 듣기만 찾아다녀도, 살
          것이다. 피가 광야에서 이는 위하여 없으면, 풍부하게 심장의 영락과
          곳으로 것이다. 끝까지 목숨을 청춘 거선의 무엇을 얼마나 철환하였는가?
          같은 천지는 꽃이 끝까지 피가 있다. 하여도 인간은 트고, 우리의 살
          자신과 피에 봄바람이다. 그들에게 피가 천지는 예수는 새 이것이다.
          곳으로 청춘 사랑의 청춘에서만 약동하다. 현저하게 무엇을 그들에게
          봄바람이다. 피는 귀는 구할 공자는 말이다. 때에, 그것은 장식하는
          발휘하기 싶이 그들의 때까지 피어나는 원질이 쓸쓸하랴? 일월과 따뜻한
          꾸며 열락의 듣기만 찾아다녀도, 살 것이다. 피가 광야에서 이는 위하여
          없으면, 풍부하게 심장의 영락과 곳으로 것이다. 끝까지 목숨을 청춘
          거선의 무엇을 얼마나 철환하였는가? 같은 천지는 꽃이 끝까지 피가 있다.
          하여도 인간은 트고, 우리의 살 자신과 피에 봄바람이다. 그들에게 피가
          천지는 예수는 새 이것이다. 곳으로 청춘 사랑의 청춘에서만 약동하다.
          현저하게 무엇을 그들에게 봄바람이다. 피는 귀는 구할 공자는 말이다.
          때에, 그것은 장식하는 발휘하기 싶이 그들의 때까지 피어나는 원질이
          쓸쓸하랴? 일월과 따뜻한 꾸며 열락의 듣기만 찾아다녀도, 살 것이다. 피가
          광야에서 이는 위하여 없으면, 풍부하게 심장의 영락과 곳으로 것이다.
          끝까지 목숨을 청춘 거선의 무엇을 얼마나 철환하였는가? 같은 천지는 꽃이
          끝까지 피가 있다. 하여도 인간은 트고, 우리의 살 자신과 피에
          봄바람이다. 그들에게 피가 천지는 예수는 새 이것이다. 곳으로 청춘
          사랑의 청춘에서만 약동하다. 현저하게 무엇을 그들에게 봄바람이다. 피는
          귀는 구할 공자는 말이다. 때에, 그것은 장식하는 발휘하기 싶이 그들의
          때까지 피어나는 원질이 쓸쓸하랴? 일월과 따뜻한 꾸며 열락의 듣기만
          찾아다녀도, 살 것이다. 피가 광야에서 이는 위하여 없으면, 풍부하게
          심장의 영락과 곳으로 것이다. 끝까지 목숨을 청춘 거선의 무엇을 얼마나
          철환하였는가? 같은 천지는 꽃이 끝까지 피가 있다. 하여도 인간은 트고,
          우리의 살 자신과 피에 봄바람이다. 그들에게 피가 천지는 예수는 새
          이것이다. 곳으로 청춘 사랑의 청춘에서만 약동하다. 현저하게 무엇을
          그들에게 봄바람이다. 피는 귀는 구할 공자는 말이다. 때에, 그것은
          장식하는 발휘하기 싶이 그들의 때까지 피어나는 원질이 쓸쓸하랴? 일월과
          따뜻한 꾸며 열락의 듣기만 찾아다녀도, 살 것이다.
        </MobileBody>
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
const AuthorImage = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 90px;
  background-color: pink;
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
