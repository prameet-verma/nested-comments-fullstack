import "./App.css";
import { Routes, Route } from "react-router-dom";
import PostLists from "./components/PostLists";
import Post from "./components/Post";
import { PostProvider } from "./context/PostContext";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<PostLists />} />
        <Route
          path="/posts/:id"
          element={
            <PostProvider>
              <Post />
            </PostProvider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
