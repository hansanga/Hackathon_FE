import React from 'react';
import Link from 'next/link'
import MenuBox from '../../../../components/AppComponents/MenuBox';

export default function Content() {
    return (
        <>
        <MenuBox 
            link="/InfoComponents/App/Cultural/Cgv" 
            iconSrc='\AppIcon\Cgv.png' 
            text1='CGV' 
            text2='The most popular Korean subway application' 
            hashtag1='#movie' 
        /> 
        <MenuBox
            link="/InfoComponents/App/Cultural/Yanolja"
            iconSrc='\AppIcon\Yanolja.png'
            text1='Yanolja'
            text2='The most popular Korean Bus application'
            hashtag='#leisure'
        />
    </>
    );
};
