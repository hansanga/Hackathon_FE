import React from 'react';
import * as S from '../../../styles/CategoryComponents/App.styled'
import Header from '../../../components/InfoComponents/Header';
import Body from '../../../components/InfoComponents/Body';

export default function KaKaoBus(){
   return (
      <S.Wrapper>
         <S.Container>
            <Header />
            <Body
               iconSrc1='\AppIcon\KaKaoBus.svg'
               appName='KaKao Bus'
               text1='Kakao Bus is an app that provides real-time operation information, routes, traffic information, and stop location of buses, and also provides information on vacancies in the car only for direct/general seat buses in Gyeonggi-do.'
            />
         </S.Container>
      </S.Wrapper>
   );
};