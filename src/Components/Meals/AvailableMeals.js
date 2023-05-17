import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Veg. Kolhapuri",
    description: "A famous spicy curry from Kolhapur, India",
    price: 109.99,
  },
  {
    id: "m2",
    name: "Shahi Paneer",
    description: "Indian cottage cheese in creamy tomato gravy",
    price: 129.99,
  },
  {
    id: "m3",
    name: "Kaju Curry",
    description: "A delicious curry with cashews",
    price: 139.99,
  },
  {
    id: "m4",
    name: "Veg. Biryani",
    description:
      "Indian basmati rice with veggies and spices, served with raita",
    price: 149.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
