import React, { Component } from 'react';
import PropTypes from "prop-types"
const PostList = ({ posts }) => {
    const emptyMessage = (<p>No Post</p>);
    const postList = (<div>
        {
            posts.error.response ? <h3>Error!!</h3>
                : posts.postList.map(post => <div key={post._id}>{post.title}</div>)
        }
    </div>)

    return (
        <div>
            {posts.length === 0 ? emptyMessage : postList}
        </div>
    )
}

PostList.propTypes = {
    posts: PropTypes.shape({
        postList: PropTypes.array.isRequired
    }).isRequired
}
export default PostList;

