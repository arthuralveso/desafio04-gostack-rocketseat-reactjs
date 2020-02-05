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
              avatar: "https://avatars1.githubusercontent.com/u/2254731?s=400&v=4"
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time e geralmente ficamos de olho em quem se destaca no Bootcamp. Inclusive 80% do nosso time de devs é composto por alunos do Bootcamp."
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Arthur Alves",
          avatar: "https://avatars1.githubusercontent.com/u/43497266?s=460&v=4"
        },
        date: "04 Jun 2019",
        content: "Fala galera, beleza? estou fazendo o Bootcamp GoStack da Rocketseat e ta muito bom! Alguem mais ai fazendo?",
        comments: [
          {
            id: 4,
            author: {
              name: "Gabriel Lisboa",
              avatar: "https://i.pravatar.cc/150?img=61"
            },
            content:"Tambem Estou fazendo o Bootcamp e estou curtindo muito!",
          },
          {
            id: 5,
            author: {
              name: "João da Silva",
              avatar: "https://i.pravatar.cc/150?img=70"
            },
            content:"Estou pensando em me inscrever na proxima turma pra ver qual é a desse bootcamp!",
          },
          
        ]
      },
      {
        id: 6,
        author: {
          name: "Pedro de Souza",
          avatar: "https://i.pravatar.cc/150?img=68"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém ja concluiu o desafio 4 de ReactJS do bootcamp?",
        comments: [
          {
            id: 7,
            author: {
              name: "Laura Oliveira",
              avatar: "https://i.pravatar.cc/150?img=45"
            },
            content: "Eu terminei, se tiver alguma duvida chama no privado! :D"
          }
        ]
      },
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
