import React, { useEffect, useState } from "react";
import Banner from "../layout/Banner";
import { PostProps, UserProps } from "../interface";
import BtnPrimary from "../components/BtnPrimary";

const Service: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [errors, setErrors] = useState<string>("");
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [users,setUsers] = useState<UserProps[]>([]);

  const baseUrlPosts = "https://jsonplaceholder.typicode.com/posts";
  const baseUrlUsers = "https://jsonplaceholder.typicode.com/users";

  const fetchData = async () => {
    setLoading(true);
    try {
      const postsResponse = await fetch(baseUrlPosts)
      if (!postsResponse.ok) {
        throw new Error("sorry something went wrong", postsResponse.statusText);
      }
      const postsdata = await postsResponse.json();
      setPosts(postsdata);
      console.log(postsdata);
      

      const usersResponse = await fetch(baseUrlUsers)
      if(!usersResponse.ok){
        throw new Error('sorry something went wrong',usersResponse.statusText);
      }
      const usersdata = await usersResponse.json();
      setUsers(usersdata)
      console.log(usersdata);
    } catch (error:any) {
      setErrors(error.message);
      console.log(error.message);
      
    } finally {
      setLoading(false);
    }
  };

  const btnDelPost = (id:number) => {
    const newData = posts.filter((val) => val.id !==id) 
    setPosts(newData);
  }
  const btnDelUser = (id:number) => {
    const newData = users.filter((val) => val.id !==id) 
    setUsers(newData);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="content">
      <Banner
        title="Service"
        desc="Sunt amet ea ut ut eu fugiat reprehenderit."
      />
      <div className="container mx-auto">
        {loading && <div>Loading...</div>}
        {errors && <div>{errors}</div>}
        <h3 className="font-bold text-[24px] underline uppercase">Posts</h3>
        {posts.length > 0 ? (
          <>
            {posts.map((val) => (
              <div key={val.id}>
                <h3 className="font-bold text-[18px]">{val.title}</h3>
                <p>{val.body}</p>
                <BtnPrimary title="Remove" onClick={() => btnDelPost(val.id)}/>
              </div>
            ))}
          </>
        ) : (<><p>No posts available.</p></>)}

<h3 className="font-bold text-[24px] underline uppercase">Users</h3>
        {users.length > 0 ? (
          <>
            {users.map((user) => (
              <div key={user.id} className="mb-4 p-4 border border-gray-200 rounded">
                <h3 className="font-bold text-[18px]">{user.name}</h3>
                <p>{user.username}</p>
                <BtnPrimary title="Remove" onClick={() => btnDelUser(user.id)}/>
              </div>
            ))}
          </>
        ) : (
          <p>No users available.</p>
        )}
      </div>
    </div>
  );
};

export default Service;
