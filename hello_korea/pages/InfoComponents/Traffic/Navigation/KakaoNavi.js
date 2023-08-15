import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function KaKaoNavigation() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                <Body
                    iconSrc1='\AppIcon\KakaoNavi.png'
                    appName='KaKao Navigation'
                    text1={`
                    Kakao Navigation is an app with functions such as road guidance, real-time traffic information, route modification and alternative routes, parking lot information, lane guidance, and real-time weather information.
                    
                    How to download : You can install on the app store or Play Store.`}
                />
            </S.Container>
        </S.Wrapper>
    );
};