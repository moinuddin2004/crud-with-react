import axios from "axios";
import { useEffect, useState } from "react";

const AllPosts = () => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      let getPosts = async ()=> {
        try {
          const response = await axios.get(`/api/v1/posts`);
          console.log(response.data);
          setPosts(response.data);
          // setPosts(posts.reverse());
          console.log(posts);
        } catch (error) {
            console.log("hi");
          console.error(error);
          if (error.response && error.response.status === 401) {
            console.log(error.response.status);
          }
        }
      }
  
      getPosts();
    }, []);
  
    return (
      <div>
        {posts.map((data, index) => (
    
      <div key={index} className="flex justify-center w-screen">
    <div  className=" border-2 border-sky-700 w-[500px]"   >
            <div className="flex justify-center">{data.title}</div>
            <div className="postText">{data.text}</div>
               </div>
    </div>


        ))}
      </div>
    );
  };
  
  export {AllPosts};