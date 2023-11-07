import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  //https://fakestoreapi.com/products
  const [fake, setFake] = useState([]);

  useEffect(() => {
    fakestore();
  }, [])

  const fakestore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    // console.log(response);
    const jsonData = await response.json();
    //console.log(jsonData);
    setFake(jsonData);

  }
  //fakestore();

  return (
    <>
      <h2>Fake API Store</h2>
      <div className="container">
        {fake.map((values)=>{
          return(
        <>
          <div className="box">
            <div className="content">
              <h3>{values.title}</h3>
              <p>{values.description}</p>
            </div>
            <img src={values.image} alt="" />
          </div>
        </>

        )
        })
        };

      </div>
    </>

  );
}

export default App;