import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { MdIosShare } from "react-icons/md";
import { BsHeart } from "react-icons/bs";

import "aos/dist/aos.css";

const Detailpage = () => {
  return (
    <Container>
      <Wrapper>
        <Layer1>
          <Title>Villa La Quinta</Title>
          <Reviewwrap>
            <Rating>
              <AiFillStar /> 4.85 . 94reviews : Superhost . <span></span>La
              Quinta,Canarias, Spain
            </Rating>
            <Share>
              <Nav>
                <MdIosShare />
                <span>Share</span>
              </Nav>
              <Nav>
                {" "}
                <BsHeart />
                <span>Save</span>
              </Nav>
            </Share>
          </Reviewwrap>
        </Layer1>
        <Layer2>
          <Image1 src="/Image/ikogosi2.jpg" />
          <Imagewrap2>
            <ImageA>
              <img src="/Image/ikogosi4.jpg" />
              <img src="/Image/ikogosi13.jpg" />
            </ImageA>
            <ImageB>
              <img src="/Image/ikogosi6.jpg" />
              <img src="/Image/toheeb.jpg" />
            </ImageB>
          </Imagewrap2>
        </Layer2>
      </Wrapper>
    </Container>
  );
};

export default Detailpage;
const Layer2 = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  width: 600px;
  margin-top: 20px;
`;
// const Image2 = styled.div``
const Image1 = styled.img`
  height: 360px;
  width: 600px;
  /* object-fit: contain; */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* background-color: red; */
`;
const ImageA = styled.div`
  display: flex;
  width: 570px;

  /* background-color: yellow; */
  margin-right: 2px;
  img {
    height: 180px;
    width: 420px;
    object-fit: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
const ImageB = styled.div`
  display: flex;
  width: 570px;
  /* background-color: red; */
  margin-top: 10px;
  img {
    /* margin-right: 3px; */

    height: 180px;
    width: 420px;
    object-fit: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
const Imagewrap2 = styled.div`
  /* background-color: blue; */
  /* width: 600px; */
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
`;
const Wrapper = styled.div`
  width: 85%;
  /* background-color: green; */
`;
const Layer1 = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;
const Reviewwrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  /* background-color: yellow; */
  margin-top: 10px;
`;
const Rating = styled.div`
  /* background-color: pink; */
  width: 50%;
  text-decoration: none;
`;
const Title = styled.div`
  font-size: 1.5rem;
`;
const Share = styled.div`
  /* background-color: blue; */
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

const Nav = styled.div`
  /* background-color: pink; */
  width: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
