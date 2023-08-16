import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Emergency() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                <Body
                    iconSrc1='\AppIcon\Emergency.png'
                    appName='Emergency Ready App'
                    text1={`
                    Emergency Ready App is a disaster information app for foreigners.
                    Information such as disaster alerts, shelters, emergency medical centers, police stations, fire stations, embassies, safety guides, etc.

                    How to download : You can install on the app store or Play Store.`} />
            </S.Container>
        </S.Wrapper>
    );
};