import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const fetchMeals = async () => {
    setIsLoading(true);
    setHttpError(null);
    try {
      const response = await fetch(
        "https://react-http-58c10-default-rtdb.firebaseio.com/Meals.json"
      );
      if (!response.ok) {
        throw new Error("Couldnt Fetch the data");
      }
      const data = await response.json();

      const ListOfMeals = [];
      for (const key in data) {
        ListOfMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(ListOfMeals);
    } catch (error) {
      setIsLoading(false);
      setHttpError(error.message);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {httpError && <p style={{ textAlign: "center" }}>{httpError}</p>}
        {isLoading && <p style={{ textAlign: "center" }}>Loading.....</p>}
        {!isLoading && <ul>{mealsList}</ul>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
