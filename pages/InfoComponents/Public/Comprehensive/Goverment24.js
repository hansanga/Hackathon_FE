import React from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled';
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Goverment24() {
    const handleDownload = () => {
        // 갤럭시와 아이폰을 구분하여 다운로드 링크 설정
        if (navigator.userAgent.match(/Android/i)) {
            window.location.href = '링크_Google_Play_Store';
        } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            window.location.href = '링크_App_Store';
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
                <Header />
                <Body
                    iconSrc1="\AppIcon\Goverment24.png"
                    appName="Goverment 24"
                    text1={`
                    Government 24 is an Internet government service integrated portal site operated by the South Korean government.
                    There is a foreign service page, and services for foreign workers, married immigrants, and international students can be used through government 24.

                    How to download: You can install it from the app store or Play Store.`}
                    handleDownload={handleDownload}
                    handleShare={handleShare}
                />
            </S.Container>
        </S.Wrapper>
    );
};
