import React, { useEffect, useState } from "react";
import Banner from "../layout/Banner";
import { Post } from "../types";

const Service: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchposts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("sorry something went wrong");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message || "an unknown error occured");
      } finally {
        setLoading(false);
      }
    };
    fetchposts();
  }, []);

  const btnDel = (id:number) => {
    const newData = posts.filter((post) => post.id !== id)
    setPosts(newData)
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error... {error}</p>;
  return (
    <div className="content">
      <Banner
        title="Service"
        description="Esse consectetur sint proident sint irure eiusmod tempor ea anim reprehenderit ullamco aute deserunt anim."
      />
      <div className="container mx-auto">
        <h1 className="text-[42px] font-bold">Post list</h1>
        <ul className="grid grid-cols-4 gap-4">
          {posts.map((post) => (
            <li key={post.id} className="card shadow bg-[#f8b195] border rounded-2 p-[15px] gap-4 rounded-[10px] grid justify-between items-end ">
              <span className="text-[50px] font-bold text-[#4a352d]">{post.id}</span>
              <h3 className="text-[32px] leading-[40px] text-[#4a352d] font-semibold">{post.title}</h3>
              <p className="text-[18px] font-medium text-[#4a352d]">{post.body}</p>
              <button onClick={() => btnDel(post.id)} className="bg-[#956a59] text-white px-4 py-2 rounded-[10px] h-[40px]">Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Service;
