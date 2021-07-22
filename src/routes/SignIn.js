import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import Signup from '../components/Signup';

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
                <form onSubmit = {Login}>
                    <input type="text" id="email" placeholder="email" required />
                    <input type="password" id="password" placeholder="password" required />
                    <button className="btn btn-danger mt-3" id="login">LogIn</button>
                </form>
                <form onSubmit = {Logout}>
                    <button className="btn btn-danger mt-3" id="logout">Logout</button>
                </form>
                <Signup />
            </div>
        )
    }
}

export default SignIn;