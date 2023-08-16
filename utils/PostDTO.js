

class PostDTO {
  constructor(title, contents, serviceLink, hashtag) {
    this.title = title;
    this.contents = contents;
    this.serviceLink = serviceLink;
    this.hashtag = hashtag;
  }

  getTitle() {
    return this.title;
    }
    
  getContents() {
    return this.contents;
  }
    
  getServiceLink() {
    return this.serviceLink;
  }

  getHashtag() {
    return this.hashtag;
  }
}

export default PostDTO;
