import React, { useState, useEffect } from 'react';
import * as S from "./PostForm.styled";


function PostForm() {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [serviceLink, setServiceLink] = useState('');
  const [hashtag, setHashtag] = useState('');
  // const [categories, setCategories] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState('');

  // useEffect(() => {
  //   // 백엔드 API에서 카테고리 데이터 가져오기
  //   fetch('/api/categories')
  //     .then(response => response.json())
  //     .then(data => {
  //       setCategories(data);
  //       setSelectedCategory(data[0]); // 초기값 설정
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
  // }, []);

  const handleSubmit = () => {
    // e.preventDefault();
    const hashtagArray = hashtag.split(',').map(tag => tag.trim());
    const requestData = {
      title,
      contents,
      serviceLink,
      hashtag: hashtagArray
    };

    // const postData = {
    //   category: selectedCategory,
    //   // 다른 게시물 정보 추가
    // };

    const category_id = 123; 

    fetch(`https://catchkorea-a5799a624288.herokuapp.com/upload/post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
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
      {/* <S.InputGroup>
      <S.Label>카테고리</S.Label>
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </S.InputGroup> */}
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