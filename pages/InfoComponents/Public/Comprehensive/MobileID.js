import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function MobileID() {
    const handleDownload = () => {
        // 갤럭시와 아이폰을 구분하여 다운로드 링크 설정
        if (navigator.userAgent.match(/Android/i)) {
            window.location.href = 'https://play.google.com/store/apps/details?id=kr.go.mobileid&hl=ko-KR';
        } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            window.location.href = 'https://apps.apple.com/kr/app/%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%8B%A0%EB%B6%84%EC%A6%9D-%EC%9A%B4%EC%A0%84%EB%A9%B4%ED%97%88%EC%A6%9D-%EA%B5%AD%EA%B0%80%EB%B3%B4%ED%9B%88%EB%93%B1%EB%A1%9D%EC%A6%9D/id1599450372';
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
                    iconSrc1='\AppIcon\MobileID.png'
                    appName='Mobile ID'
                    text1={`
                    Mobile ID is a ID that can be conveniently stored in personal smartphone, and you can also issue a driver's license.Foreigners who have foreign registration is also possible to issue mobile driver's license certificates.

                    How to download : You can install on the app store or Play Store.`} 
                    handleDownload={handleDownload}
                    handleShare={handleShare}
                    />
            </S.Container>
        </S.Wrapper>
    );
};