import React from 'react';
import Link from 'next/link'
import MenuBox from '../../../../components/AppComponents/MenuBox';

export default function Content() {
    return (
        <>
        <MenuBox 
            link="/InfoComponents/App/Ecommerce/Coupang" 
            iconSrc='\AppIcon\Coupang.png' 
            text1='Coupang' 
            text2='The most popular Korean subway application' 
            hashtag1='#E-commerce' 
        /> 
        <MenuBox 
            link="/InfoComponents/App/Ecommerce/EmartMall" 
            iconSrc='\AppIcon\EmartMall.png' 
            text1='E-mart Mall' 
            text2='The most popular Korean subway application' 
            hashtag1='#E-commerce' 
        />
        <MenuBox 
            link="/InfoComponents/App/Ecommerce/Kurly" 
            iconSrc='\AppIcon\Kurly.png' 
            text1='Kurly' 
            text2='The most popular Korean subway application' 
            hashtag1='#E-commerce' 
        />
        <MenuBox 
            link="/InfoComponents/App/Ecommerce/OliveYoung" 
            iconSrc='\AppIcon\OliveYoung.png' 
            text1='OliveYoung' 
            text2='The most popular Korean subway application' 
            hashtag1='#E-commerce' 
        />
        <MenuBox 
            link="/InfoComponents/App/Ecommerce/InterPark" 
            iconSrc='\AppIcon\InterPark.png' 
            text1='InterPark' 
            text2='The most popular Korean subway application' 
            hashtag1='#E-commerce' 
        />
    </>
    );
};
