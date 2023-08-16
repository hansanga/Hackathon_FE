import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Zigbang() {
    const handleDownload = () => {
        // 갤럭시와 아이폰을 구분하여 다운로드 링크 설정
        if (navigator.userAgent.match(/Android/i)) {
            window.location.href = 'https://play.google.com/store/search?q=%EC%A7%81%EB%B0%A9&c=apps&hl=ko-KRR';
        } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            window.location.href = 'https://apps.apple.com/kr/app/%EC%A7%81%EB%B0%A9-%EC%95%84%ED%8C%8C%ED%8A%B8-%EC%9B%90%EB%A3%B8-%EC%98%A4%ED%94%BC%EC%8A%A4%ED%85%94-%EB%B9%8C%EB%9D%BC/id503098735';
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
                    iconSrc1='\AppIcon\Zigbang.png'
                    appName='Zigbang'
                    text1={`
                    "직방" is a leading service in South Korea that offers real estate brokerage and property search. Through this app, users can easily search for information about various types of properties such as apartments, studio apartments, and offices, and conveniently connect with real estate agents for inquiries, all done remotely. 

                    How to download : You can install on the app store or Play Store.`} 
                    handleDownload={handleDownload}
                    handleShare={handleShare}
                    />
            </S.Container>
        </S.Wrapper>
    );
};