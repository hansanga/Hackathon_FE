import React from 'react';
import Link from 'next/link'
import MenuBox from '../../../../components/AppComponents/MenuBox';

export default function Content(){
    return (
        <>
        <MenuBox
            link="/CategoryComponents/Tip"
            iconSrc='\img\Subway.png'
            text1='KaKao Subway'
            text2='The most popular Korean subway application'
         />
        <MenuBox
            link="/CategoryComponents/Tip"
            iconSrc='\img\Subway.png'
            text1='KaKao Subway'
            text2='The most popular Korean subway application'
            />
        </> 
  );
};