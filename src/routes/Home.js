import React from 'react';
import Data from '../components/Data';
import "firebase/firestore";
import { db } from "../components/firebase";

class App extends React.Component {
  state = {
    isLoading : true,
    _data : {}
  };
  getData = async() => {
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
              {_data.map( (data, index) => {
                    return(
                        <Data 
                        key = { index }
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
