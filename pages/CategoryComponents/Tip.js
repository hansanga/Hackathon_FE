import React from 'react';
import * as S from '../../styles/CategoryComponents/Tip.styled'
import Header from '../../components/InfoComponents/Header';
import Body from '../../components/InfoComponents/Body';

export default function Tip(){
   return (
      <S.Wrapper>
         <S.Container>
            <Header />
            <h1>Tip page</h1>
         </S.Container>
      </S.Wrapper>
   );
};

 