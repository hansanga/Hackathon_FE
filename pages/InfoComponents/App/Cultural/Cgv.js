import React, { useState, useEffect } from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled';
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Cgv() {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('https://catchkorea-a5799a624288.herokuapp.com/post/{category_id}'); // 백엔드 API 엔드포인트
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
        // 다운로드 로직은 그대로 유지
    };

    const handleShare = async () => {
        // 공유 로직은 그대로 유지
    };

    return (
        <S.Wrapper>
            <S.Container>
                <Header />
                {data ? (
                    <Body
                        iconSrc1='\AppIcon\Hometax.png'
                        appName={data.title} // API 응답 데이터에 있는 앱 이름 필드
                        text1={data.contents} // API 응답 데이터에 있는 앱 설명 필드
                        isselected={false} // 해당 부분은 명세서에서 정확한 값을 확인해야 합니다.
                        handleDownload={handleDownload}
                        handleShare={handleShare}
                    />
                ) : (
                    <p>Loading...</p>
                )}
            </S.Container>
        </S.Wrapper>
    );
}
