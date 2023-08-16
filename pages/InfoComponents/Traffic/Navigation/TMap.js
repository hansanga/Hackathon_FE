import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function TMap() {
    const handleDownload = () => {
        // 갤럭시와 아이폰을 구분하여 다운로드 링크 설정
        if (navigator.userAgent.match(/Android/i)) {
            window.location.href = 'https://play.google.com/store/search?q=%ED%8B%B0%EB%A7%B5&c=apps&hl=ko-KR';
        } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            window.location.href = 'https://apps.apple.com/kr/app/tmap-%EB%8C%80%EB%A6%AC-%EC%A3%BC%EC%B0%A8-%EC%A0%84%EA%B8%B0%EC%B0%A8-%EC%B6%A9%EC%A0%84-%EB%A0%8C%ED%84%B0%EC%B9%B4%EB%A5%BC-%ED%8B%B0%EB%A7%B5%EC%97%90%EC%84%9C/id431589174';
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
                    iconSrc1='\AppIcon\TMap.png'
                    appName='T Map'
                    text1={`
                    T-Map is a navigation app with functions that identify the user's location, guide the automatic recommended route, and inform the expected arrival time.
                    
                    How to download : You can install on the app store or Play Store.`} 
                    handleDownload={handleDownload}
                    handleShare={handleShare}
                    />
            </S.Container>
        </S.Wrapper>
    );
};