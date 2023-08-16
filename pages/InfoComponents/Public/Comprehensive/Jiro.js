import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Jiro() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                <Body
                    iconSrc1='\AppIcon\Jiro.png'
                    appName='Mobile Jiro'
                    text1={`
                    Mobile Jiro is an application that allows you to pay various taxes (national taxes, local taxes, fines, social insurance premiums, etc.), utility bills, and Jiro fees with your smartphone.

                    How to download : You can install on the app store or Play Store.`} />
            </S.Container>
        </S.Wrapper>
    );
};