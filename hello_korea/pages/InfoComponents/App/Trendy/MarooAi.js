import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function MarooAi() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                <Body
                    iconSrc1='\AppIcon\MarooAi.png'
                    appName='MarooAi'
                    text1={`
                    "Maroo AI" is an app powered by generative AI that offers various styles, allowing users to insert their faces into photos of famous celebrities or popular styles to create new looks. 

                    How to download : You can install on the app store or Play Store.`} />
            </S.Container>
        </S.Wrapper>
    );
};