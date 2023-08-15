import React from 'react';
import Link from 'next/link'
import MenuBox from '../../../../components/AppComponents/MenuBox';

export default function Content() {
    return (
        <> 
        <MenuBox 
            link = "/InfoComponents/Traffic/Map/NaverMap" 
            iconSrc = '\AppIcon\NaverMap.png' 
            text1 = 'Naver Map' 
            text2 = 'The most popular Korean subway application' 
            hashtag1='#traffic'
            hashtag2=''
            hashtag3 ='' 
        /> 
        <MenuBox
            link="/InfoComponents/Traffic/Map/KakaoMap"
            iconSrc='\AppIcon\KakaoMap.png'
            text1='KaKao Map'
            text2='The most popular Korean Bus application'
            hashtag1='#traffic'
            hashtag2=''
            hashtag3 =''
        />
    </>
    );
};
