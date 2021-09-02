import React, { useState } from 'react';
import firebase from 'firebase';
import 'firebase/auth';

const Auth = () => {
    const auth = firebase.auth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    const onChange = (event) => {
        const {
            target: {name, value},
        } = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }
    const onSubmit = async(event) => {
        event.preventDefault();
        try {
            let data;
            if(newAccount) {
                data = await auth.createUserWithEmailAndPassword(
                    email, password
                );
            } else {
                data = await auth.signInWithEmailAndPassword(
                    email, password
                );
            }
            console.log(data);
        } catch(error) {
            setError(error);
        }
    }

    const toggleAccount = () => setNewAccount((prev) => !prev);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name="email" type="email" placeholder="Email" required value={email} onChange={onChange} />
                <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange} />
                <input type="submit" value={newAccount ? "Create Account" : "Log In"}/>
                {error}
            </form>
    <span onClick={toggleAccount}>{newAccount ? "Sign in" : "Cerate Account"}</span>
            <div>
                <button>Continue with google</button>
            </div>
        </div>
    );
}
export default Auth;