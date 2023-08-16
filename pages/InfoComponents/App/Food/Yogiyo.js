import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Yogiyo() {
    const handleDownload = () => {
        // 갤럭시와 아이폰을 구분하여 다운로드 링크 설정
        if (navigator.userAgent.match(/Android/i)) {
            window.location.href = 'https://play.google.com/store/search?q=%EC%9A%94%EA%B8%B0%EC%9A%94&c=apps&hl=ko-KR';
        } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            window.location.href = 'https://apps.apple.com/kr/app/%EB%B0%B0%EB%8B%AC%EC%9A%94%EA%B8%B0%EC%9A%94-%EA%B8%B0%EB%8B%A4%EB%A6%BC-%EC%97%86%EB%8A%94-%EB%A7%9B%EC%A7%91-%EB%B0%B0%EB%8B%AC%EC%95%B1/id543831532';
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
                    iconSrc1='\AppIcon\Yogiyo.png'
                    appName='Yogiyo'
                    text1={`
                    "요기요" is a prominent South Korean food delivery and ordering app, offering users the ability to order a wide variety of dishes and have them delivered.  요기요 facilitates easy ordering and payment for food delivery. With a large user base, Yogiyo allows users to conveniently explore restaurants and menus and place orders.
    
                    How to download : You can install on the app store or Play Store.`} 
                    handleDownload={handleDownload}
                    handleShare={handleShare}
                    />
            </S.Container>
        </S.Wrapper>
    );
};