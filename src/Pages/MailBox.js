import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Pagination from "./Pagination";
import RenderData from "./RenderData";
import NoMail from "../images/NoMail.png";
import { API } from "../API";

const MailBox = () => {
  const navigate = useNavigate();
  const [selectPublish, setSelectPublish] = useState(true);
  const [selectNew, setSelectNew] = useState(true);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [publishList, setPublishList] = useState([]);
  const [tempList, setTempList] = useState([]);

  useEffect(() => {
    getPublishing();
    getTemp();
  }, []);

  useEffect(() => {
    if (selectPublish) sortPublishing();
    else sortTemp();
  }, [selectNew, selectPublish]);

  const getPublishing = async () => {
    var result = await API.writerGetPublishing();
    var temp = result.mailList.slice().sort(function (a, b) {
      if (a.publishedTime >= b.publishedTime) {
        return selectNew ? -1 : 1;
      } else if (a.publishedTime < b.publishedTime) {
        return selectNew ? 1 : -1;
      }
    });
    setPublishList(temp);
  };

  const sortPublishing = () => {
    var temp = publishList.slice().sort(function (a, b) {
      if (a.publishedTime >= b.publishedTime) {
        return selectNew ? -1 : 1;
      } else if (a.publishedTime < b.publishedTime) {
        return selectNew ? 1 : -1;
      }
    });
    setPublishList(temp);
  };

  const sortTemp = () => {
    var temp = tempList.slice().sort(function (a, b) {
      if (a.tempSaveTime >= b.tempSaveTime) {
        return selectNew ? -1 : 1;
      } else if (a.tempSaveTime < b.tempSaveTime) {
        return selectNew ? 1 : -1;
      }
    });
    setTempList(temp);
  };

  const getTemp = async () => {
    var result = await API.writerGetSaving();
    setTempList(result);
  };

  const onClickPublish = () => {
    setSelectPublish(true);
    setCurrentPage(1);
  };
  const onClickTemp = () => {
    setSelectPublish(false);
    setCurrentPage(1);
  };
  const onClickNew = () => {
    setSelectNew(true);
  };
  const onClickOld = () => {
    setSelectNew(false);
  };
  const onClickContentReading = (id) => {
    navigate(`/reading/${id}`);
  };
  const onClickContentWriting = (id) => {
    navigate(`/write`);
  };
  function currentPosts(tmp) {
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }

  return (
    <Container>
      <HeaderWrapper>
        <PublishWritingText
          onClick={onClickPublish}
          style={{ color: selectPublish ? "#3c3c3c" : "#bebebe" }}
        >
          발행글
          {selectPublish ? <BorderPublish></BorderPublish> : null}
        </PublishWritingText>
        <TemporaryWritingText
          onClick={onClickTemp}
          style={{ color: !selectPublish ? "#3c3c3c" : "#bebebe" }}
        >
          임시저장글
          {!selectPublish ? <BorderTemp></BorderTemp> : null}
        </TemporaryWritingText>
      </HeaderWrapper>
      <Border></Border>

      <MailNumText>
        총&nbsp;
        <span style={{ color: "#3C3C3C", marginLeft: 1 }}>
          {selectPublish
            ? publishList
              ? publishList.length
              : "0"
            : tempList
            ? tempList.length
            : "0"}
        </span>
        &nbsp;편
        <OrderWrapper>
          <New
            onClick={onClickNew}
            style={{ color: selectNew ? "#3c3c3c" : "#bebebe" }}
          >
            최신순
          </New>
          <span
            style={{
              color: "#BEBEBE",
              margin: "0 6px",
            }}
          >
            ·
          </span>
          <Old
            onClick={onClickOld}
            style={{ color: !selectNew ? "#3c3c3c" : "#bebebe" }}
          >
            오래된순
          </Old>
        </OrderWrapper>
      </MailNumText>
      <MailListArea>
        {selectPublish ? (
          publishList && publishList.length ? (
            <RenderData
              selectPublish={selectPublish}
              posts={
                publishList
                  ? publishList.slice(
                      (currentPage - 1) * 10,
                      (currentPage - 1) * 10 + 10
                    )
                  : []
              }
              onClickContent={onClickContentReading}
            ></RenderData>
          ) : (
            <BlankContainer>
              <NoMailImage src={NoMail} />
            </BlankContainer>
          )
        ) : tempList && tempList.length ? (
          <RenderData
            selectPublish={selectPublish}
            posts={tempList ? tempList : []}
            onClickContent={onClickContentWriting}
          ></RenderData>
        ) : (
          <BlankContainer>
            <NoMailImage src={NoMail} />
          </BlankContainer>
        )}
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={
            selectPublish
              ? publishList
                ? publishList.length
                : 0
              : tempList
              ? tempList.length
              : 0
          }
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        >
          dddd
        </Pagination>
      </MailListArea>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 22px;
  margin-bottom: 17px;
`;
const PublishWritingText = styled.div`
  font-family: NotoSansKR-Medium;
  width: 50px;
  font-size: 16px;
  cursor: pointer;
  float: left;
  text-align: center;
  z-index: 2;
`;
const BorderPublish = styled.div`
  position: absolute;
  margin-top: 17px;
  margin-left: 4px;
  width: 41px;
  height: 3px;
  border-radius: 1.5px;
  background-color: #4562f1;
  z-index: 2;
`;
const TemporaryWritingText = styled.div`
  font-family: NotoSansKR-Medium;
  width: 77px;
  font-size: 16px;
  margin-left: 31px;
  cursor: pointer;
  text-align: center;
  z-index: 2;
`;
const BorderTemp = styled.div`
  position: absolute;
  margin-top: 17px;
  margin-left: 18px;
  width: 41px;
  height: 3px;
  border-radius: 1.5px;
  background-color: #4562f1;
  z-index: 2;
`;

const Border = styled.div`
  position: absolute;
  top: 166px;
  border-bottom: 1px solid #ebebeb;
  width: 679px;
  z-index: 1;
`;

const MailNumText = styled.div`
  position: relative;
  margin-top: 3px;
  font-family: NotoSansKR-Regular;
  color: #828282;
  font-size: 14px;
  padding: 10px 0px;
  border-bottom: 1px solid #ebebeb;
  border-radius: 1.5px;
  width: 679px;
  z-index: 1;
`;
const OrderWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 10px;
`;
const New = styled.span`
  font-family: NotoSansKR-Medium;
  font-size: 13px;
  cursor: pointer;
`;
const Old = styled.span`
  font-family: NotoSansKR-Regular;
  font-size: 13px;
  cursor: pointer;
`;
const MailListArea = styled.div`
  background-color: white;
  width: 679px;
  z-index: 2;
`;

const BlankContainer = styled.div`
  width: 100%;
  height: 353px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NoMailImage = styled.img`
  width: 366px;
  height: 214px;
`;

export default MailBox;
