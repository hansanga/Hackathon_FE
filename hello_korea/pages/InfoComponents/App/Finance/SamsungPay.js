import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function SamsungPay() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                <Body
                    iconSrc1='\AppIcon\SamsungPay.png'
                    appName='SamsungPay'
                    text1={`
                    "삼성 페이" is a financial and payment service in South Korea, provided by Samsung. This app enables users to easily make payments by registering their cards on their smartphones. 

                    How to download : You can install on Play Store.`} />
            </S.Container>
        </S.Wrapper>
    );
};