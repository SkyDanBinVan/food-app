import './App.css';
import Layout from "./layout/Layout/Layout"
import Hero from "./components/Hero/Hero"
import FoodItem from "./components/FoodItem/FoodItem"
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import recipes from "./data/recipes.json"

export default function App() {
  return (
    <>
      <Layout>  
          <Routes>
              <Route path="/" element={<Hero recipes={recipes}/>}></Route>
              <Route path="/recipes/:id" element={<FoodItem recipes={recipes}/>}></Route>
          </Routes>
      </Layout>
    </>
  );
}