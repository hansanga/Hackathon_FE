import React, { useState, useEffect } from 'react';
import MenuBox from '../../../../components/AppComponents/MenuBox';
import axios from 'axios';

export default function Content() {
    const [menuData, setMenuData] = useState([]); // 메뉴 데이터를 저장할 상태

    useEffect(() => {
        // API에서 메뉴 데이터를 가져오는 함수
        const fetchMenuData = async () => {
            try {
                const response = await axios.get('https://catchkorea-a5799a624288.herokuapp.com/post/{category_id}'); // API 엔드포인트
                setMenuData(response.data); // API에서 받아온 데이터를 상태에 저장
            } catch (error) {
                console.error('Error fetching menu data:', error);
            }
        };

        fetchMenuData(); // 메뉴 데이터를 가져오는 함수 호출
    }, []);

    return (
        <>
            {menuData.map(menu => (
                <MenuBox
                    key={menu.link} // 각 메뉴는 고유한 키값을 가져야 합니다.
                    link={menu.link}
                    iconSrc={menu.iconSrc}
                    text1={menu.text1}
                    text2={menu.text2}
                    hashtag1={menu.hashtag}
                />
            ))}
        </>
    );
};
