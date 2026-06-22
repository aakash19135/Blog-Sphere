function Tags() {
  const tags = [
    "Programming",
    "Technology",
    "React",
    "JavaScript",
    "AI",
    "Data Science"
  ];

  return (
    <div className="tags">
      {tags.map((tag) => (
        <button key={tag}>{tag}</button>
      ))}
    </div>
  );
}

export default Tags;