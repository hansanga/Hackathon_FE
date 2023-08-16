import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Dabang() {
    const handleDownload = () => {
        // 갤럭시와 아이폰을 구분하여 다운로드 링크 설정
        if (navigator.userAgent.match(/Android/i)) {
            window.location.href = 'https://play.google.com/store/search?q=%EB%8B%A4%EB%B0%A9&c=apps&hl=ko-KR';
        } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            window.location.href = 'https://apps.apple.com/kr/app/%EB%8B%A4%EB%B0%A9-%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD-%EB%8C%80%ED%91%9C-%EB%B6%80%EB%8F%99%EC%82%B0-%EC%95%B1/id814840066';
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
                    iconSrc1='\AppIcon\Dabang.png'
                    appName='Dabang'
                    text1={`
                    "다방" is a mobile application that offers real estate brokerage and property search services in South Korea. Through this app, users can easily search for information about apartments, studio apartments, and offices, among other property types. It provides a convenient platform to connect with real estate agents and inquire about properties. 

                    How to download : You can install on the app store or Play Store.`} 
                    handleDownload={handleDownload}
                    handleShare={handleShare}
                    />
            </S.Container>
        </S.Wrapper>
    );
};