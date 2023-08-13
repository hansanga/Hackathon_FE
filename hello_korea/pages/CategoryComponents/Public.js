import React from 'react';
import * as S from '../../styles/CategoryComponents/Public.styled';
import Header from '../../components/MainComponents/Header';
import Body from '../../components/CategoryComponents/Public/Body';

export default function Public(){
   return (
      <S.Wrapper>
         <S.Container>
            <Header />
            <Body />
         </S.Container>
      </S.Wrapper>
   );
};

