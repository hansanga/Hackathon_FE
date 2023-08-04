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
      </S.Container>
   
  );
};