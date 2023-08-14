import React from 'react';
import * as S from "./Body.styled";
import TipBox from '../../../components/TipComponents/TipBox';
import MenuBox from '../../../components/AppComponents/MenuBox';
import Link from 'next/link'

export default function Body(){
  return (

     <S.Container>
        <S.Title>Map / Traffic Service</S.Title>
        <S.MenuBar>
           <li>Map</li>
           <li>Public Transport</li>
           <li>Navigation</li>
           <li>Taxi</li>
        </S.MenuBar>
        <S.Line />
        <TipBox />
        <MenuBox
            link="/CategoryComponents/Tip"
            iconSrc='\AppIcon\KaKaoSubway.svg'
            text1='KaKao Subway'
            text2='The most popular Korean subway application'
         />
        <MenuBox
            link="/CategoryComponents/Tip"
            iconSrc='\AppIcon\KaKaoBus.svg'
            text1='KaKao Bus'
            text2='The most popular Korean Bus application'
         />

         <S.CopyrightContainer>
            <S.Copyright>@ Copyright</S.Copyright>
         </S.CopyrightContainer>

        

      </S.Container>
      
   
  );
};