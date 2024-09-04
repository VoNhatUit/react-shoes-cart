import React from 'react';
import { useShoeContext } from '../../../contexts/shoes-context'
import CartItem from '../../../components/cart-item';

export default function Cart(){
    const { carts } = useShoeContext();

    const total = React.useMemo(() => {
        const result = carts.reduce((acc, currItem) => {
            acc = acc + currItem.price * currItem.quantity
            return acc;
        }, 0)
        return result;
    },[carts])

    return (
        <>
        <div className="card">
              <div className="cardTop">
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
                />
                <div>Total: {carts.length}</div>
              </div>

              <div className="cardTitle">
                <span>Your cart</span>
                <span className="card_amount">${total.toFixed(2)}</span>
              </div>

              <div className="cardBody">
                {carts.length >0? (<>
                    {carts.map(shoe =>{
                        return (
                            <CartItem key={shoe.id} data={shoe}/>
                        )
                    })}
                </>
                    
                ): null}
                
              </div>
            </div>
        </>
    )
}