import React from 'react';
import Link from 'next/link'
import MenuBox from '../../../../components/AppComponents/MenuBox';

export default function Content() {
    return (
        <> 
        <MenuBox 
            link = "/InfoComponents/App/PartTime/Albamon"  
            iconSrc = '\AppIcon\Albamon.png' 
            text1 = 'Albamon' 
            text2 = 'The most popular Korean subway application' 
            hashtag1 = '#Part-Time' 
        /> 
    </>
    );
};