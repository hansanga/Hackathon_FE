import styled from "@emotion/styled";

export const Container = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 120px auto;
`;

export const Title = styled.div `
  color: #686868;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px auto;
`;

export const MenuBar = styled.div `
    display: flex;
    listStyle: none;
    margin: 5px;

    & > li {
      margin: 0;
      padding: 10px;
      font-family: Inter;
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
      color: #686868;
      cursor: pointer;
    }
`;

export const Line = styled.div `
   border-bottom : 1px solid #000;
`;

export const MenuBottom = styled.div `
  width: 299px;
  height: 63px;
  left: 27px;
  top: 304px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
  border-radius: 15px;
  margin-top: 20px;
  cursor: pointer;
  display: flex;
`;

export const MenuBottom1Icon = styled.img `
   width: 41px;
   height: 38px;
   position: absolute;
   margin: 10px 0 0 15px;
   text-align: center;
`;

export const MenuBottom1Text1 = styled.div `
  position: absolute;
  width: 137px;
  height: 8px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 12px;
  color: #535353;
  text-align: left;
  margin: 10px 60px;
`;

export const MenuBottom1Text2 = styled.div `
  position: absolute;
  height: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 10px;
  color: #737373;
  text-align: left;
  margin-top: 28px;
  margin-left: 60px;
`;

export const CopyrightContainer = styled.div `
   width: 100%;
   height: 100%;

`

export const Copyright = styled.div `
  width: 358px;
  height: 70px;
  background: #4979D1;
  color: #FFF;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  margin: 0 -10px;
  cursor: default;

`;
