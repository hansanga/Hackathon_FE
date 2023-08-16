import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Yanolja() {
    const handleDownload = () => {
        // 갤럭시와 아이폰을 구분하여 다운로드 링크 설정
        if (navigator.userAgent.match(/Android/i)) {
            window.location.href = 'https://play.google.com/store/search?q=%EC%95%BC%EB%86%80%EC%9E%90&c=apps&hl=ko-KR';
        } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            window.location.href = 'https://apps.apple.com/kr/app/%EC%95%BC%EB%86%80%EC%9E%90/id436731843';
        }
    };

    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'catchKorea',
                    text: '내용뭐라고,,,',
                    url: window.location.href,
                });
            } else {
                throw new Error('Web Share API not supported');
            }
        } catch (error) {
            console.error('Error sharing:', error);
            alert('Sharing failed. Please try again later.');
        }
    };
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

                    How to download : You can install on the app store or Play Store.`}
                    handleDownload={handleDownload}
                    handleShare={handleShare} 
                    />
            </S.Container>
        </S.Wrapper>
    );
};