import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { db } from "../components/firebase";

class SignIn extends React.Component {

    render() {

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

        const Signup = async (e) => {
            e.preventDefault();
            await firebase.auth().createUserWithEmailAndPassword(document.getElementById('signup_email').value, document.getElementById('signup_password').value).then((result) => {

                db.collection('user').doc(result.user.uid).set({
                    email : document.getElementById('signup_email').value,
                })
                // console.log(result.user.uid)
                window.location.href = '/'
            }
            )};

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
                <form onSubmit = {Signup}>
                    <span>Sign Up</span>
                    <input type="text" id="signup_email" placeholder="email" required />
                    <input type="password" id="signup_password" placeholder="password" required />
                    <button className="btn btn-danger mt-3" id="signup">SignUp</button>
                </form>
            </div>
        )
    }
}

export default SignIn;