
import { Link } from "react-router-dom";
import "./Food.css"
import NotAllowed from "../NotAllowed/NotAllowed";
import FoodCard from "../FoodCard/FoodCard";
export default function Food({ user, isFetching, foods, error }) {
  if (!user) {
    return <NotAllowed />
  }
  return (
    <div className="Food">
      <h8 className="intro">Food</h8>

      <Link to="create">
        <button>Add New Food</button>
        </Link>
      <div className="feed">
        {/* {error ? <h2 className="error">{error}</h2> : null} */}
        {isFetching ? <h2>Loading...</h2> : null}
        {foods?.map((food) => (
          <FoodCard food={food} key={food.id} user={user} />
        ))}
      </div>
    </div>
  )
}
