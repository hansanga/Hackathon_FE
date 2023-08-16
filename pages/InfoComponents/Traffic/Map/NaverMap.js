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
                    iconSrc1='\AppIcon\NaverMap.png'
                    appName='Naver Map'
                    text1={`
                    Naver Map is an app with a map search function that finds the best route when using public transportation, cars, bicycles, and walking, and a map search function that finds places by place, address, road name, phone number, etc., and nearby information search function to easily find restaurants, banks, hospitals, bus stops, and subway stations.
                    
                    How to download : You can install on the app store or Play Store.`}/>
            </S.Container>
        </S.Wrapper>
    );
};