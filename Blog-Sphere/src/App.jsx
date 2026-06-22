import { useState } from "react";
import Navbar from "./components/Navbar";
import BlogCard from "./components/BlogCard";
import Sidebar from "./components/Sidebar";
import Tags from "./components/Tags";
import { postsData } from "./data/posts";
import "./App.css";

function App() {
  const [posts] = useState(postsData);

  return (
    <>
      <Navbar />
      <Tags />

      <div className="container">
        <div className="blogs">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <Sidebar />
      </div>
    </>
  );
}

export default App;