import React from 'react';
import * as S from '../../styles/CategoryComponents/Tip.styled'
import Header from '../../components/InfoComponents/Header';
import Body from '../../components/AppComponents/PostForm';
import PostForm from '../../components/AppComponents/PostForm';

export default function Tip(){
   return (
      <S.Wrapper>
         <S.Container>
            <Header />
            <PostForm />
         </S.Container>
      </S.Wrapper>
   );
};

 