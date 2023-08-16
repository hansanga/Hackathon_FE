import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Ohouse() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                <Body
                    iconSrc1='\AppIcon\Ohouse.png'
                    appName='Ohouse'
                    text1={`
                    "오늘의 집" is a popular interior and furniture shopping service in South Korea, where users can explore a variety of interior design ideas and purchase furniture and accessories through a mobile app. This app enables users to easily decorate and design their living spaces. 

                    How to download : You can install on the app store or Play Store.`} />
            </S.Container>
        </S.Wrapper>
    );
};