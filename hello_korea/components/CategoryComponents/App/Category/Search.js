import React from 'react';
import Link from 'next/link'
import MenuBox from '../../../../components/AppComponents/MenuBox';

export default function Content() {
    return (
        <> 
        <MenuBox 
            link="/InfoComponents/App/Search/Naver" 
            iconSrc='\AppIcon\Naver.png' 
            text1='Naver' 
            text2='The most popular Korean subway application' 
            hashtag1='#search' 
        />
    </>
    );
};