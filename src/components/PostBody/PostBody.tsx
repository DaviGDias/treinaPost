import React from "react";
import { BlogPost } from "../../data/@types/BologoPostInterface";
import styles from "./PostBody.module.css";
const PostBody = ({post}: {post: BlogPost}) => {
  return (
    <div className={styles["post-container"]}>
      <h2 className={styles["post-title"]}>{post.title}</h2>
      <img
        className={styles["post-picture"]}
        src={post.picture}
        alt={post.title}
      />
      <div className={styles["post-content"]}>
        <p>
            {post.content}
        </p>
      </div>
    </div>
  );
};

export default PostBody;
