import "./Activity.css";
import apiClient from "../services/apiClient";
import { useState, useEffect } from "react";
import NotAllowed from "../NotAllowed/NotAllowed";
import { formatRating } from "../../utils/format";

import ActivityCard from "../ActivityCard/ActivityCard";

export default function Activity({ user }) {
  const [summaryExercise, setSummaryExercise] = useState({});
  const [summaryFood, setSummaryFood] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const activityExercises = async () => {
      const { data, error } = await apiClient.activityExercises(user);
      try {
        data &&
          setSummaryExercise({
            avgDuration: +data.avgDuration.avg,
            totalDuration: +data.totalDuration.sum,
          });
      } catch (error) {
        setError(error);
      }
    };

    const activityFood = async () => {
      const { data, error } = await apiClient.activityFood(user);
      try {
        data &&
          setSummaryFood({
            avgCalories: +data.avgCalories.avg,
            // totalDuration: +data.totalDuration.sum,
          });
      } catch (error) {
        setError(error);
      }
    };

    activityFood();
    activityExercises();
  }, [user]);

  if (!user) {
    return <NotAllowed />;
  }
  return (
    <div className="Activity">
      <h8 className="intro">Activities</h8>
      <span>{user.first_name}'s Activity</span>

      <div className="feed">
        <ActivityCard
          title="Average Exercise Duration (minutes)"
          number={formatRating(summaryExercise.avgDuration)}
        />
        <ActivityCard
          title="Total Exercise Duration (minutes)"
          number={formatRating(summaryExercise.totalDuration)}
        />
        <ActivityCard
          title="Average Calories"
          number={formatRating(summaryFood.avgCalories)}
        />
        {/* <span>Average duration: {formatRating(summaryExercise.avgDuration)} minutes</span>
        <span>Total duration: {summaryExercise.totalDuration} minutes</span> */}
      </div>
    </div>
  );
}
