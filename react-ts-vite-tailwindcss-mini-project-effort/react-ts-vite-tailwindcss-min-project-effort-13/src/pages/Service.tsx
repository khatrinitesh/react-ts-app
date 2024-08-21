import React, { useState, useEffect } from "react";
import Banner from "../layout/Banner";
import { PostProps } from "../interface";
import { Link } from "react-router-dom";
import BtnPrimary from "../components/BtnPrimary";
import SearchBar from "../components/repository/searchbar/1/Example";

const Service: React.FC = () => {
  const baseurl = import.meta.env.VITE_APP_POST;

  // Correctly initialize state with an array of PostProps
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [filteredPost, setFilteredPost] = useState<PostProps[]>([]);

  const btnDel = (id: number) => {
    const newData = posts.filter((val) => val.id !== id);
    setPosts(newData);
    setFilteredPost(newData); // Update filteredPost to reflect changes
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${baseurl}`);
      if (!response.ok) {
        throw new Error("Sorry, something went wrong");
      }
      
      const result: PostProps[] = await response.json(); // Ensure result is an array of PostProps
      setPosts(result);
      setFilteredPost(result); // Initialize filteredPost with fetched data
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
    fetchData();
  }, []);

  const handleSearch = (query: string) => {
    if (query) {
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredPost(filtered);
    } else {
      setFilteredPost(posts);
    }
  };

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="content">
      <Banner
        title="Service"
        desc="Qui pariatur irure officia duis dolore dolor tempor dolore excepteur occaecat consectetur."
      />
      <div className="container mx-auto">
        <SearchBar onSearch={handleSearch} />
        {filteredPost.map((val) => (
          <div key={val.id} className="mb-4 p-4 border border-gray-300 rounded">
            <Link to={`/service/${val.id}`}>
              <h3 className="font-bold text-2xl">{val.title}</h3>
              <p>{val.body}</p>
            </Link>
            <BtnPrimary label="Remove" onClick={() => btnDel(val.id)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
