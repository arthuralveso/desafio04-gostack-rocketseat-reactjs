import React from 'react';
import Comments from './Comment';

export default function Post({data}) {
  return(
        <div className="post-container">
          <div className="post-child">
            <img src={data.author.avatar} alt=""/>
            <div className="post-item">
              <p><strong>{data.author.name}</strong></p>
              <p className="date">{data.date}</p>
            </div>
          </div>
          <p className="details">{data.content}</p>
          <div className="line"/>
          <div className="post-comment">
            {data.comments.map(comment => 
             <Comments key={comment.id} dataPost={comment} />)}
          </div>
        </div>
  )
}
