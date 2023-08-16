import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Coupang() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                <Body
                    iconSrc1='\AppIcon\Coupang.png'
                    appName='Coupang'
                    text1={`
                    "쿠팡" is one of the popular online shopping services widely used by people in South Korea. Items are generally more affordable compared to other platforms, and it is known for its exceptionally fast delivery.

                    How to download : You can install on the app store or Play Store.`} />
            </S.Container>
        </S.Wrapper>
    );
};