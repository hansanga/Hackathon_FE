import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function KaKaoSubway() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                <Body
                    iconSrc1='\AppIcon\Korail.png'
                    appName='Korail Talk'
                    text1={`
                    Korail Talk is an application that allows you to reserve tickets and regular boarding passes and check tickets, and to reserve various trains such as KTX, Saemaeul, and Mugunghwa.`} />
            </S.Container>
        </S.Wrapper>
    );
};