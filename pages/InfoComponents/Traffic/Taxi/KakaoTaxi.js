import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function KakaoTaxi() {
    const handleDownload = () => {
        // 갤럭시와 아이폰을 구분하여 다운로드 링크 설정
        if (navigator.userAgent.match(/Android/i)) {
            window.location.href = 'https://play.google.com/store/search?q=%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%83%9D%EC%8B%9C&c=apps&hl=ko-KR';
        } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            window.location.href = 'https://apps.apple.com/kr/app/%EC%B9%B4%EC%B9%B4%EC%98%A4-t/id981110422';
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
                    iconSrc1='\AppIcon\KakaoTaxi.png'
                    appName='KaKao Taxi'
                    text1={`
                    Kakao Taxi is an app that allows you to call a taxi or a proxy driver, and has the function of booking intercity buses, trains, and airlines across the country.
                    
                    How to download : **You can install on the app store or Play Store.`}
                    handleDownload={handleDownload}
                    handleShare={handleShare} 
                    />
            </S.Container>
        </S.Wrapper>
    );
};