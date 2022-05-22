import React from "react";
import styled from "styled-components";
import { GiMountainCave } from "react-icons/gi";
import { MdNavigateNext } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { RiFilterOffLine } from "react-icons/ri";
import { FaUmbrellaBeach } from "react-icons/fa";
import { MdPool } from "react-icons/md";
import { MdMapsHomeWork } from "react-icons/md";
import { MdSurfing } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { GiSpeedBoat } from "react-icons/gi";
import { IoMdContact } from "react-icons/io";

const Layer1 = () => {
  const style = { height: "30px", width: "30px" };
  return (
    <Container>
      <Wrapper>
        <IconLayer1>
          <Contain>
            <span>
              <MdMapsHomeWork style={style} />
            </span>
            <nav>Design</nav>
          </Contain>
          <ContainH>
            <span>
              <IoMdContacts style={style} />
            </span>
            <nav>Shared Homes</nav>
          </ContainH>
          <Contain>
            <span>
              <IoMdContact style={style} />
            </span>
            <nav>Single</nav>
          </Contain>
          <Contain>
            <span>
              <MdSurfing style={style} />
            </span>
            <nav>Surfing</nav>
          </Contain>
          <Contain>
            <span>
              <FaCarSide style={style} />
            </span>
            <nav>Cars</nav>
          </Contain>

          <Contain>
            <span>
              <MdPool style={style} />
            </span>
            <nav>Amazing pools</nav>
          </Contain>
          <ContainH>
            <span>
              <GiSpeedBoat style={style} />
            </span>
            <nav>Shared Homes</nav>
          </ContainH>
          <Contain>
            <span>
              <GiMountainCave style={style} />
            </span>
            <nav>Cave</nav>
          </Contain>

          <Contain>
            <span>
              <FaUmbrellaBeach style={style} />
            </span>
            <nav>Beach</nav>
          </Contain>
          <ContainH>
            <span>
              <IoMdContacts style={style} />
            </span>
            <nav>Shared Homes</nav>
          </ContainH>
          <ContainH>
            <span>
              <IoMdContacts style={style} />
            </span>
            <nav>Shared Homes</nav>
          </ContainH>
        </IconLayer1>
        <IconLayer2>
          <nav>
            <MdNavigateNext />
          </nav>
          <Filterwrap>
            <RiFilterOffLine />
            <span>Filter</span>
          </Filterwrap>
        </IconLayer2>
      </Wrapper>
    </Container>
  );
};

export default Layer1;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
`;
const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    /* background-color: green; */
    width: 95%;
  }
`;
const IconLayer1 = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;

const Contain = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: space-around;
  /* background-color: red; */
  color: #818181;
  :hover {
    border-bottom: 1px solid #bdc2c6;
  }
  span {
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  nav {
    font-size: 0.7rem;
    margin-top: 5px;
  }
  @media only screen and (max-width: 768px) {
    /* background-color: green; */
    display: block;
  }

  @media only screen and (max-width: 425px) {
    display: none;
  }
`;

const ContainH = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
  @media only screen and (max-width: 425px) {
    display: block;
    nav {
      font-size: 0.5rem;
      margin-top: 5px;
    }

    span {
      /* background-color: red; */
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 25px;
    }
  }
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* background-color: red; */
  color: #818181;
  :hover {
    border-bottom: 1px solid #bdc2c6;
  }
  span {
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  nav {
    font-size: 0.7rem;
    margin-top: 5px;
  }
`;

const IconLayer2 = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 140px;
  cursor: pointer;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 1px solid #bdc2c6;
    transition: all 500ms;
  }
`;

const Filterwrap = styled.div`
  @media only screen and (max-width: 768px) {
    margin-left: 10px;
  }
  color: #302222;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  width: 60px;
  border-radius: 10px;
  border: 1px solid #bdc2c6;
  padding: 1px 15px;
`;
