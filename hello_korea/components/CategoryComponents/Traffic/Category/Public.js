import React from 'react';
import Link from 'next/link'
import MenuBox from '../../../../components/AppComponents/MenuBox';

export default function Content() {
    return (
        <> 
        <MenuBox 
            link = "/InfoComponents/Traffic/Public/KaKaoSubway" 
            iconSrc = '\AppIcon\KakaoSubway.png' 
            text1 = 'KaKao Subway' 
            text2 = 'The most popular Korean subway application' 
            hashtag1='#traffic'
            hashtag2='#subway'
            hashtag3 =''
        /> 
        <MenuBox
            link="/InfoComponents/Traffic/Public/KaKaoBus"
            iconSrc='\AppIcon\KakaoBus.png'
            text1='KaKao Bus'
            text2='The most popular Korean Bus application'
            hashtag1='#traffic'
            hashtag2='#bus'
            hashtag3 =''
        />
        <MenuBox
            link="/InfoComponents/Traffic/Public/Korail"
            iconSrc='\AppIcon\Korail.png'
            text1='Korail Talk'
            text2='The most popular Korean Bus application'
            hashtag1='#traffic'
            hashtag2='#KTX'
            hashtag3 =''
        />    
        <MenuBox
            link="/InfoComponents/Traffic/Public/SRT"
            iconSrc='\AppIcon\SRT.png'
            text1='KaKao Bus'
            text2='The most popular Korean Bus application'
            hashtag1='#traffic'
            hashtag2='#SRT'
            hashtag3 =''
        />
    </>
    );
};