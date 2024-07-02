import { AxiosInstance } from "axios"
import { PostApiInterface } from "./postApiServiceInterface"
import { PostInterface } from "../../domain/posts/postInterface"

export const PostService = (
  httpClient: AxiosInstance | any
): PostApiInterface => ({
  ListAllPosts: async (): Promise<PostInterface[]> => {
    const { data } = await httpClient.get(
      "https://jsonplaceholder.typicode.com/posts"
    )

    return data
  },
})
