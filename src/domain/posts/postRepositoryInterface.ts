import { PostInterface } from "./postInterface";

export interface PostRepositoryInterface {
  getAllPosts(): Promise<PostInterface[]>
  getPostById(id: number): Promise<PostInterface>
}
