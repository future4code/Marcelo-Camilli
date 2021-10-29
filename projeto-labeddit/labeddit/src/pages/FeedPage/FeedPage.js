import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"
import {  PostContainer, UserContainer, WritePostContainer, TextContainer, FeedPageContainer, ComentContainer } from "./styled"
import { BASE_URL } from "../../constants/urls"


const  FeedPage = () => {
  useProtectedPage ()
  const posts = useRequestData([], `${BASE_URL}/posts`)
  console.log(posts)

  const postCards = posts.map ((post) => {
    return (
    <><PostContainer>
      <UserContainer>
       <strong>
        {post.username} 
      </strong>
      </UserContainer>
        <TextContainer>
        {post.title}
        {post.body}        
        </TextContainer>
        <ComentContainer>

          <button>Comentar</button>
        </ComentContainer>
    </PostContainer></>
    
    )
  })
  return (    
     
      <>
      <FeedPageContainer>
      <WritePostContainer>
      Novo post
      <button> Postar</button>
    </WritePostContainer>
      <div>
        {postCards}
      </div>
      </FeedPageContainer>
      </>

  )
}

export default FeedPage