import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import PagLeft from "../images/PagLeft.png";
import PagRight from "../images/PagRight.png";

const Pagination = ({
  postsPerPage,
  totalPosts,
  setCurrentPage,
  currentPage,
}) => {
  const pageNumbers = [1];
  const [selected, setSelected] = useState(false);

  for (let i = 2; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <PageUl>
        <PagLeftImg
          src={PagLeft}
          style={{ marginRight: pageNumbers.length === 1 ? "34px" : "16px" }}
          onClick={() => {
            if (currentPage > 1) setCurrentPage(currentPage - 1);
          }}
        ></PagLeftImg>
        {pageNumbers.map((number) => (
          <PageLi key={number}>
            <PageSpan
              onClick={() => setCurrentPage(number)}
              style={{ color: currentPage === number ? "#3C3C3C" : "#BEBEBE" }}
            >
              {number}
            </PageSpan>
          </PageLi>
        ))}
        <PagRightImg
          src={PagRight}
          style={{ marginLeft: pageNumbers.length === 1 ? "34px" : "16px" }}
          onClick={() => {
            if (currentPage < pageNumbers.length)
              setCurrentPage(currentPage + 1);
          }}
        ></PagRightImg>
      </PageUl>
    </div>
  );
};

const PageUl = styled.ul`
  margin-top: 50px;
  margin-bottom: 75px;
  padding-right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const PageLi = styled.li`
  display: inline-block;
  font-family: NotoSansKR-Medium;
  font-size: 14px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageSpan = styled.span`
  padding: 10px 16px;
  border-radius: 100%;
  cursor: pointer;
`;

const PagLeftImg = styled.img`
  padding-top: 3.3px;
  width: 7px;
  height: 15px;
  cursor: pointer;
`;

const PagRightImg = styled.img`
  padding-top: 3.7px;
  width: 7px;
  height: 15px;
  cursor: pointer;
`;

export default Pagination;
