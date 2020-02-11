import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const PostsContext = createContext ();

const PostsContextProvider = ({children}) => {
  const [posts, setPosts] = useState ([]);
  const [post, setPost] = useState ({});
  const [loading, setLoading] = useState (false);
  const [loadingPost, setLoadingPost] = useState (false);

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

  const fetchPost = async id => {
    setLoadingPost (true);
    try {
      const res = await axios.get (
        `https://punchng.com/wp-json/wp/v2/posts/${id}`
      );
      return res.data;
    } catch (error) {
      console.log (error);
      setLoadingPost (false);
    }
  };

  const fetchPostBySlug = async slug => {
    setLoadingPost (true);
    console.log (`https://punchng.com/wp-json/wp/v2/posts?slug=${slug}`);
    try {
      const res = await axios.get (
        `https://punchng.com/wp-json/wp/v2/posts?slug=${slug}`
      );
      return res.data[0];
    } catch (error) {
      console.log ('context error => ', error);
      setLoadingPost (false);
      return error;
    }
  };

  useEffect (() => {
    fetchPosts ();
  }, []);

  return (
    <PostsContext.Provider
      value={{
        posts,
        loading,
        post,
        setPost,
        loadingPost,
        fetchPost,
        fetchPostBySlug,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
