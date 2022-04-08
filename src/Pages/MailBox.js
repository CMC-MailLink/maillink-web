import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PublishMailDummy from "./PublishMailDummy.json";
import Pagination from "./Pagination";
import RenderData from "./RenderData";
const MailBox = () => {
  const navigate = useNavigate();
  const [selectPublish, setSelectPublish] = useState(true);
  const [selectTemp, setSelectTemp] = useState(false);
  const [selectNew, setSelectNew] = useState(true);
  const [selectOld, setSelectOld] = useState(false);
  const [mailNum, setMailNum] = useState(0);
  const [publishMailData, setPublishMailData] = useState([]);
  const [postsPerPage, setPostsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  const onClickPublish = () => {
    setSelectPublish(true);
    setSelectTemp(false);
  };
  const onClickTemp = () => {
    setSelectTemp(true);
    setSelectPublish(false);
  };
  const onClickNew = () => {
    setSelectNew(true);
    setSelectOld(false);
  };
  const onClickOld = () => {
    setSelectOld(true);
    setSelectNew(false);
  };
  const onClickContent = () => {
    navigate("/");
  };
  function currentPosts(tmp) {
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }

  useEffect(() => {
    setPublishMailData(PublishMailDummy.Mail);
    setMailNum(publishMailData.length);
  }, [mailNum]);

  return (
    <>
      {selectPublish && !selectTemp ? (
        <>
          <PublishWritingText onClick={onClickPublish}>
            발행글
          </PublishWritingText>
          <TemporaryWritingText2 onClick={onClickTemp}>
            임시저장글
          </TemporaryWritingText2>
          <Border></Border>
        </>
      ) : (
        <>
          <PublishWritingText2 onClick={onClickPublish}>
            발행글
          </PublishWritingText2>
          <TemporaryWritingText onClick={onClickTemp}>
            임시저장글
          </TemporaryWritingText>
          <Border></Border>
        </>
      )}
      <MailNumText>
        총 <span style={{ color: "#3C3C3C", marginLeft: 1 }}>{mailNum}</span> 편
        {selectNew && !selectOld ? (
          <>
            <New onClick={onClickNew}> 최신순 </New>
            <span
              style={{
                color: "#BEBEBE",
                position: "absolute",
                right: 0,
                marginRight: 53,
              }}
            >
              ·
            </span>
            <Old2 onClick={onClickOld}> 오래된순 </Old2>
          </>
        ) : (
          <>
            <New2 onClick={onClickNew}> 최신순 </New2>
            <span
              style={{
                color: "#BEBEBE",
                position: "absolute",
                right: 0,
                marginRight: 53,
              }}
            >
              ·
            </span>
            <Old onClick={onClickOld}> 오래된순 </Old>
          </>
        )}
      </MailNumText>

      <MailListArea>
        {selectPublish ? (
          <RenderData
            posts={currentPosts(publishMailData)}
            onClickContent={onClickContent}
          ></RenderData>
        ) : null}
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={mailNum}
          paginate={setCurrentPage}
        >
          dddd
        </Pagination>
      </MailListArea>
    </>
  );
};

const PublishWritingText = styled.div`
  position: absolute;
  font-family: NotoSansKR-Medium;
  color: #3c3c3c;
  font-size: 16px;
  margin-top: 187px;
  cursor: pointer;
  padding-bottom: 10px;
  border-bottom: 3px solid #4562f1;
  border-radius: 1.5px;
  z-index: 2;
`;
const TemporaryWritingText = styled.div`
  position: absolute;
  font-family: NotoSansKR-Medium;
  color: #3c3c3c;
  font-size: 16px;
  margin-top: 187px;
  margin-left: 81px;
  cursor: pointer;
  padding-bottom: 10px;
  border-bottom: 3px solid #4562f1;
  border-radius: 1.5px;
  z-index: 2;
`;
const PublishWritingText2 = styled.div`
  position: absolute;
  font-family: NotoSansKR-Medium;
  color: #bebebe;
  font-size: 16px;
  margin-top: 187px;
  cursor: pointer;
`;
const TemporaryWritingText2 = styled.div`
  position: absolute;
  font-family: NotoSansKR-Medium;
  color: #bebebe;
  font-size: 16px;
  margin-top: 187px;
  margin-left: 81px;
  cursor: pointer;
`;

const Border = styled.div`
  position: absolute;
  margin-top: 221px;
  border-bottom: 1px solid #ebebeb;
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
  border-bottom: 1px solid #ebebeb;
  border-radius: 1.5px;
  width: 679px;
`;
const New = styled.span`
  position: absolute;
  right: 0;
  margin-right: 63px;
  font-family: NotoSansKR-Medium;
  color: #3c3c3c;
  font-size: 13px;
  cursor: pointer;
`;
const New2 = styled.span`
  position: absolute;
  right: 0;
  margin-right: 63px;
  font-family: NotoSansKR-Regular;
  color: #bebebe;
  font-size: 13px;
  cursor: pointer;
`;
const Old = styled.span`
  position: absolute;
  right: 0;
  margin-right: 3px;
  right: 0;
  font-family: NotoSansKR-Medium;
  color: #3c3c3c;
  font-size: 13px;
  cursor: pointer;
`;
const Old2 = styled.span`
  position: absolute;
  right: 0;
  margin-right: 3px;
  font-family: NotoSansKR-Regular;
  color: #bebebe;
  font-size: 13px;
  cursor: pointer;
`;
const MailListArea = styled.div`
  position: absolute;
  background-color: white;
  width: 679px;
  margin-top: 266px;
  z-index: 2;
`;

export default MailBox;
