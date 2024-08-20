import { PropsWithChildren, useContext, useEffect, useState } from "react"
import { ApiContext, ApiContextInterface } from "../../providers/apiProvider"
import { PostInterface } from "../../../domain/posts/postInterface"
import { Post } from "./Post"

interface PostByIdInterface extends PropsWithChildren {
  id: number
}

export const PostById: React.FC<PostByIdInterface> = ({ id }) => {
  const { postService } = useContext(ApiContext) as ApiContextInterface

  const [ post, setPost ] = useState<PostInterface | null>(null)

  useEffect(() => {
    (async () => { setPost(await postService.getPostById(id)) })()
  }, [id, postService])

  return (
    <section>
      <h2> Post by id </h2>
      {post && <Post post={post} />}
    </section>
  )
}
