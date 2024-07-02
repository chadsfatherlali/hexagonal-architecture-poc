import { PostInterface } from "../../domain/posts/postInterface"

export interface ListAllPostsInterface {
  (): Promise<PostInterface[]>
}
