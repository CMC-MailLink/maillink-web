import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import PagLeft from "../images/PagLeft.png";
import PagRight from "../images/PagRight.png";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  const [selected, setSelected] = useState(false);
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <PageUl>
        <PagLeftImg src={PagLeft}></PagLeftImg>
        {pageNumbers.map((number) => (
          <PageLi key={number}>
            <PageSpan onClick={() => paginate(number)}>{number}</PageSpan>
          </PageLi>
        ))}
        <PagRightImg src={PagRight}></PagRightImg>
      </PageUl>
    </div>
  );
};

const PageUl = styled.ul`
  position: flex;
  bottom: 0;
  margin-top: 50px;
  text-align: center;
`;

const PageLi = styled.li`
  display: inline-block;
  font-family: NotoSansKR-Medium;
  font-size: 14px;
  width: 25px;
`;

const PageSpan = styled.span`
  padding: 10px;
  border-radius: 100%;
  color: #bebebe;
  cursor: pointer;
`;

const PagLeftImg = styled.img`
  position: absolute;
  padding-top: 3.3px;
  margin-left: -10px;
  width: 7px;
  height: 15px;
  cursor: pointer;
`;

const PagRightImg = styled.img`
  position: absolute;
  padding-top: 3.7px;
  margin-left: 4px;
  width: 7px;
  height: 15px;
  cursor: pointer;
`;

export default Pagination;
