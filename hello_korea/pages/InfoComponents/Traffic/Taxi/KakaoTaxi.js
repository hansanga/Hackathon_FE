import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function KakaoTaxi() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                <Body
                    iconSrc1='\AppIcon\KakaoTaxi.png'
                    appName='KaKao Taxi'
                    text1={`
                    Kakao Taxi is an app that allows you to call a taxi or a proxy driver, and has the function of booking intercity buses, trains, and airlines across the country.
                    
                    How to download : **You can install on the app store or Play Store.`} />
            </S.Container>
        </S.Wrapper>
    );
};