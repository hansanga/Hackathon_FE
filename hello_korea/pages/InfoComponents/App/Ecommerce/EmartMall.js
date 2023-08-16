import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function EmartMall() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                <Body
                    iconSrc1='\AppIcon\EmartMall.png'
                    appName='EmartMall'
                    text1={`
                    "이마트몰" is an online shopping service provided by Emart, a major retail chain in South Korea. This service allows users to purchase a variety of products sold by Emart online and have them conveniently delivered. 

                    How to download : You can install on the app store or Play Store.`} />
            </S.Container>
        </S.Wrapper>
    );
};