

class PostDTO {
  constructor(title, contents, serverLink, hashtag) {
    this.title = title;
    this.contents = contents;
    this.serverLink = serverLink;
    this.hashtag = hashtag;
  }

  getTitle() {
    return this.title;
    }
    
  getContents() {
    return this.contents;
  }
    
  getServerLink() {
    return this.serverLink;
  }

  getHashtag() {
    return this.hashtag;
  }
}

export default PostDTO;
