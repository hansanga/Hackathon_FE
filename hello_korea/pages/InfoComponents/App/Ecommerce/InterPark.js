import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function InterPark() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                <Body
                    iconSrc1='\AppIcon\InterPark.png'
                    appName='InterPark'
                    text1={`
                    "Interpark" is a renowned online shopping and comprehensive platform in South Korea. The Interpark app allows users to conveniently reserve tickets and access a variety of goods and services. 

                    How to download : You can install on the app store or Play Store.`} />
            </S.Container>
        </S.Wrapper>
    );
};