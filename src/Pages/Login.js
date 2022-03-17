import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "500px",
        height: "500px",

        paddingTop: "100px",
        paddingLeft: "100px",
      }}
    >
      <TabBar></TabBar>
      <IndicatorBorder>
        <Rectangle></Rectangle>
        <Indicator></Indicator>
      </IndicatorBorder>
    </div>
  );
};

const TabBar = styled.div`
  width: 400px;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 -10px 20px -5px rgba(115, 115, 115, 0.75);
`;

const Indicator = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  background-color: #29fd53;
  border-radius: 50%;
`;

const IndicatorBorder = styled.div`
  position: absolute;
  top: 57px;
  left: 120px;
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 50%;
  padding-left: 10px;
  padding-top: 10px;
  box-shadow: 0 -10px 20px -5px rgba(115, 115, 115, 0.75);
`;

const Rectangle = styled.div`
  position: absolute;
  top: 43px;
  left: -10px;
  width: 200px;
  height: 60px;
  background-color: white;
`;

export default Login;
