import React from 'react';

const PostCard = ({post}) => {
    // console.log("post data is", post);
  return (
    <div key={post.id} className="post">
			<h2>{post?.title}</h2>
			<p>{post?.body}</p>
		</div>
  );
};

export default PostCard
