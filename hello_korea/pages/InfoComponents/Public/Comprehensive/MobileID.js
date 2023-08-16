import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function MobileID() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                <Body
                    iconSrc1='\AppIcon\MobileID.png'
                    appName='Mobile ID'
                    text1={`
                    Mobile ID is a ID that can be conveniently stored in personal smartphone, and you can also issue a driver's license.Foreigners who have foreign registration is also possible to issue mobile driver's license certificates.

                    How to download : You can install on the app store or Play Store.`} />
            </S.Container>
        </S.Wrapper>
    );
};