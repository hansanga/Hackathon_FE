import React, { useState, useEffect } from 'react';
import PostDTO from '../../utils/PostDTO';
import * as S from "./PostForm.styled";


function PostForm() {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [serviceLink, setServiceLink] = useState('');
  const [hashtag, setHashtag] = useState('');

  const handleSubmit = () => {

    const postDTO = new PostDTO(title, contents, serviceLink, hashtag);

    fetch(`https://catchkorea-a5799a624288.herokuapp.com/upload/post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postDTO)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Response:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <S.FormWrapper onSubmit={handleSubmit}>
      <S.InputGroup>
        <S.Label>제목</S.Label>
        <S.Input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </S.InputGroup>
      <S.InputGroup>
        <S.Label>내용</S.Label>
        <S.TextArea value={contents} onChange={e => setContents(e.target.value)} />
      </S.InputGroup>
      <S.InputGroup>
        <S.Label>서비스 링크</S.Label>
        <S.Input type="text" value={serviceLink} onChange={e => setServiceLink(e.target.value)} />
      </S.InputGroup>
      <S.InputGroup>
        <S.Label>해시태그</S.Label>
        <S.Input type="text" value={hashtag} onChange={e => setHashtag(e.target.value)} />
      </S.InputGroup>
      <S.SubmitButton type="submit">게시물 작성</S.SubmitButton>
    </S.FormWrapper>
  );
}

export default PostForm;