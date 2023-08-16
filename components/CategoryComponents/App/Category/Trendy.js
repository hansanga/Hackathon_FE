import React from 'react';
import Link from 'next/link'
import MenuBox from '../../../../components/AppComponents/MenuBox';

export default function Content() {
    return (
        <> 
        <MenuBox 
            link = "/InfoComponents/App/Trendy/MarooAi"  
            iconSrc = '\AppIcon\MarooAi.png' 
            text1 = 'MarooAi' 
            text2 = 'The most popular Korean subway application' 
            hashtag1 = '#Trendy' 
        /> 
    </>
    );
};