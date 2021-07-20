import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";

class SignIn extends React.Component {

    render() {
        console.log(firebase.auth().currentUser)

        const Login = async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value
            const password = document.getElementById('password').value
            await firebase.auth().signInWithEmailAndPassword(email, password)
            console.log(firebase.auth().currentUser.email)
        };

        const Logout = async (e) => {
            e.preventDefault();
            await firebase.auth().signOut()
            window.location.href = '/'
        };

        return (
            <div className="container">
                <span>Sign In</span>
                <input type="text" id="email" placeholder="email" />
                <input type="password" id="password" placeholder="password" />
                <form onSubmit = {Login}>
                    <button className="btn btn-danger mt-3" id="login">LogIn</button>
                </form>
                <form onSubmit = {Logout}>
                    <button className="btn btn-danger mt-3" id="logout">Logout</button>
                </form>
            </div>
        )
    }
}

export default SignIn;