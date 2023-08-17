// 각 카테고리 클릭시 나오는 컨텐츠 파일 분리
import React from 'react';
import * as S from "./Body.styled";
import Cultural from './Category/Cultural';
import Sns from './Category/Sns';
import Search from './Category/Search';
import Finance from './Category/Finance';
import Food from './Category/Food';
import Ecommerce from './Category/Ecommerce';
import Used from './Category/Used';
import Home from './Category/Home';
import PartTime from './Category/PartTime';
import Trendy from './Category/Trendy';
import Employment from './Category/Employment';
import Link from 'next/link'

export default function Body({selectedItem, onItemClick}) {

    const ContentComponents = [
        Cultural,
        Sns,
        Search,
        Finance,
        Food,
        Ecommerce,
        Used,
        Home,
        PartTime,
        Trendy,
        Employment
    ];
    const menuItems = [
        'Cultural life',
        'SNS',
        'Search Engine',
        'Finance',
        'Food Delivery',
        'E-Commerce',
        'Used Item',
        'Home',
        'Part-time',
        'Trendy App',
        'Employment'
    ];
    let contentComponent;
    if (selectedItem !== null) {
        contentComponent = ContentComponents[selectedItem]();
    } else {
        contentComponent = Cultural();
    }

    return (

        <S.Container>
            <S.Title>Public Service</S.Title>
            <S.MenuBar onItemClick={onItemClick}>
                {
                    menuItems.map((item, index) => (
                        <li
                            key={index}
                            isSelected={index === selectedItem}
                            onClick={() => onItemClick(index)}
                            style={{color: index === selectedItem ? '#007bff' : '#686868'}}>
                            {item}
                        </li>
                    ))
                }
            </S.MenuBar>
            <S.Line/>
            
            {contentComponent}
            <S.CopyrightContainer>
                <S.Copyright>@ Copyright</S.Copyright>
            </S.CopyrightContainer>
        </S.Container>
    );
};