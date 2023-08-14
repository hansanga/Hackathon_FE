import React from 'react';
import * as S from "./Body.styled";
import TipBox from '../../../components/TipComponents/TipBox';
import Cultural from './Category/Cultural';
import Sns from './Category/Sns';
import Search from './Category/Search';
import Finance from './Category/Finance';
import Food from './Category/Food';
import Ecommerce from './Category/Ecommerce';
import Used from './Category/Used';
import Interior from './Category/Interior';
import PartTime from './Category/PartTime';
import Trendy from './Category/Trendy';
import Employment from './Category/Employment';
import Link from 'next/link'

export default function Body({ selectedItem, onItemClick }) {

   const ContentComponents = [Cultural, Sns, Search, Finance, Food, Ecommerce, Used, Interior, PartTime, Trendy, Employment];
   const menuItems = ['Cultural life', 'SNS', 'Search Engine', 'Finance', 'Food Delivery', 'E-Commerce', 'Used Item',
      'Interior', 'Part-time', 'Trendy App', 'Employment'];
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
           {menuItems.map((item, index) => (
              <li
                 key={index}
                 isSelected={index === selectedItem}
                 onClick={() => onItemClick(index)}
                 style={{ color: index === selectedItem ? '#007bff' : '#686868' }}>
            {item}
            </li>
           ))}
        </S.MenuBar>
        <S.Line />
        <TipBox />
        {contentComponent}

         <S.CopyrightContainer>
            <S.Copyright>@ Copyright</S.Copyright>
         </S.CopyrightContainer>
      </S.Container>   
  );
};