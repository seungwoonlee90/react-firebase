import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { db } from './firebase'

class Signup extends React.Component {

    render() {

        const Signup = async (e) => {
            e.preventDefault();
        
            await firebase.auth().createUserWithEmailAndPassword(document.getElementById('signup_email').value, document.getElementById('signup_password').value).then((result) => {
        
                db.collection('user').doc(result.user.uid).set({
                    email : document.getElementById('signup_email').value,
                })
                result.user.updateProfile({
                    displayName : document.getElementById('signup_email').value,
                });
                window.location.href = '/'
            }
        )};

        return(
            <form onSubmit={Signup}>
                <span>Sign Up</span>
                <input type="text" id="signup_email" placeholder="email" required />
                <input type="password" id="signup_password" placeholder="password" required />
                <button className="btn btn-danger mt-3" id="signup">SignUp</button>
            </form>
        )
    }
}

export default Signup;