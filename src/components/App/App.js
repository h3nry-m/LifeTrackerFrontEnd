import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import apiClient from "../services/apiClient";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Register from "../Register/Register";
import Login from "../Login/Login";
// import PostDetail from "../PostDetail/PostDetail";
import NotFound from "../NotFound/NotFound";
import Exercise from "../Exercise/Exercise";
import NewExerciseForm from "../NewExerciseForm/NewExerciseForm";
import NewFoodForm from "../NewFoodForm/NewFoodForm";
import Activity from "../Activity/Activity";
import Food from "../Food/Food";
import "./App.css";

export default function App() {
  const [user, setUser] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [foods, setFoods] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);



  // handles the persistent user token
  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await apiClient.fetchUserFromToken();
      //everytime refresh page, app makes an api request above
      if (data) setUser(data.user);
      if (error) setError(error);
    };
    const token = localStorage.getItem("life_tracker_token");
    if (token) {
      apiClient.setToken(token);
      fetchUser();
    }
  }, []);

  // will display all exercises
  useEffect(() => {
    const fetchExercises = async () => {
      setIsFetching(true);

      const { data, error } = await apiClient.listUserExercises(user);
      if (data) setExercises(data.exercises);
      if (error) setError(error);

      setIsFetching(false);
    };

    const fetchFood = async () => {
      setIsFetching(true);

      const { data, error } = await apiClient.listUserFood(user);
      if (data) setFoods(data.food);
      if (error) setError(error);

      setIsFetching(false);
    };

    fetchExercises();
    fetchFood();
  }, [user]);


  // useEffect(() => {
  //   const fetchFood = async () => {
  //     setIsFetching(true);

  //     const { data, error } = await apiClient.listUserFood(user);
  //     if (data) setFoods(data.foods);
  //     if (error) setError(error);

  //     setIsFetching(false);
  //   };

  //   fetchFood();
  // }, [user]);




  const addExercise = (newExercises) => {
    setExercises((oldExercises) => [...oldExercises, newExercises]);
  };

  const addFood = (newFood) => {
    setFoods((oldFood) => [...oldFood, newFood]);
  };

  // handles the logout
  const handleLogout = async () => {
    await apiClient.logoutUser();
    setUser(null);
    // setExercises([])
    setError(null);
  };

  //   <Route exact path="/">
  //   {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
  // </Route>

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user} setUser={setUser} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activity" element={<Activity user={user} />} />
          <Route
            path="/nutrition"
            element={
              <Food
                user={user}
                error={error}
                foods={foods}
                isFetching={isFetching}
                addFood={addFood}
              />
            }
          />
          <Route
            path="/exercise"
            element={
              <Exercise
                user={user}
                error={error}
                exercises={exercises}
                isFetching={isFetching}
                addExercise={addExercise}
              />
            }
          />
          <Route
            path="/exercise/create"
            element={
              <NewExerciseForm
                user={user}
                addExercise={addExercise}
                exercises={exercises}
              />
            }
          />
          <Route
            path="/nutrition/create"
            element={
              <NewFoodForm user={user} addFood={addFood} foods={foods} />
            }
          />
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} />}
          />
          <Route
            path="/register"
            element={<Register user={user} setUser={setUser} />}
          />
          <Route path="*" element={<NotFound user={user} error={error} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
// {/* <Route path="/exercises/:postId" element={<PostDetail user={user} updatePost={updatePost} />} /> */}
