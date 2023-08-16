import React from 'react';
import * as S from './Body.styled';
import Link from 'next/link';


export default function Body({ iconSrc1, appName, text1 }) {
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

    const handleDownload = () => {
        // 갤럭시와 아이폰을 구분하여 각각의 앱 스토어로 이동
        if (navigator.userAgent.match(/Android/i)) {
            window.location.href = '링크_Google_Play_Store';
        } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            window.location.href = '링크_App_Store';
        }
    };

    return (
        <S.Container>
            <S.Title>
                <S.Icon src={iconSrc1} />
                <S.AppName>{appName}</S.AppName>
                <S.Line />
            </S.Title>
            <S.Info>{text1}</S.Info>
            <S.BtnZone>
                <S.Download onClick={handleDownload}>
                    <S.Icon src="/img/Download.svg" />
                    Link / Download
                </S.Download>
                <S.Share onClick={handleShare}>
                    <S.Icon src="/img/Share.svg" />
                    Share
                </S.Share>
            </S.BtnZone>
        </S.Container>
    );
}
