import React from 'react';
import Link from 'next/link'
import MenuBox from '../../../../components/AppComponents/MenuBox';

export default function Content() {
    return (
        <> 
        <MenuBox 
            link="/InfoComponents/App/Finance/SamsungPay" 
            iconSrc='\AppIcon\SamsungPay.png' 
            text1='SamsungPay' 
            text2='The most popular Korean subway application' 
            hashtag1='#Finance' 
        />
        <MenuBox 
            link="/InfoComponents/App/Finance/NaverPay" 
            iconSrc='\AppIcon\NaverPay.png' 
            text1='NaverPay' 
            text2='The most popular Korean subway application' 
            hashtag1='#Finance' 
        />
    </>
    );
};