import { useEffect, useState } from "react";
import axios from "../axios";
import Loading from "../Loading/loading";

const CategoryList = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("/FoodCategory/categories.json");
      console.log("res", res);
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
        <ul className="nav">
          <li className="nav-item">
            <a href="#" className="nav-link">
              List
            </a>
          </li>
          {categories.map((category) => (
            <li className="nav-item" key={category.id}>
              <a className="nav-link" href="#">
                {category.name}
              </a>
            </li>
          ))}
        </ul>
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
