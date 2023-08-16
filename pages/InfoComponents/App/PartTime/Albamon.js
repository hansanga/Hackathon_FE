import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Albamon() {
    const handleDownload = () => {
        // 갤럭시와 아이폰을 구분하여 다운로드 링크 설정
        if (navigator.userAgent.match(/Android/i)) {
            window.location.href = 'https://play.google.com/store/search?q=%EC%95%8C%EB%B0%94%EB%AA%AC&c=apps&hl=ko-KR';
        } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            window.location.href = 'https://apps.apple.com/kr/app/%EC%95%8C%EB%B0%94%EB%AA%AC-%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD-1%EB%93%B1-%EC%95%84%EB%A5%B4%EB%B0%94%EC%9D%B4%ED%8A%B8-%ED%94%8C%EB%9E%AB%ED%8F%BC/id382535825';
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
                    iconSrc1='\AppIcon\Albamon.png'
                    appName='Albamon'
                    text1={`
                    "알바몬" is one of South Korea's prominent part-time job recruitment and job-seeking services, connecting individuals seeking part-time work with employers looking for part-time employees. 알바몬 conveniently assists users with various part-time job information and the job-seeking process.

                    How to download : You can install on the app store or Play Store.`} 
                    handleDownload={handleDownload}
                    handleShare={handleShare}
                    />
            </S.Container>
        </S.Wrapper>
    );
};