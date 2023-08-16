import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Yogiyo() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                <Body
                    iconSrc1='\AppIcon\Yogiyo.png'
                    appName='Yogiyo'
                    text1={`
                    "요기요" is a prominent South Korean food delivery and ordering app, offering users the ability to order a wide variety of dishes and have them delivered.  요기요 facilitates easy ordering and payment for food delivery. With a large user base, Yogiyo allows users to conveniently explore restaurants and menus and place orders.
    
                    How to download : You can install on the app store or Play Store.`} />
            </S.Container>
        </S.Wrapper>
    );
};