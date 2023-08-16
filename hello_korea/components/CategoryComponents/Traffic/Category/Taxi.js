import React from 'react';
import Link from 'next/link'
import MenuBox from '../../../../components/AppComponents/MenuBox';

export default function Content() {
    return (
        <>
        <MenuBox 
            link="/InfoComponents/Traffic/Taxi/KakaoTaxi" 
            iconSrc='\AppIcon\KakaoTaxi.png' 
            text1='Kakao Taxi' 
            text2='The most popular Korean subway application' 
            hashtag1='#traffic'
            hashtag2=''
            hashtag3 ='' 
        /> 
    </>
    );
};
