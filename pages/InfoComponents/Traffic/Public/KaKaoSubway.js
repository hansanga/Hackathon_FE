import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function KaKaoSubway() {
    const handleDownload = () => {
        // 갤럭시와 아이폰을 구분하여 다운로드 링크 설정
        if (navigator.userAgent.match(/Android/i)) {
            window.location.href = 'https://play.google.com/store/search?q=%EC%B9%B4%EC%B9%B4%EC%98%A4%EC%A7%80%ED%95%98%EC%B2%A0&c=apps&hl=ko-KR';
        } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            window.location.href = 'https://apps.apple.com/kr/app/%EC%B9%B4%EC%B9%B4%EC%98%A4%EC%A7%80%ED%95%98%EC%B2%A0/id1095533900';
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
                    iconSrc1='\AppIcon\KaKaoSubway.png'
                    appName='KaKao Subway'
                    text1={`
                    Kakao Subway is an app that provides information on exits and neighborhoods of all subway stations across the country, and has the alarm function to notify you one stop before your destination, and the function to share the expected arrival time with your Kakao Talk friends.
                    
                    How to download : You can install on the app store or Play Store.`}
                    handleDownload={handleDownload}
                    handleShare={handleShare} 
                    />
            </S.Container>
        </S.Wrapper>
    );
};