import React from 'react';
import Data from '../components/Data';
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

    !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

    const db = firebase.firestore();
    await db.collection("product").get().then((response)=> {
        let array =[]
        response.forEach((doc)=>{
            array.push(doc.data())
        })
        this.setState({ isLoading : false, _data :array });
    }
    )
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
              {_data.map( (data) => {
                    return(
                        <Data 
                        key = { data.id }
                        title = { data.title }
                        body = { data.body }
                        />
                    )
                })}
          </div>
        )}
      </section>
    )
  }
}

export default App;
