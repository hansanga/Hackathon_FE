import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Hometax() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                <Body
                    iconSrc1='\AppIcon\Hometax.png'
                    appName='Hometax'
                    text1={`
                    The National Tax Service Hometex is an Internet comprehensive national tax service that allows you to conveniently report and pay taxes, issue civil petition certificates, simplify year-end settlement, check and issue cash receipts, and check and issue electronic tax invoices without visiting the tax office. Foreigners can apply for year-end settlement using Hometex.

                    How to download : You can install on the app store or Play Store.`} />
            </S.Container>
        </S.Wrapper>
    );
};