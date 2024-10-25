import React,{useEffect,useState} from 'react'
// import Banner from '../components/Banner';

interface Address{
  city:string;
  street:string;
  geo:{
    lat:string;
    lng:string;
  }
}

interface PostProps {
  id:number;
  name:string;
  phone: string;
  address:Address;
}

const Service = () => {

  const baseUrl= 'https://jsonplaceholder.typicode.com'

  const [isLoading,setIsLoading] = useState(false);
  const [isError,setIsError] = useState<string | null>(null);
  const [posts,setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${baseUrl}/users`); // Changed to '/users'
        if (!response.ok) {
          throw new Error(`Sorry, something went wrong ${response.status}`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  },[])


  if(isLoading){
    return(
      <>
      <div>Loading...</div>
      </>
    )
  }

  if(isError){
    return(
      <>
       Error: {isError}
      </>
    )
  }
  return (
    <div className='content'>
    <div className="box">this is a paragraph.</div>
    {/* <Banner title="Service" desc="Eiusmod aute commodo eiusmod id velit consectetur veniam dolor cupidatat qui excepteur. Irure deserunt consectetur labore magna fugiat cupidatat adipisicing eu ex. Est duis anim deserunt veniam quis."/> */}
    {posts.map((post) => (
      <div key={post.id}>
        <h3>{post.name}</h3>
        <p><strong>Address:</strong> {post.address.city}</p>
        <p><strong>Phone:</strong> {post.phone}</p>
        <p><strong>Geo:</strong> {post.address.geo.lat}</p>
        <p><strong>Lng:</strong> {post.address.geo.lng}</p>
        <p><strong>Street:</strong> {post.address.street}</p>
      </div>
    ))}
  </div>
  )
}

export default Service