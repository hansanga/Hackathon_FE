import React from 'react';
import Link from 'next/link'
import MenuBox from '../../../../components/AppComponents/MenuBox';

export default function Content(){
    return (
        <>
        <MenuBox
            link="/InfoComponents/Public/Pass"
            iconSrc='\AppIcon\Pass.png'
            text1='Pass'
            text2='The most popular Korean subway application'
         />
        <MenuBox
            link="/InfoComponents/Public/MobileID"
            iconSrc='\AppIcon\MobileID.png'
            text1='Mobile ID'
            text2='The most popular Korean Bus application'
            />
        </> 
  );
};
