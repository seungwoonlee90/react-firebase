import React from 'react';
import { firebaseAuth } from "../components/firebase";

class SignIn extends React.Component {

    render() {

        const Login = async (e) => {
            e.preventDefault();

            const email = document.getElementById('email').value
            const password = document.getElementById('password').value
            await firebaseAuth.signInWithEmailAndPassword(email, password)
        };

        let user = firebaseAuth.currentUser;
        if (user) {
            console.log(user.email)
        } else {
            console.log("plz login")
        }

        return (
            <div className="container">
                <span>Sign In</span>
                <form onSubmit = {Login} >
                    <input type="text" id="email" placeholder="email" />
                    <input type="password" id="password" placeholder="password" />
                    <button className="btn btn-danger mt-3" id="send">LogIn</button>
                </form>
            </div>
        )
    }
}

export default SignIn;