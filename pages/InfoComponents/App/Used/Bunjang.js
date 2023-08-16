import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Bunjang() {
    const handleDownload = () => {
        // 갤럭시와 아이폰을 구분하여 다운로드 링크 설정
        if (navigator.userAgent.match(/Android/i)) {
            window.location.href = 'https://play.google.com/store/apps/details?id=kr.co.quicket&hl=ko-KR';
        } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            window.location.href = 'https://apps.apple.com/kr/app/%EB%B2%88%EA%B0%9C%EC%9E%A5%ED%84%B0/id395672275';
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
                    iconSrc1='\AppIcon\Bunjang.png'
                    appName='Bungaejangter'
                    text1={`
                    "번개 장터" is one of the popular secondhand trading platforms in South Korea, enabling users to trade and purchase used items. Typically, items are exchanged through mail delivery.

                    How to download : You can install on the app store or Play Store.`} 
                    handleDownload={handleDownload}
                    handleShare={handleShare}
                    />
            </S.Container>
        </S.Wrapper>
    );
};