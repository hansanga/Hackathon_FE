import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
 
export const Intro = styled.div`
  width: 330px;
  height: 100px;
  border-radius: 15px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.06);
  position: static;
  margin-top: 140px; /* Adjust the margin-top value as needed */
  padding: 20px; /* Add some padding to create space inside the box */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Vertically center the text */
  position: relative;
`;

export const IntroText1 = styled.div`
  color: #5686E1;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 10px; /* Add some margin to create space between the texts */
  position: absolute;
  bottom: 72px;
  margin-left: -170px;
`;

export const IntroText2 = styled.div`
  color: #535353;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: left; /* Align the text to the left */
  position: absolute;
  bottom:22px;
  margin-left: 30px;
  line-height: 1.15;
`;


export const Line = styled.div`
   border-bottom: linen;
`