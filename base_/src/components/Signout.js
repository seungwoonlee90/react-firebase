import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

class Signout extends React.Component {

    render() {

        const Logout = async (e) => {
            e.preventDefault();
            await firebase.auth().signOut()
            window.location.href = '/'
        };

        return(
        <form onSubmit = {Logout}>
            <button id="logout">๋ก๊ทธ์์</button>
        </form>
        )
    }
}

export default Signout;