import React, { useEffect, useState } from "react";
import styled from "styled-components";

import HeaderLogo from "../images/HeaderLogo.png";

const Home = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <Container>
      <Header>
        <HeaderLogoImage src={HeaderLogo} />
      </Header>
      <Footer></Footer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const Header = styled.div`
  width: 100%;
  height: 66px;
  background-color: pink;
`;
const HeaderLogoImage = styled.img`
  width: 137px;
  position: absolute;
  top: 0px;
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 129px;
  background-color: #4562f1;
`;
export default Home;
