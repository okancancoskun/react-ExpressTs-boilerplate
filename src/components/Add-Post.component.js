import React, { Component, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Button, Form, Checkbox } from "semantic-ui-react";
import { Redirect } from "react-router-dom"
import { addPost } from "../actions"

const AddPost = (props) => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const newPost = useSelector(state => state.newPost)
    const auth = useSelector(state => state.auth)
    const token = auth.token;

    const onSubmit = () => {
        dispatch(addPost(title, text, token))
    }
    const form = (
        <Form onSubmit={onSubmit} loading={newPost.fetching}>
            <Form.Field>
                <label>Title</label>
                <input placeholder='Title' name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Text</label>
                <input placeholder='Text' name="text" value={text} onChange={(e) => setText(e.target.value)} />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    )
    const redirect = (
        <Redirect to="/posts"></Redirect>
    )
    return (
        <div><h2>Add new post</h2>
            <div>
                {
                    newPost.done === true ? redirect : form
                }
            </div>
        </div>
    )

}

export default AddPost;
