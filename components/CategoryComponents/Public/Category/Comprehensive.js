import React from 'react';
import Link from 'next/link'
import MenuBox from '../../../../components/AppComponents/MenuBox';

export default function Content() {
    return (
        <>
        <MenuBox
            link="/InfoComponents/Public/Comprehensive/Goverment24"
            iconSrc='\AppIcon\Goverment24.png'
            text1='Goverment 24'
            text2='The most popular Korean Bus application'
            hashtag1='#public'
        />
        <MenuBox
            link="/InfoComponents/Public/Comprehensive/MobileID"
            iconSrc='\AppIcon\MobileID.png'
            text1='Mobile ID'
            text2='The most popular Korean Bus application'
            hashtag1='#public'
        />    
        <MenuBox 
            link = "/InfoComponents/Public/Comprehensive/Pass" 
            iconSrc = '\AppIcon\Pass.png' 
            text1 = 'Pass' 
            text2 = 'The most popular Korean subway application' 
            hashtag1 = '#public' 
        /> 
        <MenuBox
            link="/InfoComponents/Public/Comprehensive/Hometax"
            iconSrc='\AppIcon\Hometax.png'
            text1='Hometax'
            text2='The most popular Korean Bus application'
            hashtag1='#public'
        />
        <MenuBox
            link="/InfoComponents/Public/Comprehensive/Jiro"
            iconSrc='\AppIcon\Jiro.png'
            text1='Mobile Jiro'
            text2='The most popular Korean Bus application'
            hashtag1='#public'
        />
    </>
    );
};
