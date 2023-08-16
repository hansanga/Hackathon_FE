import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Zigbang() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                <Body
                    iconSrc1='\AppIcon\Zigbang.png'
                    appName='Zigbang'
                    text1={`
                    "직방" is a leading service in South Korea that offers real estate brokerage and property search. Through this app, users can easily search for information about various types of properties such as apartments, studio apartments, and offices, and conveniently connect with real estate agents for inquiries, all done remotely. 

                    How to download : You can install on the app store or Play Store.`} />
            </S.Container>
        </S.Wrapper>
    );
};