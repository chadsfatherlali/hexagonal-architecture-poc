import { PropsWithChildren } from "react"
import { PostInterface } from "../../../domain/posts/postInterface"

interface PostComponentInterface extends PropsWithChildren  {
  post: PostInterface
}

export const Post: React.FC<PostComponentInterface> = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}
