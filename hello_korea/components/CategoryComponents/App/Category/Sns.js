import React from 'react';
import Link from 'next/link'
import MenuBox from '../../../../components/AppComponents/MenuBox';

export default function Content() {
    return (
        <> 
        <MenuBox 
            link="/InfoComponents/App/Sns/KakaoTalk" 
            iconSrc='\AppIcon\KakaoTalk.png' 
            text1='KakaoTalk' 
            text2='The most popular Korean subway application' 
            hashtag1='#SNS' 
        />
    </>
    );
};