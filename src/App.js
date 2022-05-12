import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import {createStore} from 'redux';
import { Provider } from "react-redux";
import reducer from "./reducer";
//reducer

//initial store
const initialStore={
  cart:cartItems,
  total:9,
  amount:3
}


const store=createStore(reducer,initialStore);




function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer  />
    </Provider>
  );
}

export default App;
