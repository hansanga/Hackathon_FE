import React from 'react';
import * as S from "./Body.styled";
import TipBox from '../../../components/TipComponents/TipBox';
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
        <S.MenuBottom>
            <S.MenuBottom1Icon src='\img\Subway.svg' />
           <S.MenuBottom1Text1>KaKao Subway</S.MenuBottom1Text1>
           <S.MenuBottom1Text2>The most popular Korean subway application</S.MenuBottom1Text2>
        </S.MenuBottom>
        <S.MenuBottom>
            <S.MenuBottom1Icon src='\img\Traffic.svg' />
            <S.MenuBottom1Text1>KaKao Bus</S.MenuBottom1Text1>
        </S.MenuBottom>

         <S.CopyrightContainer>
            <S.Copyright>@ Cpoyright</S.Copyright>
         </S.CopyrightContainer>

        

      </S.Container>
      
   
  );
};