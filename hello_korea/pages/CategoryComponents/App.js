import React from 'react';
import * as S from '../../styles/CategoryComponents/App.styled';
import Header from '../../components/MainComponents/Header';
import Body from '../../components/CategoryComponents/App/Body';

export default function App(){
   return (
      <S.Wrapper>
        <S.Container>
            <Header />
            <Body />
         </S.Container>
      </S.Wrapper>
   );
};

 