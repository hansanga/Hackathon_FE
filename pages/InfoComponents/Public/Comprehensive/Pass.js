import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Pass() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                <Body
                    iconSrc1='\AppIcon\Pass.png'
                    appName='Pass'
                    text1={`
                    PASS is a mobile authentication service that helps make mobile phone identity authentication more convenient provided by SK Telecom, KT, and U+.
                    The PASS app needs to install an app that corresponds to SK Telecom, KT, and U+. It is only available on smartphones opened under your name.
                    You can authenticate yourself using the text message authentication method without using the PASS app, but I recommend it because it is much easier to use the PASS app.

                    How to download : You can install on the app store or Play Store.`} />
            </S.Container>
        </S.Wrapper>
    );
};