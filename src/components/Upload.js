import React from 'react';
import firebase from 'firebase/app';
import { db } from './firebase'
import 'firebase/auth'

class Upload extends React.Component {

    render() {

        const upload = async (e) => {
            e.preventDefault();
            await db.collection('product').add({
              uid : firebase.auth().currentUser.uid,
              title : document.getElementById('title').value,
              body : document.getElementById('body').value,
              date : new Date()
        })
        };

        return(
            <div className="container">
                <span>Upload to firebase</span>
                <form onSubmit= {upload}>
                    <input type="text" id="title" placeholder="title" />
                    <input type="text" id="body" placeholder="body" />
                    <button id="send">올리기</button>
                </form>
            </div>
        )
    }
}

export default Upload;