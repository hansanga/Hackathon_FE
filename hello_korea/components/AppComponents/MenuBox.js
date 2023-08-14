import React from 'react';
import * as S from "./MenuBox.styled"; 

const MenuBox = ({ iconSrc, text1, text2 }) => (
  <S.MenuBottom>
    <S.MenuBoxIcon src={iconSrc} />
    <S.MenuBox>
      <S.MenuBottom1Text1>{text1}</S.MenuBottom1Text1>
      <S.MenuBottom1Text2>{text2}</S.MenuBottom1Text2>
    </S.MenuBox>
  </S.MenuBottom>
);

export default MenuBox;
