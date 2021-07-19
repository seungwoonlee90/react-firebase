import React from 'react';
import firebase from "firebase/app";
import 'firebase/storage';
import { firebaseAuth } from "../components/firebase";

class Upload extends React.Component {

    render() {
        const onSubmit = async (e) => {
            e.preventDefault();
            
            const db = firebase.firestore();
            await db.collection('product').add({
              uid : user.uid,
              title : document.getElementById('title').value,
              body : document.getElementById('body').value,
              date : new Date()
        })
        };

        let user = firebaseAuth.currentUser;
        if (user) {
            console.log(user.email)
        } else {
            console.log("plz login")
        }

        return (
            <div className="container">
                <span>Upload to firebase</span>
                <form onSubmit= {onSubmit}>
                    <input type="text" id="title" placeholder="title" />
                    <input type="text" id="body" placeholder="body" />
                    <button className="btn btn-danger mt-3" id="send">올리기</button>
                </form>
            </div>
        )
    }
}

export default Upload