import React from 'react';


export default function Comments({dataPost}) {
  return (
    <div className="comment-container">
        <img src={dataPost.author.avatar} alt=""/>
          <div className="comment-details">
          <p><strong>{dataPost.author.name}</strong></p>
          <p>{dataPost.content}</p>
          </div>
    </div>

  )
}
