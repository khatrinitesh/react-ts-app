import React, { useState, useEffect } from "react";
import Banner from "../layout/Banner";
import { PostProps } from "../interface";
import { useNavigate, useParams } from "react-router-dom";
import BtnPrimary from "../components/BtnPrimary";

const ServiceDetail: React.FC = () => {
  const baseurl = import.meta.env.VITE_APP_POST;

  const [post, setPost] = useState<PostProps | null>(null); // Initialize with null
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>(); // Type the id parameter

  const navigate = useNavigate();

  const btnBack = () => {
    navigate("/service");
  }

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${baseurl}/${id}`);
      if (!response.ok) {
        throw new Error(`Sorry, something went wrong, ${response.status}`);
      }
      const result: PostProps = await response.json(); // Type the result
      setPost(result);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="content">
      <Banner
        title="Service Detail"
        desc="Qui pariatur irure officia duis dolore dolor tempor dolore excepteur occaecat consectetur."
      />
      <div className="container mx-auto">
        <BtnPrimary onClick={btnBack} label="Back" />
        {post && (
          <div>
            <h3 className="font-bold text-3xl">{post.id} - {post.title}</h3>
            <p>{post.body}</p> {/* Display other post details as needed */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetail;
