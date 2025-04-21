import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from "./header/Header"
import DiscriptionPage from "./header/DicriptionPage"
import ProductList from "./Products"
import {productlist} from "./Convert_data"
import AboutUs from "./AboutUs";
import Shop from "./Shopping";


function Buy({ shop, setShop, sum, setSum, count, setCount }){
  return (
  <div>
    <Shop shop={shop}
          setShop={setShop}
          sum={sum}
          setSum={setSum}
          count={count}
          setCount={setCount}>
    </Shop>
  </div>
);
}


function Home({ shop, setShop, sum, setSum, count, setCount }){
    return (
    <div>
      <Header></Header>
      <DiscriptionPage></DiscriptionPage>
      <div className="main_container">
        <ProductList productslist={productlist}
          shop={shop}
          setShop={setShop}
          sum={sum}
          setSum={setSum}
          count={count}
          setCount={setCount}></ProductList>
        <AboutUs></AboutUs>
      </div>
    </div>
  );
}


function App(){
  const [shop, setShop] = useState([]);
  const [sum, setSum] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              shop={shop}
              setShop={setShop}
              sum={sum}
              setSum={setSum}
              count={count}
              setCount={setCount}
            />
          }
        />
        <Route path="/buy" 
        element=
        {<Buy shop={shop}
          setShop={setShop}
          sum={sum}
          setSum={setSum}
          count={count}
          setCount={setCount}/>
        } />
      </Routes>
    </Router>
  );
}
export default App;
