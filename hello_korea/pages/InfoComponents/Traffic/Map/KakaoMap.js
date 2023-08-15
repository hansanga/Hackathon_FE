import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function NaverMap() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                <Body
                    iconSrc1='\AppIcon\KakaoMap.png'
                    appName='Kakao Map'
                    text1={`
                    Kakao Map is an app that provides information such as bicycle road, road view, road view, bus location, bus location, bus location, bus location, bus location, bus location, bus location, bus location.
                        
                    How to download: You can install on the app store or Play Store.` }
                />
            </S.Container>
        </S.Wrapper>
    );
};