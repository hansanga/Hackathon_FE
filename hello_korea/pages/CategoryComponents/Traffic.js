import React from 'react';
import * as S from '../../styles/CategoryComponents/Traffic.styled';
import Header from '../../components/MainComponents/Header';
import Body from '../../components/CategoryComponents/Traffic/Body';


export default function Traffic(){
   return (
      <S.Wrapper>
         <S.Container>
            <Header />
            <Body />
         </S.Container>
      </S.Wrapper>
   );
};