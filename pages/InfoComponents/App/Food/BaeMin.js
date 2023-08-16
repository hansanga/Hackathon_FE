import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function BeaMin() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                <Body
                    iconSrc1='\AppIcon\BaeMin.png'
                    appName='BaeMin? 배달의 민족?'
                    text1={`
                    "배달의 민족" provides various information about a restaurant through delivery ratings, reviews, and more
    
                    How to download : You can install on the app store or Play Store.`} />
            </S.Container>
        </S.Wrapper>
    );
};