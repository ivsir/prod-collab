import styled from "styled-components";
import { motion } from "framer-motion";

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    padding: 0rem 2rem;
  }
`;

export const BoxContainer = styled.div`
  box-sizing: border-box;
  display: inline-flex;
  padding: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  margin: 2rem 0rem;
  background-blend-mode: soft-light;
  backdrop-filter: blur(20px);
`;

export const FormContainer = styled.form`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-end;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
`;

export const HeaderContainer = styled.div`
  box-sizing: border-box;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: #4dc4d2;
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: #ffc442;
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  transition: all, 200ms ease-in-out;
  &:focus,
  active {
    outline: none;
  }
  border-radius: 16px;
  color: rgba(255, 255, 255, 0.5);
  background: transparent;
  padding: 20px 24px 20px 24px;
  border: none;
  text-align: left;
  font: 700 20px "JetBrains Mono", sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  outline: none;
`;

export const InputContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border: white;
  // background: transparent;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
`;

export const PasswordContainer = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 20px 24px 20px 24px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
`;

export const ButtonContainer = styled.div`
  border-radius: 9999px;
  border-style: solid;
  border-color: #ffffff;
  border-width: 1px;

  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
`;

export const SubmitButton = styled.button`
  border: none;
  padding: 12px 24px 12px 24px;
  background: none;
  color: #ffffff;
  text-align: left;
  font: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100;
`;

export const ExploreContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 120px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 818px;
  position: relative;
`;

export const ExplorerCard = styled.div`
  box-sizing: border-box;
  background: #141414;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  flex-shrink: 0;
  height: 600px;
  position: relative;
  overflow: hidden;
`;

export const ExploreCardAuthor = styled.div`
  box-sizing: border-box;
  padding: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
  z-index: 99;
`;
export const ProjectAuthor = styled.h4`
  color: #ffffff;
  text-align: left;
  font: 400 24px "JetBrains Mono", sans-serif;
  position: relative;
  width: 130px;
`;
export const PostTime = styled.h4`
  color: #989898;
  text-align: left;
  font: 400 24px "JetBrains Mono", sans-serif;
  position: relative;
`;

export const CardTitle = styled.div``;
export const ProjectTitle = styled.h3`
  color: #ffffff;
  text-align: left;
  font: 400 24px "JetBrains Mono", sans-serif;
  position: relative;
`;

export const CardImage = styled.img`
  box-sizing: border-box;
  background: linear-gradient(
    180deg,
    rgba(20, 20, 20, 0) 0%,
    rgba(20, 20, 20, 1) 100%
  );
  padding: 40px;
  display: flex;
  flex-direction: row;
  gap: 0px;
  align-items: flex-end;
  justify-content: flex-start;
  align-self: stretch;
  flex: 1;
  position: relative;
`;

export const SideNav = styled.div`
padding: 40px 0px 40px 0px;
display: flex;
flex-direction: row;
gap: 80px;
align-items: flex-start;
justify-content: center;
// position: sticky;
`;

export const NavLinks = styled.div`
display: flex;
margin: 1rem;
flex-direction: column;
position: absolute;
align-items: flex-start;
`

export const NavIcon = styled.img`
box-sizing: border-box;
flex-shrink: 0;
position: relative;
overflow: visible;
`

export const LinkStyle = {
  margin: "1rem",
  textDecoration: "none",
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  position: "relative",
}

export const Container = styled.div`
margin: 2rem 8rem;
display: flex;
flex-direction: row;
justify-content: space-evenly;
`

export const TopContainer = styled.div`
  // width: 100%;
  // height: 250px;
  // display: flex;
  // flex-direction: column;
  // justify-content: flex-end;
  // padding: 0 1.8em;
  // padding-bottom: 5em;
  // margin-bottom: 4rem;
`;
export const BackDrop = styled(motion.div)`
  // width: 100%;
  // height: 250px;
  // position: absolute;
  // display: flex;
  // flex-direction: column;
  // border-radius: 50%;
  // transform: rotate(60deg);
  // top: -0px;
  // left: -70px;
  // background:#FFC442;
  // background: linear-gradient( 58deg,
  //     rgba(241, 196, 15, 1) 0%, ) 20%,
  //     rgba(243, 172, 18, 1) 100%
  //     );
`;

// export const HeaderContainer = styled.div`
//   // width: 100%;
//   // display: flex;
//   // flex-direction: column;
//   // align-items: center;
// `;
export const HeaderText = styled.h2`
  // font-size: 45px;
  // font-weight: 600;
  // line-height: 1;
  // color: #175d8f;
  // z-index: 10;
  // margin: 0;
  // text-align: center;
  color: #ffffff;
  text-align: left;
  font-size: 48px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const SmallText = styled.h5`
  // color: #175d8f;
  // font-weight: 500;
  // font-size: 16px;
  // z-index: 10;
  // margin: 0;
  color: #ffffff;
  text-align: left;
  font-size: 16px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const InnerContainer = styled.div`
  // display: flex;
  // flex-direction: column;
  // padding-right: 0 1.8em;
  // align-items: center;
  // margin: 12px;
`;
