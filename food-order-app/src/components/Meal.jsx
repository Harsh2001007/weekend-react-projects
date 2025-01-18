import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";

function Meal() {
  const [loadedMeal, setLoadedMeals] = useState([]);

  useEffect(() => {
    const mealFetch = async () => {
      const response = await fetch("http://localhost:3000/meals");

      if (!response) {
        //
      }

      const mealData = await response.json();
      setLoadedMeals(mealData);
    };

    mealFetch();
  }, []);

  console.log(loadedMeal);

  return (
    <>
      <ul id="meals">
        {loadedMeal.map((item) => (
          <MealItem key={item.id} meal={item} />
        ))}
      </ul>
    </>
  );
}

export default Meal;
