
import {formatDate } from "../../utils/format";
import "./FoodCard.css"
import weight from "../../assets/weight.jpg"
import cardio from "../../assets/cardio.jpg"

export default function FoodCard({ food, user }) {
  return (
    <div className="FoodCard">
      <p>{formatDate(food.created_at)}</p>
      {/* <div className="media">
        {exercise.category === 'Cardio' ? <img src={cardio} alt="cardio" /> : 
        <img src={weight} alt="weights" />}
      </div> */}

        <div className="product-info">
          <div className="info">
            <p className="product-name">{food.foodname}</p>
            <p className="product-price">{food.calories} calories</p>
            <p className="product-price">{food.quantity} </p>
          </div>
        </div>
      </div>
  );
}
