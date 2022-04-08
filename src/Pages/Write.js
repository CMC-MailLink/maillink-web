import React, { useEffect, useRef, useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import ReactQuill from "react-quill";
import "./Write.css";
import AppContext from "../AppContext";

import BackIcon from "../images/BackIcon.png";
import SendIcon from "../images/SendIcon.png";
import SmallScreen from "../images/SmallScreen.png";
import SendImage from "../images/SendImage.png";
import CheckIcon from "../images/CheckIcon.png";
import SendSuccessIllust from "../images/SendSuccessIllust.png";
import ExitIcon from "../images/ExitIcon.png";
import { API } from "../API";

const Write = () => {
  const myContext = useContext(AppContext);
  const modal = useRef();
  const navigate = useNavigate();
  const { state } = useLocation();
  const mailId = state ? state.mailId : null;
  const [send, setSend] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 842px)",
  });
  const quillRef = useRef();
  const [contents, setContents] = useState("");
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (mailId) {
      getMail();
    }
  }, [mailId]);

  const getMail = async () => {
    var result = await API.tempMailReading({ tempMailId: mailId });
    setTitle(result.title);
    setContents(result.content);
  };

  const handleCloseModal = (e) => {
    if (
      send &&
      (!modal.current || !modal.current.contains(e.target)) &&
      !sendSuccess
    )
      setSend(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseModal);

    return () => {
      document.removeEventListener("mousedown", handleCloseModal);
    };
  });

  // useEffect(() => {
  //   if (quillRef.current) {
  //     const description = quillRef.current.getEditor().getText();
  //     setText(description);
  //   }
  // }, [contents]);

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

  const onClickPreview = () => {
    console.log("Preview");
    window.open(`http://localhost:3000/mobilepreview`, "_blank");
  };
  const onClickTemp = () => {
    console.log("Temp");
  };
  const onClickSend = () => {
    console.log("Send");
    setSend(true);
  };
  const onClickBack = () => {
    navigate(-1);
  };
  const onClickSendModal = () => {
    console.log("SendConfirm");
    setSendSuccess(true);
  };
  const onClickExit = () => {
    console.log("exit");
    navigate("/mypage");
  };

  return (
    <Container>
      {sendSuccess ? (
        <SuccessModalWrapper>
          <SuccessModal>
            <div>
              <SendSuccessImage src={SendSuccessIllust}></SendSuccessImage>
              <ExitIconImage
                onClick={onClickExit}
                src={ExitIcon}
              ></ExitIconImage>
            </div>
            <SuccessModalTitle>
              메일링크에<br></br>글이 발행되었습니다.
            </SuccessModalTitle>
            <SuccessModalBody>
              당신의 글을 읽을 수 있어 기쁩니다.<br></br>발행글은 모바일에서도
              확인해보세요
            </SuccessModalBody>
          </SuccessModal>
        </SuccessModalWrapper>
      ) : null}
      <HeaderWrapper>
        <Header>
          <BackIconImage src={BackIcon} onClick={onClickBack}></BackIconImage>
          <Preview onClick={onClickPreview}>모바일 미리보기</Preview>
          <Temp onClick={onClickTemp}>임시저장</Temp>
          <Send>
            <SendButton onClick={onClickSend}>
              <SendIconImage src={SendIcon}></SendIconImage>
              <SendText>발행하기</SendText>
            </SendButton>
            {send ? (
              <SendModal ref={modal}>
                <SendModalImage src={SendImage}></SendModalImage>
                <SendModalTitle>글을 발행하시겠습니까?</SendModalTitle>
                <SendModalDetail>
                  발행한 글은 수정이 불가합니다.
                </SendModalDetail>
                <SendModalButton onClick={onClickSendModal}>
                  <CheckIconImage src={CheckIcon}></CheckIconImage>
                  <SendModalButtonText>발행하기</SendModalButtonText>
                </SendModalButton>
              </SendModal>
            ) : null}
          </Send>
        </Header>
      </HeaderWrapper>
      <TitleWrapper>
        <Title>
          <TitleInput
            id="childTitle"
            type="text"
            placeholder="제목을 입력하세요."
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          ></TitleInput>
        </Title>
      </TitleWrapper>
      <EditorWrapper>
        <EditorToolbar></EditorToolbar>
        <Editor>
          <ReactQuill
            className="Write"
            modules={{
              toolbar: [
                [{ header: [1, 2, false] }],
                ["bold", "strike"],
                ["blockquote", { list: "bullet" }],
                [{ indent: "-1" }, { indent: "+1" }],
                [{ align: "" }, { align: "center" }, { align: "right" }],
                ["image"],
              ],
            }}
            theme="snow"
            placeholder="내용을 입력하세요"
            ref={quillRef}
            value={contents}
            onChange={setContents}
          />
        </Editor>
      </EditorWrapper>
      <div id="childContents" style={{ display: "none" }}>
        {contents}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  /* background-color: green; */
`;
const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 66px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
  z-index: 5;
`;
const Header = styled.div`
  width: 842px;
  height: 66px;
  display: flex;
  align-items: center;
  position: relative;
`;
const BackIconImage = styled.img`
  width: 9.5px;
  height: 19px;
  cursor: pointer;
`;
const Preview = styled.button`
  all: unset;
  float: left;
  width: 145px;
  height: 35px;
  background-color: #f8f8f8;
  text-align: center;
  font-family: NotoSansKR-Medium;
  font-size: 16px;
  color: #505050;
  border-radius: 20.5px;
  margin-left: 40px;
  cursor: pointer;
`;
const Temp = styled.button`
  all: unset;
  position: absolute;
  right: 150px;
  width: 98px;
  height: 35px;
  background-color: #f1f3ff;
  text-align: center;
  font-family: NotoSansKR-Medium;
  font-size: 16px;
  color: #4562f1;
  border-radius: 20.5px;
  margin-left: 40px;
  cursor: pointer;
`;
const Send = styled.div`
  all: unset;
  position: absolute;
  right: 0px;
  margin-left: 40px;
`;
const SendButton = styled.button`
  all: unset;
  width: 129px;
  height: 35px;
  background-color: #4562f1;
  border-radius: 20.5px;
  cursor: pointer;
`;
const SendIconImage = styled.img`
  width: 17.05px;
  height: 20.59px;
  float: left;
  margin-left: 20px;
  margin-right: 8px;
`;
const SendText = styled.div`
  width: 60px;
  font-family: NotoSansKR-Medium;
  font-size: 16px;
  color: #ffffff;
  float: left;
`;
const EditorWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  z-index: 2;
`;
const Editor = styled.div`
  width: 842px;
`;
const EditorToolbar = styled.div`
  position: fixed;
  top: 66px;
  width: 100%;
  height: 62px;
  background-color: white;
  top: 66px;
  box-shadow: 0px 4px 20px -15px rgba(0, 0, 0, 0.3);
  z-index: 2;
`;
const SendModal = styled.div`
  position: absolute;
  top: 51px;
  left: -90px;
  width: 220px;
  height: 248px;
  border-radius: 15px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;
const SendModalImage = styled.img`
  margin-top: 13px;
  width: 145px;
  height: 142px;
  display: block;
`;
const SendModalTitle = styled.div`
  font-family: NotoSansKR-Medium;
  font-size: 14px;
  color: #3c3c3c;
`;
const SendModalDetail = styled.div`
  font-family: NotoSansKR-Light;
  font-size: 11px;
  color: #828282;
`;
const SendModalButton = styled.button`
  all: unset;
  margin-top: 13px;
  width: 104px;
  height: 28px;
  background-color: white;
  border-radius: 20.5px;
  cursor: pointer;
  border: 1px solid #ebebeb;
`;
const CheckIconImage = styled.img`
  width: 11px;
  height: 8px;
  float: left;
  margin-left: 17px;
  margin-right: 8px;
  margin-top: 5px;
`;
const SendModalButtonText = styled.div`
  width: 50px;
  font-family: NotoSansKR-Medium;
  font-size: 12px;
  color: #4562f1;
  float: left;
`;
const TitleWrapper = styled.div`
  position: absolute;
  top: 128px;
  width: 100%;
  height: 100px;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  width: 842px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TitleInput = styled.input`
  all: unset;
  width: 742px;
  height: 100px;
  font-family: "NotoSansKR-Medium";
  font-size: 26px;
  color: #3c3c3c;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #bebebe;
  }
  :-ms-input-placeholder {
    color: #bebebe;
  }
  border-bottom: 1px solid #ebebeb;
`;

const SuccessModalWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.15);
  z-index: 1000000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SuccessModal = styled.div`
  position: relative;
  width: 330px;
  height: 402px;
  border-radius: 15px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const SendSuccessImage = styled.img`
  width: 211px;
  height: 218px;
`;
const SuccessModalTitle = styled.div`
  font-family: "NotoSansKR-Medium";
  font-size: 20px;
  margin-top: 13px;
  margin-bottom: 10px;
  text-align: center;
`;
const SuccessModalBody = styled.div`
  font-family: "NotoSansKR-Regular";
  font-size: 15px;
  color: #bebebe;
  text-align: center;
`;
const ExitIconImage = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 25px;
  right: 25px;
  cursor: pointer;
`;

export default Write;
