import { useState } from "react";
import apiClient from "../services/apiClient";
import NotAllowed from "../NotAllowed/NotAllowed";
import "./NewFoodForm.css";


export default function NewFoodForm({ user, addFood, foods }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [form, setForm] = useState({
    foodName: "",
    category: "",
    quantity: "",
    calories: "",
  });

  const handleOnInputChange = (event) => {
    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };


  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { data, errors } = await apiClient.createFood({
      foodName: form.foodName,
      category: form.category,
      quantity: form.quantity,
      calories: form.calories,
    });
    // addExercise(form);
    if (data) addFood(form);
    if (errors) setErrors((e) => ({ ...e, form: errors }));

    setForm({ foodName: "", category: "", quantity: "", calories: "" });

    setIsLoading(false);
    
  };

  const renderForm = () => {
    if (!user?.email) {
      return <NotAllowed />;
    }
    return (
      <div className="form">
        <div className="input-field">
          <label htmlFor="foodName">Name</label>
          <input
            type="text"
            name="foodName"
            // placeholder="Name of food"
            value={form.foodName}
            onChange={handleOnInputChange}
          />
        </div>

        {/* <div className="input-field">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="category"
            placeholder="Choose between resistance and Fruit"
            value={form.category}
            onChange={handleOnInputChange}
          />
        </div> */}

        <div className="radio">
          {/* <label htmlFor="category">Category</label> */}
          <input
            type="radio"
            name="category"
            value="Fruit"
            checked={form.category === "Fruit"}
            onChange={handleOnInputChange}
          />
          Fruit
        </div>

        <div className="radio">
          {/* <label htmlFor="category">Category</label> */}
          <input
            type="radio"
            name="category"
            value="Vegetable"
            checked={form.category === "Vegetable"}
            onChange={handleOnInputChange}
          />
          Vegetable
        </div>

        <div className="input-field">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            name="quantity"
            // placeholder="Number of minutes"
            min={1}
            value={form.quantity}
            onChange={handleOnInputChange}
          />
        </div>

        <div className="input-field">
          <label htmlFor="calories">Calories</label>
          <input
            type="number"
            name="calories"
            // placeholder="Intensity from 1-10"
            value={form.calories}
            onChange={handleOnInputChange}
          />
        </div>
        <button className="btn" disabled={isLoading} onClick={handleOnSubmit}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </div>
    );
  };

  return (
    <div className="NewFoodForm">
      <div className="card">
        <h2>Add a food item</h2>

        {Boolean(errors) && <span className="errors">{errors}</span>}

        {renderForm()}
      </div>
    </div>
  );
}
