import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { Link, useParams } from "react-router-dom";
import { usePostStore } from "../store/usePostStore";
import { PostProps } from "../interface";
import HeadTitle from "../components/HeadTitle";

const ProductCard = () => {
  const { id } = useParams();
  const { posts } = usePostStore();
  const [post, setPost] = useState<PostProps | null>(null);

  useEffect(() => {
    console.log("Post ID:", id); // Debugging line to check if `id` is passed correctly
    if (id) {
      const foundPost = posts.find((post) => post.id.toString() === id);
      if (foundPost) {
        setPost(foundPost);
      }
    }
  }, [id, posts]);

  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <div className="content">
      <Banner
        title="Product card"
        description="Cupidatat nostrud magna minim elit."
      />
      <div className="container mx-auto">
        <Link to="/productlist">Back</Link>
        <div className="product-card">
          <HeadTitle>{post.title}</HeadTitle>
          <p>{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
