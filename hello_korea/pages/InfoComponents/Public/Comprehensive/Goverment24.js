import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Goverment24() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                <Body
                    iconSrc1='\AppIcon\Goverment24.png'
                    appName='Goverment 24'
                    text1={`
                    Government 24 is an Internet government service integrated portal site operated by the South Korean government.
                    There is a foreign service page, and services for foreign workers, married immigrants, and international students can be used through government 24.

                    How to download : You can install on the app store or Play Store.`} />
            </S.Container>
        </S.Wrapper>
    );
};