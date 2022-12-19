// This is Sign up
// Page
//page3
import React from "react";
import styled from "styled-components";
import { BsEnvelope } from "react-icons/bs";
import { MdOutlinePersonOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsCheck2Circle } from "react-icons/bs";

const Signup2 = () => {
  const style = { color: "#DF526C" };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Leftwrap>
            <Zone>Comfort</Zone>
            <Pix></Pix>
            <Sign>
              Sign up start <br />
              learning on zone today
            </Sign>

            <Instant>
              Instant access to <span>1,000,000+</span> educational <br />
              tutorials, lessons,and workshop
            </Instant>

            <Inputwrap>
              <Input>
                <Close>
                  <BsEnvelope />
                  <input type="email" placeholder="example@zone.com" />
                </Close>
              </Input>
              <Input>
                <Close>
                  <MdOutlinePersonOutline />
                  <input type="text" placeholder="Landlord Alfred Peterson" />
                </Close>
                <BsCheck2Circle style={style} />
              </Input>
              <Input>
                <Close>
                  <BsTelephone />
                  <input type="number" placeholder="+44 01234 567890" />
                </Close>
              </Input>
              <Input>
                <Close>
                  <RiLockPasswordLine />
                  <input type="password" placeholder="very long password" />
                </Close>
                <BsCheck2Circle style={style} />
              </Input>
              <Input>
                <Close>
                  <RiLockPasswordLine />
                  <input type="password" placeholder="Very Long Password" />
                </Close>
                <BsCheck2Circle style={style} />
              </Input>
            </Inputwrap>

            <Buttons>
              <Button>Let's do this</Button>
              <span> I already have an account</span>
            </Buttons>
          </Leftwrap>
        </Left>
        <Right>
          <Leftwrap></Leftwrap>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Signup2;

const Pix = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ff385c;
  margin-top: 10px;
`;
const Imagewrap = styled.div`
  margin-top: 30px;
  /* height: 90px;
  width: 90px;
  border-radius: 100%;
  background-color: red; */
`;

const Image = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 100%;
  background-image: url("/img/laugh.png");
  background-size: contain;
  /* background-color: red; */
`;
const Close = styled.div``;
const Leftwrap = styled.div`
  margin-left: 20px;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
  width: 95%;
  height: 95%;
  /* background-color: green; */
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 200px;
  height: 40px;
  width: 300px;
  font-size: 0.7rem;
  margin-top: 20px;

  nav {
  }
`;

const Buttons2 = styled.div`
  display: flex;
  /* background-color: red; */

  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 200px;
  height: 40px;
  width: 300px;
  font-size: 0.7rem;
  margin-top: 30px;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50px;
  width: 200px;
  color: white;
  background-color: #df526c;
  border-radius: 5px;
  font-size: 0.7rem;
`;
const Inputwrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* background-color: yellow; */
  height: 200px;
  width: 90%;
  margin-top: 25px;
`;

const Inputwrap2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* background-color: yellow; */
  height: 120px;
  width: 90%;
  margin-top: 40px;
`;

const Input = styled.div`
  display: flex;
  justify-content: space-between;
  /* border-bottom: 0.5px solid gray; */
  border-bottom: 1px solid gray;
  input {
    border: 0;
    opacity: 0.7;
    outline: none;
  }
`;
const Zone = styled.div`
  font-size: 1.4rem;
  color: #4f0034;
  font-weight: bold;
  margin-top: 20px;
`;

const Sign = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  font-size: 0.7em;
  font-weight: bold;
  color: #4f0034;
`;
const Sign2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  font-size: 0.7em;
  font-weight: bold;
  color: #4f0034;
`;
const Instant = styled.div`
  margin-top: 20px;
  font-size: 0.7rem;
  color: #4f0034;
  /* background-color: red; */
  span {
    font-size: 0.7rem;
    font-weight: bold;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;
const Wrapper = styled.div`
  width: 80%;
  height: 90%;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Left = styled.div`
  height: 520px;
  width: 450px;
  border-radius: 10px 0px 0px, 10px;
  background-color: white;
  /* display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; */
`;
const Right = styled.div`
  height: 520px;
  width: 450px;
  border-radius: 0px 10px 10px, 0px;
  background-color: white;
  margin-right: 20px;
  background-color: rgba(255, 56, 92, 0.5);
  background-image: url("/Image/istockphoto-1314289223-170667a.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  // margin-top: 30px;
`;

// import React from "react";
// import styled from "styled-components";
// import { BsEnvelope } from "react-icons/bs";
// import { MdOutlinePersonOutline } from "react-icons/md";
// import { BsTelephone } from "react-icons/bs";
// import { RiLockPasswordLine } from "react-icons/ri";
// import { BsCheck2Circle } from "react-icons/bs";

// const Signup2 = () => {
//   const style = { color: "#DF526C" };

//   return (
//     <Container>
//       <Wrapper>
//         <Left>
//           <Leftwrap>
//             <Zone>Zone</Zone>
//             <Sign>
//               Sign up start <br />
//               learning on zone today
//             </Sign>

//             <Instant>
//               Instant access to <span>1,000,000+</span> educational <br />
//               tutorials, lessons,and workshop
//             </Instant>

//             <Inputwrap>
//               <Input>
//                 <Close>
//                   <BsEnvelope />
//                   <input type="email" placeholder="example@zone.com" />
//                 </Close>
//               </Input>
//               <Input>
//                 <Close>
//                   <MdOutlinePersonOutline />
//                   <input type="text" placeholder="Landlord Alfred Peterson" />
//                 </Close>
//                 <BsCheck2Circle style={style} />
//               </Input>
//               <Input>
//                 <Close>
//                   <BsTelephone />
//                   <input type="number" placeholder="+44 01234 567890" />
//                 </Close>
//               </Input>
//               <Input>
//                 <Close>
//                   <RiLockPasswordLine />
//                   <input type="password" placeholder="very long password" />
//                 </Close>
//                 <BsCheck2Circle style={style} />
//               </Input>
//               <Input>
//                 <Close>
//                   <RiLockPasswordLine />
//                   <input type="password" placeholder="Very Long Password" />
//                 </Close>
//                 <BsCheck2Circle style={style} />
//               </Input>
//             </Inputwrap>

//             <Buttons>
//               <Button>Let's do this</Button>
//               <span> I already have an account</span>
//             </Buttons>
//           </Leftwrap>
//         </Left>
//         <Right>
//           <Leftwrap>
//             <Zone>Zone</Zone>
//             <Imagewrap>
//               <Image />
//             </Imagewrap>
//             <Sign2>
//               Good Morning <br />
//               London!
//             </Sign2>

//             <Instant>
//               Do we have the wrong person?
//               <br />
//               <span>Create a new Account here</span>
//             </Instant>

//             <Inputwrap2>
//               <Input>
//                 <Close>
//                   <MdOutlinePersonOutline />
//                   <input type="text" placeholder="Landlord Alfred Peterson" />
//                 </Close>
//                 <BsCheck2Circle style={style} />
//               </Input>
//               <Input>
//                 <Close>
//                   <BsEnvelope />
//                   <input type="email" placeholder="example@zone.com" />
//                 </Close>
//               </Input>

//               <Input>
//                 <Close>
//                   <RiLockPasswordLine />
//                   <input type="password" placeholder="very long password" />
//                 </Close>
//                 <BsCheck2Circle style={style} />
//               </Input>
//             </Inputwrap2>

//             <Buttons2>
//               <Button>Login</Button>
//               <span> I already have an account</span>
//             </Buttons2>
//           </Leftwrap>
//         </Right>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Signup2;

// const Imagewrap = styled.div`
//   margin-top: 30px;
//   /* height: 90px;
//   width: 90px;
//   border-radius: 100%;
//   background-color: red; */
// `;

// const Image = styled.div`
//   height: 80px;
//   width: 80px;
//   border-radius: 100%;
//   background-image: url("/img/laugh.png");
//   background-size: contain;
//   /* background-color: red; */
// `;
// const Close = styled.div``;
// const Leftwrap = styled.div`
//   margin-left: 20px;
//   /* display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column; */
//   width: 95%;
//   height: 95%;
// `;
// const Buttons = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   width: 200px;
//   height: 40px;
//   width: 300px;
//   font-size: 0.7rem;
//   margin-top: 30px;

//   nav {
//   }
// `;

// const Buttons2 = styled.div`
//   display: flex;
//   /* background-color: red; */

//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   width: 200px;
//   height: 40px;
//   width: 300px;
//   font-size: 0.7rem;
//   margin-top: 30px;
// `;
// const Button = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   height: 50px;
//   width: 200px;
//   color: white;
//   background-color: #df526c;
//   border-radius: 5px;
//   font-size: 0.7rem;
// `;
// const Inputwrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   /* background-color: yellow; */
//   height: 200px;
//   width: 90%;
//   margin-top: 40px;
// `;

// const Inputwrap2 = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   /* background-color: yellow; */
//   height: 120px;
//   width: 90%;
//   margin-top: 40px;
// `;

// const Input = styled.div`
//   display: flex;
//   justify-content: space-between;
//   /* border-bottom: 0.5px solid gray; */
//   border-bottom: 1px solid gray;
//   input {
//     border: none;
//     opacity: 0.7;
//   }
// `;
// const Zone = styled.div`
//   font-size: 1.4rem;
//   color: #4f0034;
//   font-weight: bold;
//   margin-top: 20px;
// `;

// const Sign = styled.div`
//   display: flex;
//   flex-direction: row;
//   margin-top: 30px;
//   font-size: 0.7em;
//   font-weight: bold;
//   color: #4f0034;
// `;
// const Sign2 = styled.div`
//   display: flex;
//   flex-direction: row;
//   margin-top: 10px;
//   font-size: 0.7em;
//   font-weight: bold;
//   color: #4f0034;
// `;
// const Instant = styled.div`
//   margin-top: 20px;
//   font-size: 0.7rem;
//   color: #4f0034;
//   /* background-color: red; */
//   span {
//     font-size: 0.7rem;
//     font-weight: bold;
//   }
// `;

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   width: 100%;
// `;
// const Wrapper = styled.div`
//   width: 80%;
//   height: 90%;
//   background-color: pink;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
// `;
// const Left = styled.div`
//   height: 500px;
//   width: 350px;
//   border-radius: 10px;
//   background-color: white;
//   /* display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column; */
// `;
// const Right = styled.div`
//   height: 500px;
//   width: 300px;
//   border-radius: 10px;
//   background-color: white;
//   margin-right: 20px;
//   margin-top: 30px;
// `;
