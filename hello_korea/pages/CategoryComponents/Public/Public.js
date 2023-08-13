import React from 'react';
import * as S from './Public.styled.js';
import Header from '../../../components/MainComponents/Header';

export default function Public(){
   return (
      <S.Wrapper>
         <Header />
         <S.Container>
            <S.Title>Public Service</S.Title>
            {/* 다른 컨텐츠 */}
         </S.Container>
      </S.Wrapper>
   );
};

