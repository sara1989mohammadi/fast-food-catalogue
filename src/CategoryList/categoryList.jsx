import { useEffect, useState } from "react";
import axios from "../axios";
import Loading from "../Loading/loading";
import SearchBar from "../SearchBar/searchBar";

const CategoryList = ({ filterItems, children }) => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("/FoodCategory/categories");
      setCategories(res.data);
      setLoading(false);
    };
    fetchCategories();
  }, []);
  const renderContent = () => {
    if (loading) {
      return <Loading theme="primary" />;
    } else {
      return (
        <div className="d-flex align-items-center  bg-white rounded-3 shadow-lg py-4">
          <ul className="nav">
            <li className="nav-item" onClick={() => filterItems()}>
              <a className="nav-link" href="#">
                All List
              </a>
            </li>
            {categories.map((category) => (
              <li
                className="nav-item"
                key={category.id}
                onClick={() => filterItems(category.id)}>
                <a className="nav-link" href="#">
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
          {children}
        </div>
      );
    }
  };
  return (
    <nav className="container mt-n5">
      <div
        className="bg-white rounded-3 shadow-lg py-4"
        style={{ height: "80px" }}>
        {renderContent()}
      </div>
    </nav>
  );
};
export default CategoryList;
