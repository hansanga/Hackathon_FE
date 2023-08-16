import React, { useState, useEffect } from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled';
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';
import Image from 'next/image';

export default function Cgv() {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('https://catchkorea-a5799a624288.herokuapp.com/v2/api-docs');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDownload = () => {
        // 갤럭시와 아이폰을 구분하여 다운로드 링크 설정
        if (navigator.userAgent.match(/Android/i)) {
            window.location.href = 'https://play.google.com/store/search?q=%EC%95%BC%EB%86%80%EC%9E%90&c=apps&hl=ko-KR';
        } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            window.location.href = 'https://apps.apple.com/kr/app/%EC%95%BC%EB%86%80%EC%9E%90/id436731843';
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
                {data ? (
                    <div> 
                        <Body
                            iconSrc1={data.iconSrc}
                            appName={data.title}
                            text1={data.contents}
                            isselected={false}
                            handleDownload={handleDownload}
                            handleShare={handleShare}
                        />
                        <Image
                            src="/img/cgv.png"
                            alt="CGV Logo"
                            width={100} // 이미지 가로 크기
                            height={100} // 이미지 세로 크기
                        />
                    </div> 
                ) : (
                    <p>Loading...</p>
                )}
            </S.Container>
        </S.Wrapper>
    );
}
