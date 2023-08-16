import React from 'react';
import Link from 'next/link'
import MenuBox from '../../../../components/AppComponents/MenuBox';

export default function Content() {
    return (
        <> 
        <MenuBox 
            link = "/InfoComponents/Public/Safety/Emergency" 
            iconSrc = '\AppIcon\Emergency.png' 
            text1 = 'Emergency Ready App' 
            text2 = 'The most popular Korean subway application' 
            hashtag1 = '#public' 
        /> 
    </>
    );
};