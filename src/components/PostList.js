import React, { Component } from 'react';
import Post from './Post';
 

export default class PostList extends Component {
  state ={
    posts : [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: 'https://i.pravatar.cc/150?img=3'
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar: "https://i.pravatar.cc/150?img=7"
            },
            content: "Possivelmente"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Julio Alcantara",
          avatar: "https://avatars1.githubusercontent.com/u/43497266?s=460&v=4"
        },
        date: "04 Jun 2019",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non est elementum, cursus urna non, varius nunc. Ut fringilla nunc a velit sodales, et eleifend metus consequat. Nam quis purus quis risus auctor tincidunt. Integer quis gravida eros. Ut lobortis mauris eu diam venenatis, id sodales felis sodales. Maecenas malesuada lorem vel dui",
        comments: [
          {
            id: 4,
            author: {
              name: "Diego Fernandes",
              avatar: "https://i.pravatar.cc/150?img=61"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non est elementum, cursus urna non, varius nunc. Ut fringilla nunc a velit sodales, et eleifend metus consequat. Nam quis purus quis risus auctor tincidunt. Integer quis gravida eros. Ut lobortis mauris eu diam venenatis, id sodales felis sodales. Maecenas malesuada lorem vel dui"
          }
        ]
      },
      {
        id: 5,
        author: {
          name: "Julio Alcantara",
          avatar: "https://i.pravatar.cc/150?img=68"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://i.pravatar.cc/150?img=45"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non est elementum, cursus urna non, varius nunc. Ut fringilla nunc a velit sodales, et eleifend metus consequat. Nam quis purus quis risus auctor tincidunt. Integer quis gravida eros. Ut lobortis mauris eu diam venenatis, id sodales felis sodales. Maecenas malesuada lorem vel dui"
          }
        ]
      },
      {
        id: 6,
        author: {
          name: "Julio Alcantara",
          avatar: "https://i.pravatar.cc/150?img=43"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://i.pravatar.cc/150?img=32"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non est elementum, cursus urna non, varius nunc. Ut fringilla nunc a velit sodales, et eleifend metus consequat. Nam quis purus quis risus auctor tincidunt. Integer quis gravida eros. Ut lobortis mauris eu diam venenatis, id sodales felis sodales. Maecenas malesuada lorem vel dui"
          }
        ]
      }
    ]
  }







  render() {
    return (
      <>
      <div className="container">
        {this.state.posts.map(post =>(
           <Post key={post.id} data={post}/>))}
      </div>
      </>
    );
  }
}
