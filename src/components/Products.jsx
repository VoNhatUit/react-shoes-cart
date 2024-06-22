import { useState } from "react";
import { useAppContext } from "../contexts/shoes-context";
export default function Products(){
  const {shoes, handleSold } = useAppContext();

  
    return (
        <>
            <div className="card">
              <div className="cardTop">
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
                />
              </div>

              <div className="cardTitle">Our Products</div>

              <div className="cardBody">
                
                {
                    shoes.map(shoe =>{
                                return (
                                <div key={shoe.id} className="shopItem">
                                <div
                                    className="shopItem_image"
                                    style={{ backgroundColor: shoe.color }}
                                >
                                    <img
                                    alt=""
                                    src={shoe.image}
                                    />
                                </div>
                                <div className="shopItem_name">{shoe.name}</div>
                                <div className="shopItem_description">
                                    {shoe.description}
                                </div>
                                <div className="shopItem_bottom">
                                    <div className="shopItem_price">{shoe.price}</div>
                                    <div className="shopItem_button" 
                                    onChange={(event) => handleSold(shoe.id, event.target.checked)} 
                                    disabled={shoe.sold}>
                                    <p>ADD TO CART</p>
                                    </div>
                                </div>
                                </div>
                                )
                            })
                        }                
              </div>
            </div>
        </>
                    
    )
}