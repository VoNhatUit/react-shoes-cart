import React from 'react';
import { shoesData } from '../mock_data/shoesData';
const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [shoes, setShoes] = React.useState(shoesData); // memory A
   
  
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
        handleSold
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => React.useContext(AppContext);