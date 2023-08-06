import React from 'react';
import * as S from "./Body.styled";

export default function Body(){
  return (
   
      <S.Container>
         <S.Intro />
         <S.IntroText1>How to use HelloKorea</S.IntroText1>
         <S.IntroText2><br></br>You guys are trying to adapt in Korea! <br></br>
                        In Korea, most administrative tasks and works are done digitally 
                        or automatically over the Internet.<br></br>
                        The apps we introduce will be of great help to your life in Korea!</S.IntroText2>
         <S.MenuTabImg>
            <S.MenuTab1 src='img/Public_service.png'/>
            <S.MenuTab2 src='img/Traffic_service.png'/>
            <S.MenuTab3 src='img/Application.png'/>

            <S.MenuTabTitle>
               <S.MenuTitle1>public service</S.MenuTitle1>
               <S.MenuTitle2>traffic service</S.MenuTitle2>
               <S.MenuTitle3>Application</S.MenuTitle3>
            </S.MenuTabTitle>
         </S.MenuTabImg>

    {/*      <S.ShortBorder /> */}

         <S.Line />
         <S.MenuBottom1>
            <S.MenuBottom1Icon src='img/free-icon-siren-883345.png' />
            <S.MenuBottom1Text>Emergency/Medical Hotline</S.MenuBottom1Text>
         </S.MenuBottom1>
         <S.MenuBottom2>
            <S.MenuBottom2Icon src='img/Question answer.png' />
            <S.MenuBottom1Text>Questions</S.MenuBottom1Text>

         </S.MenuBottom2>

         <S.CopyrightContainer>
            <S.Copyright>@ Cpoyright</S.Copyright>
         </S.CopyrightContainer>

        

      </S.Container>
      
   
  );
};