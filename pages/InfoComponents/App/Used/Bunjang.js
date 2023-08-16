import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Bunjang() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                <Body
                    iconSrc1='\AppIcon\Bunjang.png'
                    appName='Bungaejangter'
                    text1={`
                    "번개 장터" is one of the popular secondhand trading platforms in South Korea, enabling users to trade and purchase used items. Typically, items are exchanged through mail delivery.

                    How to download : You can install on the app store or Play Store.`} />
            </S.Container>
        </S.Wrapper>
    );
};