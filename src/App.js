import './App.css';
import React from 'react'
// import Header from './Components/molecules/Header';
import CollapsibleExample from './Components/molecules/navbar';
// import Card_Item_List from './Components/organisms/Card_Item_List';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//  import { BrowserRouter as Router, Routes,Route, Switch,Link } from "react-router-dom";
import About from './Components/pages/About';
import Footer from './Components/molecules/Footer';
import Contact from './Components/pages/Contact';
import HOME from './Components/pages/Home';
import Product from './Components/pages/Productdetails';
import Signup from './Components/pages/Signup';
import Login from './Components/pages/SignIn'
import CartItem  from './Components/pages/CartItem';
function App() {

  const [cartList,setCartList]=React.useState([]);
  const addTocart=(item)=>{
    setCartList([...cartList,item])
  }
  console.log(cartList);
  return (
    <div>
      <Router>
<CollapsibleExample cartList={cartList} />

<Switch>
          <Route path="/About">
            <About/>
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
          <Route path="/SignIn">
            <Login/>
          </Route>
          <Route path="/Signup">
            <Signup/>
          </Route>
          <Route path="/CartItem">
            <CartItem cartList={cartList}/>
          </Route>
          <Route path="/:id">
            <Product addTocart={addTocart}/>
          </Route>
          <Route path="/">
            <HOME/>
          </Route>
        </Switch>
      </Router>


<Footer/>
{/* <Card_Item_List/> */}

   {/* <Header 
   productimg="https://rukminim1.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/k/y/d/iphone-11-256-u-mwm82hn-a-apple-0-original-imafkg25mhaztxns.jpeg?q=70"
   productTitle="APPLE iPhone 11(White 23 GB)"
   productDesc1="128 GB ROM"
   productDesc2="15.9cm(16inch) HD Display"
   productDesc3="A13 Binic Chip Processor"
   productDesc4="1 Year waranty"
   prductprice="$450000"
   productexchnage="Upto $17000 off on Exchange"/>
    <Header
   productimg="https://rukminim1.flixcart.com/image/200/250/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=90&crop=false"
   productTitle="APPLE iPhone 11(BLACK 23 GB)"
   productDesc1="128 GB ROM"
   productDesc2="15.9cm(16inch) HD Display"
   productDesc3="A13 Binic Chip Processor"
   productDesc4="1 Year waranty"
   prductprice="$430000"
   productexchnage="Upto $17000 off on Exchange"/>
    <Header
    productimg="https://rukminim1.flixcart.com/image/312/312/kqqykcw0/mobile/j/5/7/galaxy-f22-sm-e225flbdins-samsung-original-imag4z99fp4qdfby.jpeg?q=70"
   productTitle="SAMSUNG Galaxy F22 (Denim Blue, 64 GB)"
   productDesc1="128 GB ROM"
   productDesc2="15.9cm(16inch) HD Display"
   productDesc3="A13 Binic Chip Processor"
   productDesc4="1 Year waranty"
   prductprice="$470000"
   productexchnage="Upto $17000 off on Exchange"/>
    */}
     </div>

  );
}

export default App;

