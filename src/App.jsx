import './App.css';
import Layout from "./layout/Layout/Layout"
import Hero from "./components/Hero/Hero"
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
            <Layout>  
                <Routes>
                    {/* <Route path="/" element={<Hero />}></Route> */}
                </Routes>
            </Layout>
    </>
  );
}

export default App;
