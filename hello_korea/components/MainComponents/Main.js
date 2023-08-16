
import React from 'react';
import * as S from "./Main.styled";
import Header from './Header';
import Body from './Body';

export default function Main() {
  return (
      <S.Wrapper>
         <S.Container>
            <Header />
            <Body />
        </S.Container>
      </S.Wrapper>
  );
}

