import React, { useState, useEffect } from 'react';
import * as S from '../../../../styles/CategoryComponents/App.styled';
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Cgv() {
    const [data, setData] = useState(null); // API로부터 받아온 데이터를 저장할 상태

    const fetchData = async () => {
        try {
            const response = await fetch('https://catchkorea-a5799a624288.herokuapp.com/api'); // 백엔드 API 엔드포인트
            const jsonData = await response.json();
            setData(jsonData); // API로부터 받은 데이터를 상태에 저장
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData(); // 컴포넌트가 렌더링될 때 데이터를 가져오도록 설정
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
                        iconSrc1={data.iconSrc} // API 응답 데이터에 있는 이미지 경로 필드
                        appName={data.appName} // API 응답 데이터에 있는 앱 이름 필드
                        text1={data.appDescription} // API 응답 데이터에 있는 앱 설명 필드
                        isselected={data.isselected} // 수정된 부분
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
