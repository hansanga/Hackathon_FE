import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function OliveYoung() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                <Body
                    iconSrc1='\AppIcon\OliveYoung.png'
                    appName='OliveYoung'
                    text1={`
                    "Olive Young" is a well-known H&B (Health and Beauty) brand in South Korea. It can be purchased online, and you can also check receipts for items purchased offline.

                    How to download : You can install on the app store or Play Store.`} />
            </S.Container>
        </S.Wrapper>
    );
};