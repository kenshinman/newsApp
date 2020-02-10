import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const PostsContext = createContext ();

const PostsContextProvider = ({children}) => {
  const [posts, setPosts] = useState ([]);
  const [loading, setLoading] = useState (false);

  const fetchPosts = async () => {
    setLoading (true);
    try {
      const res = await axios.get (`https://punchng.com/wp-json/wp/v2/posts`);
      setPosts (res.data);
      setLoading (false);
    } catch (error) {
      console.log (error);
      setLoading (false);
    }
  };

  useEffect (() => {
    fetchPosts ();
  }, []);

  return (
    <PostsContext.Provider value={{posts, loading}}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
