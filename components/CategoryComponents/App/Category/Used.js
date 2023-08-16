import React from 'react';
import Link from 'next/link'
import MenuBox from '../../../../components/AppComponents/MenuBox';

export default function Content() {
    return (
        <> 
        < MenuBox 
            link = "/InfoComponents/App/Used/Joongna" 
            iconSrc = '\AppIcon\Joongna.png' 
            text1 = 'Joonggonara? 중고나라?' 
            text2 = 'The most popular Korean subway application' 
            hashtag1='#Used-Item'        
            />
        < MenuBox 
            link = "/InfoComponents/App/Home/Bunjang" 
            iconSrc = '\AppIcon\Bunjang.png' 
            text1 = 'Bungaejangter' 
            text2 = 'The most popular Korean subway application' 
            hashtag1='#Used-Item'        
        />
        < MenuBox 
            link = "/InfoComponents/App/Home/karrot" 
            iconSrc = '\AppIcon\karrot.png' 
            text1 = 'Danggeun Market' 
            text2 = 'The most popular Korean subway application' 
            hashtag1='#Used-Item'        
        />  
    </>
    );
};