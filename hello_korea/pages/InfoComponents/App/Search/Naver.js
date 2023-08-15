import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Naver() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                <Body
                    iconSrc1='\AppIcon\Naver.png'
                    appName='Naver'
                    text1={`
                    It is the most used portal service in South Korea.
                    It provides various contents such as news, shopping, and community services such as blogs, centered on portal services such as search engines. It offers its own messenger, LINE, as well as knowledge encyclopedias and language dictionaries.

                    How to download : You can install on the app store or Play Store.`} />
            </S.Container>
        </S.Wrapper>
    );
};