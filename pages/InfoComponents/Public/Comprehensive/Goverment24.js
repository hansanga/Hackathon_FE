import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled';
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Goverment24() {
    const handleDownload = () => {
        let downloadLink = '';
        
        // 갤럭시와 아이폰을 구분하여 다운로드 링크 설정
        if (navigator.userAgent.match(/Android/i)) {
            // 갤럭시의 Google Play Store 링크
            downloadLink = '링크_Google_Play_Store';
        } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            // 아이폰의 App Store 링크
            downloadLink = '링크_App_Store';
        }
        
        if (downloadLink) {
            window.location.href = downloadLink;
        } else {
            alert('Download link not available for your device.');
        }
    };

    return (
        <S.Wrapper>
            <S.Container>
                <Header />
                <S.ImageContainer>
                    <Body
                        iconSrc1="\AppIcon\Goverment24.png"
                        appName="Goverment 24"
                        img="/img/Rectangle 12.png"
                        text1={`
                        Government 24 is an Internet government service integrated portal site operated by the South Korean government.
                        There is a foreign service page, and services for foreign workers, married immigrants, and international students can be used through government 24.

                        How to download: You can install it from the app store or Play Store.`}
                    />
                    <S.Download onClick={handleDownload}>
                        <S.Icon src="/img/Download.svg" />
                        Link / Download
                    </S.Download>
                </S.ImageContainer>
            </S.Container>
        </S.Wrapper>
    );
};
