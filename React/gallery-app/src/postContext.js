import { createContext, useState, useContext } from "react";
// create post context here
const postContext = createContext();
// Create custom hook that returns context value here
const usePostContext = () => {
  const context = useContext(postContext);
  if (!context) {
    throw new Error("usePostContext must be used within a PostProvider");
  }
  return context;
};
// create a custom saved post provider here with add and reset functions
function PostProvider({ children }) {
  const [savedPosts, setSavedPosts] = useState([]);
  const addPost = (post) => {
    setSavedPosts((prevPosts) => [...prevPosts, post]);
    console.log("Post added:", post);
  };
  return (
    <postContext.Provider value={{ savedPosts, addPost }}>
      {children}
    </postContext.Provider>
  );
}
export { usePostContext };
export default PostProvider;
