
import axios from 'axios';

import { useState, useRef, useEffect } from "react";
// import { fetchPosts } from './postrender';



const  Createpost=()=>{

        const postTitleRef = useRef(null)
        const postTextRef = useRef(null)
    
        console.log(postTitleRef)
        
    
    
        let createPost = async (e) => {
    
            e.preventDefault();
    
            let postTitle = postTitleRef.current.value
            let postText = postTextRef.current.value
    
            console.log(postTitle)
    
            
    
        // baseUrl/api/v1/post
            try{
            let response = await axios.post(`/api/v1/post`, {
    
                title: postTitle,
                text: postText
                })
    
                console.log(response.data);
    
                window.location.reload();
                // getAllPost();
    
                }       
                                
            catch(error) {
                // handle error
                console.log(error.data);
            }
    
        };
    

    



return(

    
    
    <div>

<div id="the-form" className=' flex justify-center w-screen '>
    <div className="border-2 border-sky-500 w-[500px]  ">
    <form onSubmit={createPost} >
    <div className='flex justify-center'>
        <h2 className='text-3xl'>Create a post:</h2>
  </div>
        <div>
        <span>
        <label htmlFor="postTitle" className='text-2xl'>Title:</label>
        {/* <input type="text" name="postTitle" id="postTitle" placeholder="Heading" ref={postTitleRef} /> */}
        <textarea type="text" name="postTitle"  id="postTitle"  placeholder="Heading" cols="65" rows="4"  ref={postTitleRef}></textarea>

        </span>
        <br />
        <br />
        <span className="form--textarea">
        <label htmlFor="postText" className='text-2xl'>Text:</label>
<br/>
        <textarea type="text" name="postText" id="postText" placeholder="Some text here" cols="65" rows="10" ref={postTextRef} ></textarea>
        </span>
        </div>
        <br />
<div className='flex justify-center'>
        <button type="submit"  className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-xl w-20 text-white ">Submit </button>
        </div>
        <br />
        <br />
        <br />
    </form>
</div>
</div>

</div>

    
 
)

}

export default Createpost;

