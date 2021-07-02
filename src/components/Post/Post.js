
import {formatDate } from "../../utils/format";
import "./Post.css"
import weight from "../../assets/weight.jpg"
import cardio from "../../assets/cardio.jpg"

export default function Post({ exercise, user }) {
  return (
    <div className="Post">
      <p>{formatDate(exercise.created_at)}</p>
      <div className="media">
        {exercise.category === 'Cardio' ? <img src={cardio} alt="cardio" /> : 
        <img src={weight} alt="weights" />}
      </div>

        <div className="product-info">
          <div className="info">
            <p className="product-name">{exercise.exercisename}</p>
            <p className="product-price">{exercise.duration} minutes</p>
            <p className="product-price">{exercise.intensity}/10 intensity </p>
          </div>
        </div>
      </div>
  );
}
