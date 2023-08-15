import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Saramin() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                <Body
                    iconSrc1='\AppIcon\Saramin.png'
                    appName='Saramin'
                    text1={`
                    "사람인" is a prominent South Korean employment and job-seeking platform that connects job seekers with recruiting companies.  It provides various job-related features and facilitates the job-seeking process more effectively by offering users a wide range of employment information, company profiles, and job-seeking functionalities.

                    How to download : You can install on the app store or Play Store.`} />
            </S.Container>
        </S.Wrapper>
    );
};