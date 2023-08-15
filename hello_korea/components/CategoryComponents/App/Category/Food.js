import React from 'react';
import Link from 'next/link'
import MenuBox from '../../../../components/AppComponents/MenuBox';

export default function Content() {
    return (
        <> 
        < MenuBox 
            link = "/InfoComponents/App/Food/BaeMin" 
            iconSrc = '\AppIcon\BaeMin.png' 
            text1 = 'BaeMin? 배달의 민족?' 
            text2 = 'The most popular Korean subway application' 
            hashtag1='#Food'
                
        /> 
        <MenuBox
            link="/InfoComponents/App/Food/Yogiyo"
            iconSrc='\AppIcon\Yogiyo.png'
            text1='Yogiyo'
            text2='The most popular Korean subway application'
            hashtag1='#Food'
        />
    </>
    );
};