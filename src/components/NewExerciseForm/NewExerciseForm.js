import { useState } from "react";
import apiClient from "../services/apiClient";
import NotAllowed from "../NotAllowed/NotAllowed";
import "./NewExerciseForm.css";


export default function NewExerciseForm({ user, addExercise, exercises }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [form, setForm] = useState({
    exerciseName: "",
    category: "",
    duration: "",
    intensity: "",
  });

  const handleOnInputChange = (event) => {
    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };


  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { data, errors } = await apiClient.createExercise({
      exerciseName: form.exerciseName,
      category: form.category,
      duration: form.duration,
      intensity: form.intensity,
    });
    
    if (data) addExercise(form);
    if (errors) setErrors((e) => ({ ...e, form: errors }));

    setForm({ exerciseName: "", category: "", duration: "", intensity: "" });

    setIsLoading(false);
    // <Redirect to="/" />
  };

  const renderForm = () => {
    if (!user?.email) {
      return <NotAllowed />;
    }
    return (
      <div className="form">
        <div className="input-field">
          <label htmlFor="exerciseName">Name</label>
          <input
            type="text"
            name="exerciseName"
            // placeholder="Name of exercise"
            value={form.exerciseName}
            onChange={handleOnInputChange}
          />
        </div>

        <div className="radio">
          {/* <label htmlFor="category">Category</label> */}
          <input
            type="radio"
            name="category"
            value="Cardio"
            checked={form.category === "Cardio"}
            onChange={handleOnInputChange}
          />
          Cardio
        </div>

        <div className="radio">
          {/* <label htmlFor="category">Category</label> */}
          <input
            type="radio"
            name="category"
            value="Resistance"
            checked={form.category === "Resistance"}
            onChange={handleOnInputChange}
          />
          Resistance
        </div>

        <div className="input-field">
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            name="duration"
            placeholder="Number of minutes"
            min={1}
            value={form.duration}
            onChange={handleOnInputChange}
          />
        </div>

        <div className="input-field">
          <label htmlFor="intensity">Intensity</label>
          <input
            type="number"
            min={1}
            max={10}
            name="intensity"
            placeholder="Intensity from 1-10"
            value={form.intensity}
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
    <div className="NewExerciseForm">
      <div className="card">
        <h2>Add an exercise</h2>

        {Boolean(errors) && <span className="errors">{errors}</span>}

        {renderForm()}
      </div>
    </div>
  );
}
