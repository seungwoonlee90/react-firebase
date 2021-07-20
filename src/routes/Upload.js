import React from 'react';
import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/auth'

class Upload extends React.Component {

    render() {
        const onSubmit = async (e) => {
            e.preventDefault();
            
            const db = firebase.firestore();
            await db.collection('product').add({
              uid : firebase.auth().currentUser.uid,
              title : document.getElementById('title').value,
              body : document.getElementById('body').value,
              date : new Date()
        })
        };

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