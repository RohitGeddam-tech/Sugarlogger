import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {posts.map((post, index) => (
        <div className="inherit-tabcard" key={index}>
          {post.body}
        </div>
      ))}
    </>
  );
};

export default Posts;