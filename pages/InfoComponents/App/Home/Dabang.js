import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Dabang() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                <Body
                    iconSrc1='\AppIcon\Dabang.png'
                    appName='Dabang'
                    text1={`
                    "다방" is a mobile application that offers real estate brokerage and property search services in South Korea. Through this app, users can easily search for information about apartments, studio apartments, and offices, among other property types. It provides a convenient platform to connect with real estate agents and inquire about properties. 

                    How to download : You can install on the app store or Play Store.`} />
            </S.Container>
        </S.Wrapper>
    );
};