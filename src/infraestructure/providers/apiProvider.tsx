import React, { PropsWithChildren } from "react"
import axios from "axios"

import { PostApiRepository } from "../repositories/posts/postsApiRepository"
import { PostService } from "../../aplication/posts/postService"
import { PostRepositoryInterface } from "../../domain/posts/postRepositoryInterface"

const postRepository = PostApiRepository(axios)
const postService = PostService(postRepository)

export interface ApiContextInterface {
  postService: PostRepositoryInterface
}

export const ApiContext = React.createContext<ApiContextInterface>({ postService })

export const ApiProvider: React.FC<PropsWithChildren> = (props) => {
  return (
    <ApiContext.Provider value={{
      postService
    }}>
      {props.children}
    </ApiContext.Provider>
  )
}