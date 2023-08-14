import React from 'react';
import * as S from '../../../styles/CategoryComponents/App.styled'
import Header from '../../../components/InfoComponents/Header';
import Body from '../../../components/InfoComponents/Body';

export default function KaKaoNavigation(){
   return (
      <S.Wrapper>
         <S.Container>
            <Header />
            <Body
               iconSrc1='\AppIcon\KakaoNavi.png'
               appName='KaKao Navigation'
               text1='Kakao Subway is an app that provides information on exits and neighborhoods of all subway stations across the country, and has the alarm function to notify you one stop before your destination, and the function to share the expected arrival time with your Kakao Talk friends.'
            />
         </S.Container>
      </S.Wrapper>
   );
};