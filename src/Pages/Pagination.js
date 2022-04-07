import styled from "styled-components";

const PageUl = styled.ul`
  position: absolute;
  bottom: 0;
  margin-bottom: -137px;
  float: center;
  text-align: center;
  color: white;
  padding: 1px;
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
`;

const PageSpan = styled.span`
  border-radius: 100%;
  color: white;
  background-color: #263a6c;
`;
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers[0]);
  console.log(pageNumbers[1]);
  return (
    <div>
      <PageUl>
        {pageNumbers.map((number) => (
          <PageLi key={number}>
            <PageSpan onClick={() => paginate(number)}>{number}</PageSpan>
          </PageLi>
        ))}
      </PageUl>
    </div>
  );
};

export default Pagination;
