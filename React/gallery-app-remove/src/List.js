import { posts } from "./data";
import { usePostsValue } from "./postContext";

export const List = () => {
  const { savePost, savedPosts, unsavePost } = usePostsValue();

  const isPostSaved = (id) => {
    return !!savedPosts.find((p) => p.id === id);
  };

  return (
    <div className="list">
      {posts.map((p) => (
        <div className="post" key={p.id}>
          <h3>{p.text}</h3>
          <img src={p.img} alt={p.text} />
          {!isPostSaved(p.id) ? (
            <img
              src="https://cdn-icons-png.flaticon.com/512/102/102279.png"
              alt="save"
              onClick={() => savePost(p)}
            />
          ) : (
            // Add event listener to unsave the image here
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwoPKQU2hidR3sNc12cNjYkuvDIR6p9_QgA&s"
              alt="delete"
              onClick={() => unsavePost(p)}
            />
          )}
        </div>
      ))}
    </div>
  );
};
