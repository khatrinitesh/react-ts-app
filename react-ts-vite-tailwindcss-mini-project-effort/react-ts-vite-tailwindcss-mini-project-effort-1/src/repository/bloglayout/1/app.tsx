import React from "react";

const CustomApp = () => {
  return <div>
    <BlogLayout/>
  </div>;
};

export default CustomApp;

interface PostProps {
  id: number;
  title: string;
  content: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "First Post",
    content: "This is the content of the first post.",
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the content of the second post.",
  },
  {
    id: 3,
    title: "Third Post",
    content: "This is the content of the third post.",
  },
];

const PostCard: React.FC<PostProps> = ({ title, content }) => {
  return (
    <>
      <div className="post-card border-b-blue-500 border-[10px]">
        <h2 className="font-bold text-[red]">{title}</h2>
        <p className="text-[15px]">{content}</p>
      </div>
    </>
  );
};

const BlogLayout: React.FC = () => {
  return (
    <>
      <div className="blog-layout">
        <h1 className="font-bold text-[40px]">My Blog</h1>
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </>
  );
};
