import { AllPost } from "./components/AllPosts"
import { PostById } from "./components/PostById"

import "./App.css"

const App: React.FC = () => {
  return (
    <>
      <AllPost />
      <PostById id={1} />
    </>
  )
}

export default App
