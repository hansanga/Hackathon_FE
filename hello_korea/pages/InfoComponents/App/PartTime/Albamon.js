import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Albamon() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                <Body
                    iconSrc1='\AppIcon\Albamon.png'
                    appName='Albamon'
                    text1={`
                    "알바몬" is one of South Korea's prominent part-time job recruitment and job-seeking services, connecting individuals seeking part-time work with employers looking for part-time employees. 알바몬 conveniently assists users with various part-time job information and the job-seeking process.

                    How to download : You can install on the app store or Play Store.`} />
            </S.Container>
        </S.Wrapper>
    );
};