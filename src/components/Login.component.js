import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import { Button, Form } from "semantic-ui-react";
import { login } from "../actions"

const LoginPage = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)

    const onSubmit = (e) => {
        e.preventDefault();
        const user = {
            email,
            password
        }
        dispatch(login(user))
    }

    const form = (
        <Form onSubmit={onSubmit}>
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
        <Redirect to="/posts"></Redirect>
    )

    return (
        <div>
            <h1>LOGIN PAGE</h1>
            {
                auth.autheticate === true ? redirect : form
            }
        </div>
    )

}
export default LoginPage;