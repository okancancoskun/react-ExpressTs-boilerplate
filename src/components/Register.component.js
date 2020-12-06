import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import { Button, Form, Checkbox } from "semantic-ui-react";
import { register } from "../actions"

const RegisterPage = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const newUser = useSelector(state => state.newUser);
    const onSubmit = (e) => {
        e.preventDefault()
        const user = { email, password }
        dispatch(register(user))
    }
    const form = (
        <Form onSubmit={onSubmit} loading={newUser.fetching}>
            <Form.Field>
                <label>Email</label>
                <input placeholder='Email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input type="password" placeholder='Password' name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    )
    const redirect = (
        <Redirect to="/login"></Redirect>
    )
    return (
        <div>
            <h1>Register Page</h1>
            {
                newUser.done === true ? redirect : form
            }
        </div>

    )
}
export default RegisterPage;