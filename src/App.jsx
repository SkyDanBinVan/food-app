import './App.css';
import Layout from "./layout/Layout/Layout"
import Hero from "./components/Hero/Hero"
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Foodcards from './components/FoodCards/Foodcards';
function App() {
  return (
    <>
      <Layout>  
          <Routes>
              <Route path="/" element={<Hero />}></Route>
              <Route path="/cards" element={<Foodcards />}></Route>
          </Routes>
      </Layout>
    </>
  );
}

export default App;
