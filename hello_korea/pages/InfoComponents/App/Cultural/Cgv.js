import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Cgv() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                <Body
                    iconSrc1='\AppIcon\Cgv.png'
                    appName='Cgv'
                    text1={`
                    CGV is a major movie theater in South Korea. Through the app, you can view various movie information and make reservations. 
                    A variety of events and discounts are available.
                    You can also order snacks in advance or have them delivered through Fast Order.

                    How to download : You can install on the app store or Play Store.`} />
            </S.Container>
        </S.Wrapper>
    );
};