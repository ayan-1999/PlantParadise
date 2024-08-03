import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Cards from "../../components/Cards";
import { fetchProduct } from "../../api/product";

const Products = () => {
  const [products, setproducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCatagory, setSelectedCatagory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProduct();
        setproducts(data);
        setFilteredItems(data);
      } catch (error) {
        console.log("error fatching data", error);
      }
    };
    fetchData();
  }, []);
  //filtering function
  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? products
        : products.filter((item) => item.category === category);
    setFilteredItems(filtered);
    setSelectedCatagory(category);
  };

  //sorting funtionality
  const handleSortChange = (option) => {
    setSortOption(option);

    let sortedItems = [...filteredItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        // Do nothing for the "default" case
        break;
    }

    setFilteredItems(sortedItems);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 py-4 bg-[rgba(241,243,204,1)] ">
      <h2 className="text-4xl font-bold text-center text-green-900 mb-6">
        Products
      </h2>

      {/*PRODUCT CARD */}
      <div>
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-2 mb-8">
          {/*BUTTONS */}
          <div className="flex flex-row justify-start md:items-center md:gap-4 gap-4 flex-wrap">
            <button
              onClick={() => filterItems("all")}
              className="hover:text-orange-500 font-semibold text-[rgba(86,88,46,1)]"
            >
              ALL PRODUCTS
            </button>
            <button
              onClick={() => filterItems("Bougainville")}
              className="hover:text-orange-500 font-semibold text-[rgba(86,88,46,1)]"
            >
              BOUGI
            </button>
            <button
              onClick={() => filterItems("Adenium")}
              className="hover:text-orange-500 font-semibold text-[rgba(86,88,46,1)]"
            >
              {" "}
              ADENIUM
            </button>
            <button
              onClick={() => filterItems("Indoor")}
              className="hover:text-orange-500 font-semibold text-[rgba(86,88,46,1)]"
            >
              INDOOR
            </button>
            <button
              onClick={() => filterItems("Hibiscus")}
              className="hover:text-orange-500 font-semibold text-[rgba(86,88,46,1)]"
            >
              HIBISCUS
            </button>
          </div>
          {/*Sorting option */}
          <div className="flex justify-end mb-4 rounded-sm">
            <div className="bg-[rgba(86,88,46,1)] p-2">
              <FaFilter className="text-white h-4 w-4 rounded-sm" />
            </div>
            <select
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
              className="bg-[rgba(86,88,46,1)] text-white px-2 py-1 rounded-sm"
            >
              <option value="Default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to low</option>
            </select>
          </div>
        </div>
        <Cards filteredItems={filteredItems} />
      </div>
    </div>
  );
};

export default Products;
