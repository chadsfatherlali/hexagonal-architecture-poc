import { useContext, useEffect, useState } from "react"
import { ApiContext, ApiContextInterface } from "../../providers/apiProvider"
import { PostInterface } from "../../../domain/posts/postInterface"
import { Post } from "./Post"

export const AllPost: React.FC = () => {
  const { postService } = useContext(ApiContext) as ApiContextInterface
  
  const [posts, setPosts] = useState<PostInterface[]>([])

  useEffect(() => {
    (async () => { setPosts(await postService.getAllPosts() ) })()
  }, [postService])

  return (
    <section>
      <h2> All posts </h2>
      {Boolean(posts.length) && posts.map((post: PostInterface) => (
        <Post post={post} key={post.id} />
      ))}
    </section>
  )
}