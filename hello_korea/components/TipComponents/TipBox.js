import React from 'react';
import * as S from "./TipBox.styled";
import Link from 'next/link'

export default function TipBox(){
  return (
    <S.Container>
      <Link href="/CategoryComponents/Tip">
        <S.TipBox>
        <S.TipIcon src='\img\Tip.svg' /> 
        <S.TipText>Transportaition Tips</S.TipText>
        <S.MoveImg src='\img\Move.svg' />
      </S.TipBox></Link>
    </S.Container>   
  );
};