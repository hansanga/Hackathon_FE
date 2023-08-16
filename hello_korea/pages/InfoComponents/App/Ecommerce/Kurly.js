import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Kurly() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                <Body
                    iconSrc1='\AppIcon\Kurly.png'
                    appName='Kurly'
                    text1={`
                    "마켓컬리" is a prominent food online marketplace in South Korea. This app allows users to engage in online shopping, enabling them to order fresh groceries, ingredients, and essential goods for delivery. 

                    How to download : You can install on the app store or Play Store.`} />
            </S.Container>
        </S.Wrapper>
    );
};