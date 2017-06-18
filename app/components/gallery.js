import React, { Component} from 'react';

class Gallery extends Component{
  render(){

    let noBookCoverFound = "https://onlinebookclub.org/book-covers/no-cover.jpg";

    return(
      <div>{
        this .props.items.map((item, index) => {
          let {title, imageLinks, infoLink} = item.volumeInfo;
          return(
            <div key={index} className = "book">
              <img
                src={imageLinks !== undefined? imageLinks.thumbnail : noBookCoverFound}
                alt="book thumbnail"
                className = "bookImg"
              />
              <div className = "bookText">
                {title}
              </div>
            </div>
          )
        })
      }</div>
    )
  }
}

export default Gallery;
