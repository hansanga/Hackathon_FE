import React from 'react';
import * as S from "./Body.styled";
import TipBox from '../../../components/TipComponents/TipBox';
import MenuBox from '../../../components/AppComponents/MenuBox';
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
        <MenuBox
            iconSrc='\img\Subway.svg'
            text1='KaKao Subway'
            text2='The most popular Korean subway application'
         />
        <MenuBox
            iconSrc='\img\Traffic.svg'
            text1='KaKao Bus'
            text2='The most popular Korean Bus application'
         />

         <S.CopyrightContainer>
            <S.Copyright>@ Cpoyright</S.Copyright>
         </S.CopyrightContainer>

        

      </S.Container>
      
   
  );
};