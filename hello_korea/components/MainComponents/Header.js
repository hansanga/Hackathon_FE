import React from 'react';
import * as S from "./Header.styled";

export default function Header(){

  return (
    <S.Container>
      <S.Logo src="/img/logo.png" />
      <S.MenuBar src="/img/menubar.png" />
      <S.Search type="text" placeholder="map" />
      <S.Hash src="/img/free-icon-hashtag-7710731.png" />
      <S.SearchImg src="/img/search.png" />
    </S.Container>
  );
};