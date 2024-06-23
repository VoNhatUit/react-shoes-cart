import React from 'react';

import { shoesData } from '../mock_data/shoesData';

const AppContext = React.createContext();

export default function ShoeProvider({ children }) {
  const [shoes, setShoes] = React.useState(shoesData); // memory A
  const [carts, setCarts] = React.useState([])

  function addToCart(shoeId) {
    const item = shoes.find(shoe => shoe.id === shoeId);
    if(!item) return;
    const newItem = {
      id: item.id,
      image: item.image,
      name: item.name,
      price: item.price,
      color: item.color,
      quantity: 1
    }

    setCarts(prevState => ([...prevState, newItem]))
  }

  function deleteItemCart(shoeId) {
    setCarts(prevState => {
      const carts = [...prevState];
      const cartIndex = carts.findIndex(cart => cart.id === shoeId);
      if(cartIndex === -1) return prevState;

      carts.splice(cartIndex, 1); // remove an item in array
      return carts
    })
  }

  function decrementQuantity(shoeId) {
    setCarts(prevState => {
      const carts = JSON.parse(JSON.stringify(prevState));
      const cartIndex = carts.findIndex(cart => cart.id === shoeId);
      if(cartIndex === -1) return prevState;
      carts[cartIndex].quantity = carts[cartIndex].quantity - 1;  

      if(carts[cartIndex].quantity === 0) {
        carts.splice(cartIndex, 1);
      }

      return carts
    })
  }

  function incrementQuantity(shoeId) {
    setCarts(prevState => {
      const carts = JSON.parse(JSON.stringify(prevState));
      const cartIndex = carts.findIndex(cart => cart.id === shoeId);
      if(cartIndex === -1) return prevState;
      carts[cartIndex].quantity = carts[cartIndex].quantity + 1

      return carts
    })
  };
  
  function handleSold(shoeId, checked){
    const shoeIndex = shoes.findIndex(shoe => shoe.id === shoeId);
    if(shoeIndex === -1) return;
    const clonedShoes = [...shoes];
    clonedShoes[shoeIndex].sold = true;
    setShoes(clonedShoes)
  }
 
  return (
    <AppContext.Provider
      value={{
        shoes,
        carts,
        handleSold,
        addToCart,
        deleteItemCart,
        incrementQuantity,
        decrementQuantity
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useShoeContext = () => React.useContext(AppContext);