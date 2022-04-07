import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MailBox = () => {
  const navigate = useNavigate();
  const [selectPublish, setSelectPublish] = useState(true);
  const [selectTemp, setSelectTemp] = useState(false);
  const [selectNew, setSelectNew] = useState(true);
  const [selectOld, setSelectOld] = useState(false);
  const [mailNum, setMailNum] = useState(21);

  const onClickPublish =  () =>{
    setSelectPublish(true);
    setSelectTemp(false);
  };
  const onClickTemp =  () =>{
    setSelectTemp(true);
     setSelectPublish(false);
  };
  const onClickNew =  () =>{
    setSelectNew(true);
    setSelectOld(false);
  };
  const onClickOld =  () =>{
    setSelectOld(true);
    setSelectNew(false);
  };
  return (
<>
    { selectPublish && !selectTemp ? (
    <>
        <PublishWritingText onClick = {onClickPublish}>
            발행글
        </PublishWritingText>
        <TemporaryWritingText2 onClick = {onClickTemp}>
            임시저장글
        </TemporaryWritingText2>
        <Border></Border>
    </>
    ) : (
    <>
        <PublishWritingText2 onClick = {onClickPublish}>
            발행글
        </PublishWritingText2>
        <TemporaryWritingText onClick = {onClickTemp}>
            임시저장글
        </TemporaryWritingText>
        <Border></Border>
    </>
    )}
    <MailNumText>
        총 <span style={{color: '#3C3C3C'}}>{mailNum}</span> 편
        { selectNew && !selectOld ? (
        <>
            <New onClick = {onClickNew}> 최신순 </New>
            <span style={{color: '#BEBEBE'}}>·</span>
            <Old2 onClick = {onClickOld}> 오래된순 </Old2>
        </>
        ) : (
        <>
            <New2 onClick = {onClickNew}> 최신순 </New2>
            <span style={{color: '#BEBEBE'}}>·</span>
            <Old onClick = {onClickOld}> 오래된순 </Old>
        </>
        )}
    </MailNumText>
    <MailListArea>

    </MailListArea>
</>
  );
};

const PublishWritingText = styled.div`
  position:absolute;
  font-family: NotoSansKR-Medium;
  color: #3C3C3C;
  font-size: 16px;
  margin-top: 187px;
  cursor: pointer;
  padding-bottom: 10px;
  border-bottom: 3px solid #4562F1;
  border-radius: 1.5px;
  z-index: 2;
`;
const TemporaryWritingText = styled.div`
  position:absolute;
  font-family: NotoSansKR-Medium;
  color: #3C3C3C;
  font-size: 16px;
  margin-top: 187px;
  margin-left: 81px;
  cursor: pointer;
  padding-bottom: 10px;
  border-bottom: 3px solid #4562F1 ; 
  border-radius: 1.5px;
  z-index: 2;
`;
const PublishWritingText2 = styled.div`
  position:absolute;
  font-family: NotoSansKR-Medium;
  color: #BEBEBE;
  font-size: 16px;
  margin-top: 187px;
  cursor: pointer;
`;
const TemporaryWritingText2 = styled.div`
  position:absolute;
  font-family: NotoSansKR-Medium;
  color: #BEBEBE;
  font-size: 16px;
  margin-top: 187px;
  margin-left: 81px;
  cursor: pointer;
`;

const Border = styled.div`
  position: absolute;
  margin-top: 221px;
  border-bottom: 1px solid #EBEBEB ; 
  width: 679px;
  z-index: 1;
`;

const MailNumText = styled.div`
 position: absolute;
 margin-top: 235px;
 font-family: NotoSansKR-Regular;
 color: #828282;
 font-size: 14px;
 padding-bottom: 10px;
 border-bottom: 1px solid #EBEBEB ; 
 border-radius: 1.5px;
 width: 679px;
`;
const New = styled.span`
 padding-left: 530px; 
 font-family: NotoSansKR-Medium;
 color: #3C3C3C;
 font-size: 13px;
 cursor: pointer;
`;
const New2 = styled.span`
 padding-left: 530px; 
 font-family: NotoSansKR-Regular;
 color: #BEBEBE;
 font-size: 13px;
 cursor: pointer;
`;
const Old = styled.span`
 font-family: NotoSansKR-Medium;
 color: #3C3C3C;
 font-size: 13px;
 cursor: pointer;
`;
const Old2 = styled.span`
  font-family: NotoSansKR-Regular;
  color: #BEBEBE;
  font-size: 13px;
  cursor: pointer;
`;
const MailListArea = styled.div `
  all: unset;
  position: absolute;
  background-color:red;
  width: 679px;
  height: 41.85vh;
  margin-top: 283px;
`;
export default MailBox;
