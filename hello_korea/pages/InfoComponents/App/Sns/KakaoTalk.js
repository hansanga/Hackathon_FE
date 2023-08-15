import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function KakaoTalk() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                <Body
                    iconSrc1='\AppIcon\KakaoTalk.png'
                    appName='KakaoTalk'
                    text1={`
                    It is the most used messenger in South Korea.
                    In addition to messaging, it offers a variety of other services, including internet banking, shopping, news, and calendar.

                    How to download : You can install on the app store or Play Store.`} />
            </S.Container>
        </S.Wrapper>
    );
};