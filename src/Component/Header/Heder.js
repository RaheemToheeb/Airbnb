import React from "react";
import { FiGlobe, FiSearch } from "react-icons/fi";
import { FaLaptopHouse } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosContact } from "react-icons/io";

import styled from "styled-components";

const Heder = () => {
  const style = {
    color: "#ff385c",
    width: "60px",
    height: "60px",
  };
  const styles = {
    color: "white",
  };
  const stylesavatar = {
    color: "#858585",
    width: "30px",
    height: "30px",
  };
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo>
            <FaLaptopHouse style={style} />
            <span>Comfort</span>
          </Logo>
          <SearchHold>
            <span1>Anywhere</span1>
            <span2>Anyweek</span2>
            <span3>
              <span>Add guests</span>
              <nav>
                <FiSearch style={styles} />
              </nav>
            </span3>
          </SearchHold>
          <Layer3hold>
            <Box1>Become a host</Box1>
            <Icon>
              <FiGlobe />
            </Icon>
            <Box2>
              <IoIosContact style={stylesavatar} />
              <GiHamburgerMenu style={stylesavatar} />
            </Box2>
          </Layer3hold>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Heder;
const Container = styled.div`
  width: 100%;
  height: 80px;
  /* border-bottom: 1px solid grey; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: green; */
  /* @media (max-width: 1232px) {
    width: 95%;
  } */
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  height: 70px;
  /* background-color: green; */
`;
const Logo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 120px;
  font-family: oleo-script;
  color: #ff385c;
  font-weight: bold;
  cursor: pointer;
`;
const SearchHold = styled.div`
  @media screen and (max-width: 720px) {
    display: none;
  }

  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  height: 45px;
  border-radius: 50px;
  /* background-color: pink; */
  font-size: 0.8rem;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  cursor: pointer;
  span1 {
    color: #5e5e5e;
    font-weight: 500;
  }
  span2 {
    color: #5e5e5e;
    border-left: 1px solid gray;
    padding-left: 4px;
    font-weight: 500;
  }
  span3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120px;
    height: 40px;
    /* background-color: blue; */
    span {
      color: gray;
      padding-left: 4px;

      border-left: 1px solid gray;
      /* padding-left: 5px; */
    }
    nav {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 5px;
      background-color: #ff385c;
      height: 35px;
      width: 35px;
      /* padding: 5px; */
      border-radius: 100%;
    }
    span1 {
      border-left: 1px solid gray;
    }
  }
`;
const Layer3hold = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 250px;
  /* background-color: green; */
  @media screen and (max-width: 500px) {
    width: 150px;
    /* background-color: red; */
  }
`;
const Box1 = styled.div`
  color: #858585;
  width: 120px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const Box2 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80px;
  height: 40px;
  border-radius: 50px;
  /* background-color: blue; */
  border: 0.6px solid #dddddd;
`;
const Icon = styled.div``;
