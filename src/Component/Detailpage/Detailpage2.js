import React from "react";
import styled from "styled-components";
import { FaStumbleuponCircle } from "react-icons/fa";
import { RiParkingBoxLine } from "react-icons/ri";
import { BsDoorOpen } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdStarRate } from "react-icons/md";

const Detailpage2 = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Tinywrap>
            <Tiny>
              Tiny home hosted by Suntaa
              <br />
              <nav>2 guests1 bedroom1 bed1 bath</nav>
            </Tiny>
            <Icon />
          </Tinywrap>
          <Self>
            <Selfwrap>
              <Icon3 />
              <Tinyself>
                Self check-in
                <br />
                <nav>You can check in with the doorman.</nav>
              </Tinyself>
            </Selfwrap>
            <Selfwrap>
              <Icon2 />
              <Tinyself>
                Park for free
                <br />
                <nav>
                  This is one of the few places in the area with free parking.
                </nav>
              </Tinyself>
            </Selfwrap>
          </Self>
        </Left>
        <Right>
          <Cashwrap>
            <Line1>
              <Dollarwrap>
                $190 <span>night</span>
              </Dollarwrap>
              <nav>
                <MdStarRate /> 4.67 · 27 reviews
              </nav>
            </Line1>
            <Column>
              <Box1>
                <BoxA>
                  <span></span>Check in <br /> 6/10/12
                </BoxA>
                <BoxB>
                  <span></span>Check out <br /> 6/10/12
                </BoxB>
              </Box1>
              <Box2>
                <span>
                  Guest <br />
                  <span2>1 guest</span2>
                </span>
                <Icon4 />
              </Box2>
            </Column>
            <Button>Reserve</Button>
            <Wont>You won't be charged yet</Wont>
            <Nightwrap>
              <Night>
                <nav1>$190 x 5 nights </nav1>
                <nav2>$950</nav2>
              </Night>
              <Night>
                <nav1>$190 x 5 nights </nav1>
                <nav2>$950</nav2>
              </Night>
              <Total>
                <nav1>Total before taxes</nav1>
                <nav2> $1,084</nav2>
              </Total>
            </Nightwrap>
          </Cashwrap>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Detailpage2;
const Total = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;
const Nightwrap = styled.div`
  width: 90%;
  margin-top: 15px;
`;
const Night = styled.div`
  margin-top: 10px;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  color: #626262;
`;
const Wont = styled.div`
  font-size: 0.9rem;
  color: grey;
`;
const Button = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 30px;
  border-radius: 5px;
  background-color: #ef2855;
  color: white;
  font-weight: 500;
`;
const Icon4 = styled(RiArrowDropDownLine)`
  /* width: 100px; */
`;
const Box1 = styled.div`
  width: 100%;
  height: 50px;
  /* background-color: blue; */
  display: flex;
  font-size: 0.9rem;
  border-bottom: 1px solid grey;
`;
const BoxA = styled.div`
  width: 50%;
  height: 50px;
  /* background-color: yellow; */
  border-radius: 10px 0px 0px 0px;
`;
const BoxB = styled.div`
  width: 50%;
  height: 50px;
  /* background-color: pink; */
  border-radius: 0px 10px 0px 0px;
  border-left: 1px solid gray;
`;
const Box2 = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* background-color: red; */
`;
const Column = styled.div`
  margin-top: 20px;
  /* height: 200px; */
  width: 90%;
  /* background-color: red; */
  border: 1px solid grey;
  border-radius: 10px;
`;
const Dollarwrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  span {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    color: grey;
    font-size: 1rem;
    /* background-color: red; */
  }
`;
const Right = styled.div`
  width: 45%;
  /* background-color: blue; */
  display: flex;
  justify-content: center;
`;
const Cashwrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: red; */
  width: 80%;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 10px;
`;
const Line1 = styled.div`
  width: 90%;
  /* background-color: brown; */
  display: flex;
  justify-content: space-between;

  align-items: center;
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    /* font-size: 2rem; */
    /* background-color: red; */
  }
`;
const Self = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  width: 55%;
`;
const Selfwrap = styled.div`
  display: flex;
  margin-top: 20px;
`;
const Icon2 = styled(RiParkingBoxLine)`
  height: 30px;
  width: 30px;
  /* border-radius: 100%; */
`;

const Icon3 = styled(BsDoorOpen)`
  height: 30px;
  width: 30px;
`;
const Tinyself = styled.div`
  margin-left: 10px;
  /* line-height: 20px; */
  font-weight: 500;
  /* background-color: green; */
  nav {
    font-size: 1rem;
    color: grey;
    font-weight: normal;
  }
`;
const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
`;
const Wrapper = styled.div`
  width: 85%;
  /* background-color: green; */
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  /* background-color: green; */
`;

const Left = styled.div`
  width: 55%;
  /* background-color: green; */
`;
const Tinywrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* background-color: red; */
  border-radius: 1px solid grey;
  margin-top: 15px;
`;
const Tiny = styled.div`
  font-size: 2rem;
  /* background-color: yellow; */
  nav {
    color: grey;
    font-size: 1.2rem;
  }
`;
const Icon = styled(FaStumbleuponCircle)`
  background-color: #b29d73;
  border-radius: 100%;
  height: 60px;
  width: 60px;
`;
