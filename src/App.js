import { useEffect, useState } from "react";
import "./App.css";
import CategoryList from "./CategoryList/categoryList";
import Header from "./Header/header";
import axios from "./axios";
import Loading from "./Loading/loading";
import FastFoodList from "./FastFoodList/fastFoodList";
function App() {
  const [loading, setLoading] = useState(false);
  const [fastFoodItem, setfastFoodItem] = useState([]);
  const fetchData = async (categoryId = null) => {
    setLoading(true);
    const res = await axios.get(`/FastFood/list.json${"?categoryId=" + 2}`);
    setLoading(false);
    console.log(res.data);
    setfastFoodItem(res.data);
    console.log(fastFoodItem);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const renderContent = () => {
    if (loading) {
      return <Loading theme="dark" />;
    } else {
      return <FastFoodList fastFoodItems={fastFoodItem} />;
    }
  };
  return (
    <div className="wrapper bg-faded-dark">
      <Header />
      <CategoryList />
      <div className="container mt-4">{renderContent()}</div>
    </div>
  );
}

export default App;
