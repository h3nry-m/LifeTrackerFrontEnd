
import {formatDate } from "../../utils/format";
import "./FoodCard.css"
import defaultfood from "../../assets/defaultfood.jpg"


export default function FoodCard({ food, user }) {
  return (
    <div className="FoodCard">
      <p>{formatDate(food.created_at)}</p>
      <div className="media">
        <img src={defaultfood} alt="weights" />
      </div>

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
