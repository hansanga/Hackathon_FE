import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Yanolja() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                <Body
                    iconSrc1='\AppIcon\Yanolja.png'
                    appName='Yanolja'
                    text1={`
                    This app provides leisure services such as domestic and overseas accommodation and leisure reservations in Korea.
                    You can book accommodations such as motels, hotels, resorts/condos, pensions/pool villas, and guesthouses, as well as tickets for various leisure activities, performances/exhibitions, rental cars, KTX, express buses, and overseas accommodations.

                    How to download : You can install on the app store or Play Store.`} />
            </S.Container>
        </S.Wrapper>
    );
};