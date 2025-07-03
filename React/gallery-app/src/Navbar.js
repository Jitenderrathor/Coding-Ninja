import { useState } from "react";
import { usePostContext } from "./postContext";

export const Navbar = () => {
  // remove this and get the value from context
  const { savedPosts } = usePostContext();
  // console.log("Saved Posts:", savedPosts.post);
  const [showSavedList, setShowSavedList] = useState(false);

  return (
    <div className="navbar">
      <span onClick={() => setShowSavedList(!showSavedList)}>
        Saved Posts: {savedPosts ? savedPosts.length : 0}
      </span>
      {showSavedList && (
        <div className="saved-list">
          {savedPosts.map((p) => (
            <div className="saved-post" key={p.post.id}>
              <h3>{p.post.text}</h3>
              <img src={p.post.img} alt={p.post.text} />
            </div>
          ))}
        </div>
      )}
      {/* Add onClick functionality for the reset button */}
      <button>Reset</button>
    </div>
  );
};
