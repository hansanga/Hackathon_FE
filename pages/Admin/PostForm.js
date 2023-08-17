import React from 'react';
import * as S from '../../styles/CategoryComponents/Tip.styled'
import Header from '../../components/InfoComponents/Header';
import PostForm from '../../components/Admin/PostForm';

export default function Body(){
   return (
      <S.Wrapper>
         <S.Container>
            <Header />
            <PostForm />
         </S.Container>
      </S.Wrapper>
   );
};

 