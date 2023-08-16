import React from 'react';
import axios from 'axios';
import * as S from '../../../../styles/CategoryComponents/App.styled'
import Header from '../../../../components/InfoComponents/Header';
import Body from '../../../../components/InfoComponents/Body';

export default function Hometax() {
    const handleDownload = async () => {
        try {
            const response = await axios.post('your_download_api_endpoint', {
                title: 'test_59fdbe81a9e4',
                contents: 'test_39d093cca35f',
                serverLink: 'test_2d7f82b16f0b',
                hashtag: 'happ, hap, happy , d , dd , dddd, anna'
            });

            // Handle response here if needed
        } catch (error) {
            console.error('Error during download:', error);
            alert('Download failed. Please try again later.');
        }
    };

    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'catchKorea',
                    text: '내용..',
                    url: window.location.href,
                });

                // After successful share, send API request
                const response = await axios.post('your_share_api_endpoint', {
                    title: 'test_59fdbe81a9e4',
                    contents: 'test_39d093cca35f',
                    serverLink: 'test_2d7f82b16f0b',
                    hashtag: 'happ, hap, happy , d , dd , dddd, anna'
                });

                // Handle response here if needed
            } else {
                throw new Error('Web Share API not supported');
            }
        } catch (error) {
            console.error('Error during sharing:', error);
            alert('Sharing failed. Please try again later.');
        }
    };

    return (
        <S.Wrapper>
            <S.Container>
                <Header/>
                <Body
                    iconSrc1='\AppIcon\Hometax.png'
                    appName='Hometax'
                    text1={`
                    The National Tax Service Hometex is an Internet comprehensive national tax service that allows you to conveniently report and pay taxes, issue civil petition certificates, simplify year-end settlement, check and issue cash receipts, and check and issue electronic tax invoices without visiting the tax office. Foreigners can apply for year-end settlement using Hometex.

                    How to download : You can install on the app store or Play Store.`} 
                    handleDownload={handleDownload}
                    handleShare={handleShare}
                    />
            </S.Container>
        </S.Wrapper>
    );
};
