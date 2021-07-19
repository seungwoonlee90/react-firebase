import React from 'react';
// import axios from 'axios';
import Data from './Data';
import firebase from "firebase/app";
import "firebase/firestore"; 

class App extends React.Component {
  state = {
    isLoading : true,
    _data : {}
  };
  getData = async() => {

    const firebaseConfig = {
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
      appId: process.env.REACT_APP_APP_ID
    };

    firebase.initializeApp(firebaseConfig);

    const db = firebase.firestore();
    const response = await db.collection("product").doc("docs").get()
    this.setState({ isLoading : false, _data :response.data() });
  };

  componentDidMount(){
    this.getData();
  }

  render() {
    const { isLoading, _data } = this.state;
    return (
      <section>
        <h1> How to connect Firebase ?</h1>
        { isLoading
        ? (
          <div className="loader">
            <span className="loader_text">Now Loading...</span>
          </div>
        )
        : (
          <div className="getData">
                <Data 
                key = { _data.id }
                title = { _data.title }
                body = { _data.body }
                />
          </div>
        )}
      </section>
    )
  }
}

export default App;
