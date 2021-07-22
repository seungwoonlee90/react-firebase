import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import Signup from '../components/Signup';
import Signin from '../components/Signin';
import Signout from '../components/Signout';

class SignIn extends React.Component {

    render() {

        console.log(firebase.auth().currentUser)

        return (
            <div className="container">
                <span>Sign In</span>
                <Signin />
                <Signout />
                <Signup />
            </div>
        )
    }
}

export default SignIn;