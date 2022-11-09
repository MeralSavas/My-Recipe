import axios from "axios";
import React from "react";
import { useState } from "react";
import { Button, Form, FormSelect } from "react-bootstrap";

const Home = () => {
  const [food, setFood] = useState("");
  const [mealType, setMealType] = useState("");
  const [products, setProducts] = useState(null);

  const getData = async () => {
    const APP_ID = "c8c9a11e";
    const APP_KEY = "bd4711dd0c705760bbe40a4cb6d15446";
    const url = `https://api.edamam.com/search?q=${food}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;
    try {
      const { data } = await axios(url);
      setProducts(data.hits);
    } catch (error) {}

    // console.log(data);
  };

  // console.log(food);
  // console.log(mealType);

  const handleClick = () => {
    getData();
  };

  return (
    <div className=" d-flex justify-content-center align-items-center">
      <Form className=" container w-50 d-flex g-2 border border-success">
        <input
          type="text"
          value={food}
          placeholder="food name"
          onChange={(e) => setFood(e.target.value)}
        />

        <FormSelect onChange={(e) => setMealType(e.target.value)}>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="Teatime">Tea Time</option>
          <option value="snack">Snack</option>
        </FormSelect>
        <Button onClick={handleClick}>Search</Button>
      </Form>
    </div>
  );
};

export default Home;
