import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getPostDetail, getPosts } from "../actions"

const DetailPage = (props) => {
    const dispatch = useDispatch();
    const { post } = useSelector(state =>
        state.post

    );

    useEffect(() => {
        console.log(props)
        const { title } = props.match.params;
        dispatch(getPostDetail(title))
    }, [dispatch])

    return (
        <div>
            <p>{post.title}</p>

        </div>
    )

}

export default DetailPage;