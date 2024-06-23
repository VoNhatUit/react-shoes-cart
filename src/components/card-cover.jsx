import React from 'react'
import { useShoeContext } from '../contexts/shoes-context'

function CardCover({ data }) {
  const { addToCart, carts } = useShoeContext();

  const isDisabled = React.useMemo(() => {
    return carts.some(cart => cart.id === data.id)
  }, [carts]);

  return (
    <div key={data.id} className="shopItem">
      <div
        className="shopItem_image"
        style={{ backgroundColor: data.color }}
      >
        <img
          alt=""
          src={data.image}
        />
      </div>
      <div className="shopItem_name">{data.name}</div>
      <div className="shopItem_description">
        {data.description}
      </div>
      <div className="shopItem_bottom">
        <div className="shopItem_price">{data.price}</div>
        <button 
          type="button"
          className="shopItem_button" 
          onClick={() => addToCart(data.id)}  
          disabled={isDisabled}
          style={{
            cursor: isDisabled ? 'default' : 'pointer'
          }}
        >
          <p>ADD TO CART</p>
        </button>
      </div>
    </div>
  )
}

export default CardCover