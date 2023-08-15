// 앱 설명페이지 컴포넌트 분리
import React from 'react';
import * as S from "./Body.styled";
import Link from 'next/link'

export default function Body({iconSrc1, appName, text1}) {
    return (
        <S.Container>
            <S.Title>
                <S.Icon src={iconSrc1}/>
                <S.AppName>{appName}</S.AppName>
                <S.Line/>
            </S.Title>
            <S.Info>
                {text1}
            </S.Info>
            <S.BtnZone>
                <S.Download><S.Icon src='\img\Download.svg'/>Link / Download</S.Download>
                <S.Share><S.Icon src='\img\Share.svg'/>Share</S.Share>
            </S.BtnZone>
        </S.Container>
    );
};