import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function KaKaoNavigation() {
    const handleDownload = () => {
        // 갤럭시와 아이폰을 구분하여 다운로드 링크 설정
        if (navigator.userAgent.match(/Android/i)) {
            window.location.href = 'https://play.google.com/store/search?q=%EC%B9%B4%EC%B9%B4%EC%98%A4%EB%82%B4%EB%B9%84&c=apps&hl=ko-KR';
        } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            window.location.href = 'https://apps.apple.com/kr/app/%EC%B9%B4%EC%B9%B4%EC%98%A4%EB%82%B4%EB%B9%84-%EC%A3%BC%EC%B0%A8-%EB%B0%9C%EB%A0%9B-%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%B6%A9%EC%A0%84-%EC%84%B8%EC%B0%A8-%EB%B3%B4%ED%97%98-%EC%A4%91%EA%B3%A0%EC%B0%A8/id417698849';
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
                    iconSrc1='\AppIcon\KakaoNavi.png'
                    appName='KaKao Navigation'
                    text1={`
                    Kakao Navigation is an app with functions such as road guidance, real-time traffic information, route modification and alternative routes, parking lot information, lane guidance, and real-time weather information.
                    
                    How to download : You can install on the app store or Play Store.`}
                    handleDownload={handleDownload}
                    handleShare={handleShare}
                />
            </S.Container>
        </S.Wrapper>
    );
};