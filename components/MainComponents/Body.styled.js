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
  position: relative; 
  margin-top: 140px; 
  padding: 20px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const IntroText1 = styled.div`
  color: #5686E1;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 10px; 
  position: absolute; 
  margin-top: -220px;
  margin-left: -170px;
  cursor: default;
`;

export const IntroText2 = styled.div`
  color: #535353;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: left; 
  position: absolute;
  margin-bottom: 150px;
  margin-left: 28px;
  line-height: 1.15;
  z-index: 3;
  cursor: default;
`;

export const MenuTabImg = styled.div`
   width: 300px;
   height: 200px;
   position: relative;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const MenuTab1 = styled.img`
   width: 95px;
   height: 95px;
   cursor: pointer;

`;
export const MenuTab2 = styled.img`
   width: 95px;
   height: 95px;
   cursor: pointer;
`;
export const MenuTab3 = styled.img`
   width: 95px;
   height: 95px;
   cursor: pointer;
`;

/* title */

export const MenuTabTitle = styled.div`
   position: absolute;
   bottom: 0;
   left: 0;
   right: 0;
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 95px;
   padding: 15px;
   cursor: pointer;
`;


export const MenuTitle1 = styled.div`
   font-size: 10px;
   flex: 1; 
   margin-top: -55px;
   margin-left: -1px;
   text-align: center; 
`;

export const MenuTitle2 = styled.div`
   font-size: 10px;
   flex: 2; 
   margin-top: -52px;
   margin-left: -1px;
   text-align: center; 
`;

export const MenuTitle3 = styled.div`
   font-size: 10px;
   flex: 1;
   margin-top: -52px;
   margin-left: -1px;
   text-align: center; 
`;

export const Line = styled.div`
   border-bottom : 1px solid #000;
`;


/* Bottom */
export const MenuBottom1 = styled.div`
   width: 330px;
   height: 45px;
   border-radius: 15px;
   background: #FFF;
   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.06);
   cursor: pointer;
`;

export const MenuBottom1Icon = styled.img`
   width: 20px;
   height: 20px;
   position: absolute;
   margin: 10px 0 0 15px;

`;

export const MenuBottom1Text = styled.div`
   color: #535353;
   font-size: 12px;
   font-weight: 500;
   text-align: left;
   margin: 15px 45px;

`;


export const MenuBottom2 = styled.div`
   width: 330px;
   height: 45px;
   border-radius: 15px;
   background: #FFF;
   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.06);
   margin-top: 20px;
   cursor: pointer;
`;

export const MenuBottom2Icon = styled.img`
   width: 20px;
   height: 20px;
   position: absolute;
   margin: 13px 0 0 15px;
`;

export const MenuBottom2Text = styled.div`
   border-radius: 15px;
   background: #FFF;
   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.06);
   text-align: left;
   margin-left: 20px;
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
  position: absolute;
  margin: 100px -17px;
  cursor: default;

`;

