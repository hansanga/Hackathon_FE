import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Logo = styled.div`
  width: 84px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto; 
  position: absolute; 
  top: 27px; 
  left: 50%; 
  transform: translateX(-50%);
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: #686868;
  cursor: default;
`;

export const MenuBar = styled.img`
  width: 17px;
  position: absolute;
  top: 30px;
  right: 25px;
  cursor: pointer;
`;
