import styled from "@emotion/styled";

export const Container = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
`;

export const Top = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 35px;
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
    /* listStyle: none; */
    margin: 5px;
    overflow-x: scroll;
    width: 100%;
    padding: 0 10px;

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
      flex: 0 0 auto;
    }

    &::-webkit-scrollbar {
      width: 50px;
      height: 5px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
      background: #5686E1;
      border-radius: 6px;
      width: 30%;
    }
`;

export const Line = styled.div `
   border-bottom : 1px solid #000;
`;

export const CopyrightContainer = styled.div`
   width: 100%;
   height: 100%;

`

export const Copyright = styled.div`
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