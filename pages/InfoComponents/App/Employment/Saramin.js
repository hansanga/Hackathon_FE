import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Saramin() {
    const handleDownload = () => {
        // 갤럭시와 아이폰을 구분하여 다운로드 링크 설정
        if (navigator.userAgent.match(/Android/i)) {
            window.location.href = 'https://play.google.com/store/search?q=%EC%82%AC%EB%9E%8C%EC%9D%B8&c=apps&hl=ko-KR';
        } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            window.location.href = 'https://apps.apple.com/kr/app/%EC%82%AC%EB%9E%8C%EC%9D%B8-%EC%9D%B8%ED%84%B4-%EC%8B%A0%EC%9E%85%EC%9D%98-%EC%B7%A8%EC%97%85%EB%B6%80%ED%84%B0-%EA%B2%BD%EB%A0%A5%EC%A7%81-%EC%9D%B4%EC%A7%81-%EC%BB%A4%EB%A6%AC%EC%96%B4%EA%B9%8C%EC%A7%80/id739013038';
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
                    iconSrc1='\AppIcon\Saramin.png'
                    appName='Saramin'
                    text1={`
                    "사람인" is a prominent South Korean employment and job-seeking platform that connects job seekers with recruiting companies.  It provides various job-related features and facilitates the job-seeking process more effectively by offering users a wide range of employment information, company profiles, and job-seeking functionalities.

                    How to download : You can install on the app store or Play Store.`} 
                    handleDownload={handleDownload}
                    handleShare={handleShare}
                    />
            </S.Container>
        </S.Wrapper>
    );
};