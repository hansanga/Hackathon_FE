import React, { useState } from 'react';
import * as S from './Emergency.styled'

import Header from '../../../components/MainComponents/Header'

export default function Emergency(){
   const [isInfoVisible, setIsInfoVisible] = useState(false);
   const [numberMenuHeight, setNumberMenuHeight] = useState('33px'); // Initial height

   const handleToggleClick = () => {
      setIsInfoVisible(!isInfoVisible);
      setNumberMenuHeight(isInfoVisible ? '33px' : 'auto'); // Toggle height
   };

   return (
      <S.Wrapper>
         <S.Container>
            <Header />
               <S.Menu>
                  <S.MenuIcon src='/img/free-icon-siren-883345.png' />
                  <S.MenuText>Emergency/Medical Hotline</S.MenuText>

                  <S.numberMenu style={{ height: numberMenuHeight }} onClick={handleToggleClick}>
                     <S.img src='/img/call.png'/>
                     <S.number>119 - Emergency (Fire & Ambulance)</S.number>
                     <S.toggle src='/img/toggle1.png' />
                     {isInfoVisible && (
                        <S.Info119>
                           This is the emergency number for various situations including fires, medical emergencies, and rescues.
                           It is used to request firefighting, emergency medical services, and rescue assistance.
                        </S.Info119>
                     )}
                  </S.numberMenu>

               </S.Menu>

         </S.Container>
      </S.Wrapper>
   );
};


