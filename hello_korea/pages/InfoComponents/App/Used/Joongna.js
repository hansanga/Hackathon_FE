import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Joongna() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                <Body
                    iconSrc1='\AppIcon\Joongna.png'
                    appName='Joonggonarar'
                    text1={`
                    "중고 나라" app is one of the leading secondhand trading services in South Korea, allowing users to buy and sell used items. Typically, goods are exchanged through mail delivery.

                    How to download : You can install on the app store or Play Store.`} />
            </S.Container>
        </S.Wrapper>
    );
};