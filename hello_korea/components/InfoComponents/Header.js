import React, { useState } from 'react';
import * as S from "./Header.styled";
import MenuBar from "../MenuComponents/MenuBar";

export default function Header(){
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <S.Container>
      <S.Logo>Hello Korea</S.Logo>
      <S.MenuBar src="/img/menubar.png" onClick={toggleMenu} menuVisible={menuVisible} />
      {menuVisible && <MenuBar menuVisible={menuVisible} onClick={toggleMenu} />}
    </S.Container>
  );
};

