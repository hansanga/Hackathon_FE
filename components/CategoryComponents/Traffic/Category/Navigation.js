import React from 'react';
import Link from 'next/link'
import MenuBox from '../../../../components/AppComponents/MenuBox';

export default function Content() {
    return (
        <>
        <MenuBox 
            link = "/InfoComponents/Traffic/Navigation/KakaoNavi" 
            iconSrc = '\AppIcon\KakaoNavi.png' 
            text1 = 'KaKao Navigation' 
            text2 = 'The most popular Korean subway application' 
            hashtag1='#traffic'
            hashtag2=''
            hashtag3 ='' 
        /> 
        <MenuBox
            link="/InfoComponents/Traffic/Navigation/TMap"
            iconSrc='\AppIcon\TMap.png'
            text1='T Map'
            text2='The most popular Korean Bus application'
            hashtag1='#traffic'
            hashtag2=''
            hashtag3 =''
        />
    </>
    );
};
