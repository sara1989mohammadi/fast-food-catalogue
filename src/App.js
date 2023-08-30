import { useEffect, useState } from "react";
import "./App.css";
import CategoryList from "./CategoryList/categoryList";
import Header from "./Header/header";
import axios from "./axios";
import Loading from "./Loading/loading";
import FastFoodList from "./FastFoodList/fastFoodList";
import SearchBar from "./SearchBar/searchBar";
import notFound from "./assets/images/404.png";
function App() {
  const [loading, setLoading] = useState(false);
  const [fastFoodItem, setfastFoodItem] = useState([]);
  const fetchData = async (categoryId = null) => {
    setLoading(true);
    const res = await axios.get(
      `/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`
    );
    // const res = await axios.get(`/FastFood/list${"?categoryId=" + 2}`);
    setLoading(false);
    setfastFoodItem(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const filterItems = (categoryId) => {
    fetchData(categoryId);
  };

  const searchItems = async (term) => {
    setLoading(true);
    const res = await axios.get(
      `/FastFood/search/${term ? "?term=" + term : ""}`
    );
    setLoading(false);
    setfastFoodItem(res.data);
  };
  const renderContent = () => {
    if (loading) {
      return <Loading theme="dark" />;
    }
    if (fastFoodItem.length === 0) {
      return (
        <>
          <div className="alert alert-warning text-center">یافت نشد</div>
          <img className="max-auto mt-5 d-block" src={notFound} />
        </>
      );
    }
    return <FastFoodList fastFoodItems={fastFoodItem} />;
  };
  return (
    <div className="wrapper bg-faded-dark">
      <Header />
      <CategoryList filterItems={filterItems}>
        <SearchBar searchItems={searchItems} />
      </CategoryList>
      <div className="container mt-4">{renderContent()}</div>
    </div>
  );
}

export default App;
