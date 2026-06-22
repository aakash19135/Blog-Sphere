import { useState } from "react";

function BlogCard({ post }) {
  const [likes, setLikes] = useState(post.likes);
  const [saved, setSaved] = useState(false);

  return (
    <div className="card">

      <div className="card-content">

        <div className="author">
          <img src={post.authorImg} alt="" />
          <span>{post.author}</span>
        </div>

        <h2>{post.title}</h2>

        <p>{post.description}</p>

        <div className="bottom">

          <span>
            {post.date} · {post.readTime}
          </span>

          <div className="actions">

            <button onClick={() => setLikes(likes + 1)}>
              👏 {likes}
            </button>

            <button>
              💬 {post.comments}
            </button>

            <button
              onClick={() => setSaved(!saved)}
            >
              {saved ? "✅" : "🔖"}
            </button>

          </div>
        </div>
      </div>

      <img
        src={post.image}
        className="thumbnail"
        alt=""
      />
    </div>
  );
}

export default BlogCard;