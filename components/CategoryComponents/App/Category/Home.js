import React from 'react';
import Link from 'next/link'
import MenuBox from '../../../../components/AppComponents/MenuBox';

export default function Content() {
    return (
        <> 
        < MenuBox 
            link = "/InfoComponents/App/Home/Ohouse" 
            iconSrc = '\AppIcon\Ohouse.png' 
            text1 = 'Ohouse? 오늘의 집?' 
            text2 = 'The most popular Korean subway application' 
            hashtag1='#Interior'        
            />
        < MenuBox 
            link = "/InfoComponents/App/Home/Dabang" 
            iconSrc = '\AppIcon\Dabang.png' 
            text1 = 'Dabang' 
            text2 = 'The most popular Korean subway application' 
            hashtag1='#Real estate'        
        />
                < MenuBox 
            link = "/InfoComponents/App/Home/Zigbang" 
            iconSrc = '\AppIcon\Zigbang.png' 
            text1 = 'Zigbang' 
            text2 = 'The most popular Korean subway application' 
            hashtag1='#Real estate'        
        />    
    </>
    );
};