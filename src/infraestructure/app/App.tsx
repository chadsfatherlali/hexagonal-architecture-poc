import { FC, useEffect, useState } from "react"
import axios from "axios"

import { PostInterface } from "../../domain/posts/postInterface"
import { PostService } from "../post/postService"
import "./App.css"

const App: FC = () => {
  const [posts, setPosts] = useState<PostInterface[]>([])

  useEffect(() => {
    (async () => {
      setPosts(await PostService(axios).ListAllPosts())
    })()
  }, [])

  return (
    <section>
      {posts.map((post: PostInterface) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </section>
  )
}

export default App
