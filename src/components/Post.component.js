import React, { Component, useEffect } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions"
import PropTypes from "prop-types";

const Post = (props) => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts)
    const auth = useSelector(state => state.auth);
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])
    console.log(auth)
    /* console.log(typeof auth.user.user) */
    const postlist = (
        posts.postList.map(post => <div key={post._id}><p>{post.title}</p></div>)
    )
    return (
        <div>
            {
                auth.user.role === "user" ? postlist : <h1></h1>
            }
        </div>
    )
}
/* class Post extends Component {
    static propTypes = {
        posts: PropTypes.object.isRequired,
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {
                    this.props.posts.postList.map(post => <div key={post._id}><p>{post.title}</p><p>{post.text}</p></div>)
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, null)(Post); */

export default Post;