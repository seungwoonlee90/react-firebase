import React from 'react';
import axios from 'axios';
import Data from './Data';
// import { firestore } from "./firebase";

class App extends React.Component {
  state = {
    isLoading : true,
    data : {}
  };

  getData (){
    const url = `https://jsonplaceholder.typicode.com/posts`;
    axios.get(url).then((response) => {
      const data = response.data
      this.setState ( { isLoading:false, data : data,} );
    })
  };

  componentDidMount(){
    this.getData();
  }

  render() {
    const { isLoading, data } = this.state;
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
            {data.map( (data) => {
              return (
                <Data 
                key = { data.id }
                title = { data.title }
                body = { data.body }
                />
              );
            })}
          </div>
        )}
      </section>
    )
  }
}

export default App;
