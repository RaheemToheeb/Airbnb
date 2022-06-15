import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdStarRate } from "react-icons/md";
import data from "../Data/Surfdata.json";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Surf = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <Container>
      <Wrapper>
        {data?.map((props) => {
          return (
            <Contain key={props.id} data-aos="fade-right" to={"/Detail"}>
              <Image src={props.image} alt="" />
              <Text>
                <nav>
                  {props.state}
                  <span>
                    5.0 <MdStarRate />
                  </span>
                </nav>
                <Nav>
                  <nava>Hosted by Adeyemi</nava>
                  <navb>Jun 1 – 6</navb>
                </Nav>
                <nav>$51 per night</nav>
              </Text>
            </Contain>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Surf;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  width: 1100px;
  height: 90%;
  flex-wrap: wrap;

  /* background-color: yellow; */
`;

const Contain = styled(Link)`
  display: flex;
  flex-direction: column;
  margin: 12px;
  /* align-items: center; */
  /* justify-content: center; */
  /* background-color: green; */
`;

const Image = styled.img`
  height: 250px;
  width: 250px;
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  @media only screen and (max-width: 1024px) {
    height: 300px;
    width: 300px;
  }
  @media only screen and (max-width: 768px) {
    height: 350px;
    width: 350px;
  }
  @media only screen and (max-width: 425px) {
    height: 400px;
    width: 400px;
  }
`;

const Text = styled.div`
  /* background-color: red; */
  nava {
    color: #b5b6b0;
  }

  navb {
    color: #b5b6b0;
  }
  nav {
    font-size: 0.9rem;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
  }
`;
