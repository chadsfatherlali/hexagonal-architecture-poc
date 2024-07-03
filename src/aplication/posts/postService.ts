import { PostRepositoryInterface } from "../../domain/posts/postRepositoryInterface"

export const PostService = (postRepository: PostRepositoryInterface) => ({
  getAllPosts: () => postRepository.getAllPosts(),
  getPostById: (id: number) => postRepository.getPostById(id)
})
