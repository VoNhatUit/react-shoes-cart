
import { useShoeContext } from "../../../contexts/shoes-context";
import CardCover from "../../../components/card-cover";

export default function Products(){
  
  const { shoes } = useShoeContext();
  
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
                    <CardCover key={shoe.id} data={shoe} />
                  )
              })
            }                
        </div>
      </div>
    </>
                  
  )
}