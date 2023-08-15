import React from 'react';
import Link from 'next/link'
import MenuBox from '../../../../components/AppComponents/MenuBox';

export default function Content() {
    return (
        <> 
        <MenuBox 
            link = "/InfoComponents/App/Employment/Saramin"  
            iconSrc = '\AppIcon\Saramin.png' 
            text1 = 'Saramin' 
            text2 = 'The most popular Korean subway application' 
            hashtag1 = '#employment' 
        /> 
    </>
    );
};