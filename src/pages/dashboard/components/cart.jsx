import React from 'react';
import { useShoeContext } from '../../../contexts/shoes-context'

export default function Cart(){
    const { carts, deleteItemCart, decrementQuantity, incrementQuantity } = useShoeContext();

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
                            <div key={shoe.id} className="cardItem">
                                <div className="cardItem_left">
                                    <div className="cardItem_image"  style={{ backgroundColor: shoe.color }}>
                                        <img
                                            alt=""
                                            src={shoe.image}
                                        />
                                    </div>
                                </div>
                                <div className="cardItem_right">
                                    <div className="cardItem_name">
                                        {shoe.name}
                                    </div>
                                    <div className="cardItem_price">{shoe.price}</div>
                                    <div className="cartItem_actions">
                                    <div className="cartItem_count">
                                        <div className="cartItem_button" onClick={() => decrementQuantity(shoe.id)}>-</div>
                                        <div className="cartItem_number">{shoe.quantity}</div>
                                        <div className="cartItem_button" onClick={() => incrementQuantity(shoe.id)}>+</div>
                                    </div>
                                    <div className="carItem_remove" onClick={() => deleteItemCart(shoe.id)}>
                                        <img
                                            alt=""
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALISURBVHic7Zs9bxNBEIYfgyUKAhhQUhDRICEBCh0fgkhBNIT8gPwZ6Gig5y8QCUhH5AqE3EZJgQRKEDSpKEAQkTMdcijGRvi8Z+/e3eze4X2kKe40t/Pu+LRfN4bIdNNQbLsJ3ATOFWznC7AJ/C6syCMngC3gsCTb7LdZGx5SXucH9kBD6BGNRoGrNWlTLQEa7R5VaFMtAbXBZwLWkVnHxtZ9iZr6N6Bp6TcHXAOOW/qfz7i36un5X8A28NXSfywrQJfypzVtS4D7ZSRgpwKdyWsfJnXOZincxf7VrxoJcHKcg80g2ClFShg6ZTQyD2xQr3GgC7yi+EYs8t+TZ329gKwJfiLzbRU4Cywh/fmuGegpw/PssmYwS5aAfURTD3ikFegKo4PNe61gDrxjWFMPuGj7sMte4JLh3mWH57VYSF03cDg7cEmAabxQ2aM7UkjX1O8GfSRgHmgjM8YO4wfOFWC379umYguZVcyrrkm0U/4JMGvwm2N0tblh0b5Jk+222csbcCd1PYOsI9KYzhvuqij6Bx8JMO0kZyz91HehcRAMLSA0MQGhBYQmJiC0gNDEBIQWEJqYgNACQhMTEFpAaGICQgsITUxAaAGhiQnwEMP0+axr6af+6c1HAjqp6wQpo02zxWhi3moIykveU+FBfUGCfEq7N8Z3GSlrSbD/vl/oVNiFvAnQpvLH4pUmJsDBN2tEDlnHn1UBZppljLgkYC/j/i2HNspmMeP+nkawY8ABowPOa41gFjSQaTKt5wDRqsKaIeAh8Bjd/x+laQBPMrQ80wy8iJSgmAK/QWpzW4rxW8gndNMvPyiPua0YH4DnGcGrYGuK/f7LGeBjgM5Nsl3gtGK/h7gAfFbukIt96mvySgt4WVB4UesBL4BTyn0dy42+iEGxog/bR8ai60XFlzl1NZFiyllknNDgB/ANKbaq1V9pI1XlD82w8ru3YIVHAAAAAElFTkSuQmCC"
                                        />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </>
                    
                ): null}
                
              </div>
            </div>
        </>
    )
}