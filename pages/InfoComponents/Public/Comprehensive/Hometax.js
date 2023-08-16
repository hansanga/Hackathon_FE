import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Hometax() {
    const handleDownload = () => {
        // 갤럭시와 아이폰을 구분하여 다운로드 링크 설정
        if (navigator.userAgent.match(/Android/i)) {
            window.location.href = 'https://play.google.com/store/search?q=%ED%99%88%ED%83%9D%EC%8A%A4&c=apps&hl=ko-KR';
        } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            window.location.href = 'https://apps.apple.com/kr/app/%EA%B5%AD%EC%84%B8%EC%B2%AD-%ED%99%88%ED%83%9D%EC%8A%A4-%EC%86%90%ED%83%9D%EC%8A%A4/id495157796';
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
                    iconSrc1='\AppIcon\Hometax.png'
                    appName='Hometax'
                    text1={`
                    The National Tax Service Hometex is an Internet comprehensive national tax service that allows you to conveniently report and pay taxes, issue civil petition certificates, simplify year-end settlement, check and issue cash receipts, and check and issue electronic tax invoices without visiting the tax office. Foreigners can apply for year-end settlement using Hometex.

                    How to download : You can install on the app store or Play Store.`} 
                    handleDownload={handleDownload}
                    handleShare={handleShare}
                    />
            </S.Container>
        </S.Wrapper>
    );
};