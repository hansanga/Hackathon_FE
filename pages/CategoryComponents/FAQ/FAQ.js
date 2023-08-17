import React from 'react';
import * as S from '../../../styles/CategoryComponents/FAQ.styled'

import Header from '../../../components/MainComponents/Header';

export default function FAQ(){
   return (
      <S.Wrapper>
         <S.Container>
            <Header />
            <h1>FAQ</h1>
         </S.Container>
      </S.Wrapper>
   );
};

