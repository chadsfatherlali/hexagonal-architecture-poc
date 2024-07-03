import { AxiosInstance } from "axios"
import { PostRepositoryInterface } from "../../../domain/posts/postRepositoryInterface"

export const PostApiRepository = (httpClient: AxiosInstance): PostRepositoryInterface => ({
  getAllPosts: async () => {
    const { data } = await httpClient.get("https://jsonplaceholder.typicode.com/posts")

    return data
  },
  getPostById: async (id: number) => {
    const { data } = await httpClient.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

    return data
  }
})