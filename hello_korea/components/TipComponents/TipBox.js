// 카테고리 페이지 팁 컴포넌트 분리
import React from 'react';
import * as S from "./TipBox.styled";
import Link from 'next/link'

export default function TipBox() {
    return (
        <S.Container>
            <Link href="/CategoryComponents/Tip">
                <S.TipBox>
                    <S.TipIcon src='\img\Tip.svg'/>
                    <S.TipText>Transportaition Tips</S.TipText>
                    <S.MoveImg src='\img\Move.svg'/>
                </S.TipBox>
            </Link>
        </S.Container>
    );
};