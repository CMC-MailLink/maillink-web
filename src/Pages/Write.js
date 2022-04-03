import React from "react";
import styled from "styled-components";

import BackIcon from "../images/BackIcon.png";
import SendIcon from "../images/SendIcon.png";
import ReactQuill from "react-quill";
import "./Write.css";

const Write = () => {
  const onClickPreview = () => {
    console.log("Preview");
  };
  const onClickTemp = () => {
    console.log("Temp");
  };
  const onClickSend = () => {
    console.log("Send");
  };

  return (
    <Container>
      <HeaderWrapper>
        <Header>
          <BackIconImage src={BackIcon}></BackIconImage>
          <Preview onClick={onClickPreview}>모바일 미리보기</Preview>
          <Temp onClick={onClickTemp}>임시저장</Temp>
          <Send onClick={onClickSend}>
            <SendIconImage src={SendIcon}></SendIconImage>
            <SendText>발행하기</SendText>
          </Send>
        </Header>
      </HeaderWrapper>
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
          />
        </Editor>
      </EditorWrapper>
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
const Send = styled.button`
  all: unset;
  position: absolute;
  right: 0px;
  width: 129px;
  height: 35px;
  background-color: #4562f1;
  border-radius: 20.5px;
  margin-left: 40px;
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
  background-color: pink;
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
export default Write;
