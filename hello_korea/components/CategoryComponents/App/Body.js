import React from 'react';
import * as S from "./Body.styled";
import TipBox from '../../../components/TipComponents/TipBox';
import Link from 'next/link'

export default function Body(){
  
  
   return (
   
     <S.Container>
        <S.Top>
            <S.Title>Application Service</S.Title>
            <S.MenuBar>
           <li>Cultural life</li>
           <li>SNS</li>
           <li>Search Engine</li>
           <li>Finance</li>
           <li>Food Delivery</li>
           <li>E-Commerce</li>
           <li>Used Item</li>
           <li>Interior</li>
           <li>Part-time</li>
           <li>Trendy App</li>
           <li>Employment</li>
           </S.MenuBar>
        </S.Top>

        <TipBox />
        <S.MenuBottom>
           <S.MenuBoxIcon src='\img\Subway.svg' />
           <S.MenuBox>
              <S.MenuBottom1Text1>KaKao Subway</S.MenuBottom1Text1>
              <S.MenuBottom1Text2>The most popular Korean subway application</S.MenuBottom1Text2>
           </S.MenuBox>
        </S.MenuBottom>
        <S.MenuBottom>
            <S.MenuBoxIcon src='\img\Traffic.svg' />
            <S.MenuBottom1Text1>KaKao Bus</S.MenuBottom1Text1>
        </S.MenuBottom>

         <S.CopyrightContainer>
            <S.Copyright>@ Cpoyright</S.Copyright>
         </S.CopyrightContainer>

        

      </S.Container>
      
   
  );
};