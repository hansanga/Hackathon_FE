import React from 'react';
import Link from 'next/link'
import MenuBox from '../../../../components/AppComponents/MenuBox';

export default function Content(){
    return (
        <>
        <MenuBox
            link="/InfoComponents/Traffic/KaKaoSubway"
            iconSrc='\AppIcon\KaKaoSubway.png'
            text1='KaKao Subway'
            text2='The most popular Korean subway application'
         />
        <MenuBox
            link="/InfoComponents/Traffic/KaKaoBus"
            iconSrc='\AppIcon\KaKaoBus.png'
            text1='KaKao Bus'
            text2='The most popular Korean Bus application'
            />
        </> 
  );
};
