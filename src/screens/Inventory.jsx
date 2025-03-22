import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Inventory.css";
import logo from "../Images/NewLogo.png";

export const Inventory = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("");
  const [fItems, setFItems] = useState([]);
  const [mItems, setMItems] = useState([]);
  const [add, setAdd] = useState(false);

  const Backend = process.env.BackendURL;

  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [units, setUnits] = useState("");

  const handleFoodSubmit = async (e) => {
    e.preventDefault();
    console.log({ itemName, quantity, units });
    const response = fetch("http://localhost:5000/fItems/addfItems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: itemName,
        quantity: quantity,
        units: units,
      }),
    });

    // const data = await response.json();
    // console.log(data, "added");

    setAdd(false);
    setItemName("");
    setQuantity("");
    setUnits("");
    fetchFoodItems();
  };

  const handleMedicineSubmit = async (e) => {
    e.preventDefault();
    console.log({ itemName, quantity, units });
    const response = fetch("http://localhost:5000/fItems/addmItems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: itemName,
        quantity: quantity,
        units: units,
      }),
    });

    // const data = await response.json();
    // console.log(data, "added");

    setAdd(false);
    setItemName("");
    setQuantity("");
    setUnits("");
    fetchMedicineItems();
  };

  const fetchFoodItems = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/fItems/getAllfItems",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const foodData = await response.json();
      console.log("Data received:", foodData);
      setFItems(foodData);
      console.log("state", fItems);
    } catch (error) {
      console.error("Fetch Error:", error.message);
    }
  };

  const fetchMedicineItems = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/fItems/getAllmItems",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const medicineData = await response.json();
      setMItems(medicineData);
      console.log("state", fItems);
    } catch (error) {
      console.error("Fetch Error:", error.message);
    }
  };

  const delFoodItem = async (Id) => {
    try {
      const response = await fetch("http://localhost:5000/fItems/delfItem", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Id }),
      });

      const DelResponse = await response.json();
      console.log("Deleted:", DelResponse);
      fetchFoodItems();
    } catch (error) {
      console.error("Fetch Error:", error.message);
    }
  };
  const delMedicineItem = async (Id) => {
    try {
      const response = await fetch("http://localhost:5000/fItems/delmItem", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Id }),
      });

      const DelResponse = await response.json();
      console.log("Deleted:", DelResponse);
      fetchMedicineItems();
    } catch (error) {
      console.error("Fetch Error:", error.message);
    }
  };
  // fetchFoodItems();

  useEffect(() => {
    fetchFoodItems();
    fetchMedicineItems();
  }, [add, current]);

  return (
    <>
      <div className="header">
        <img className="logo" src={logo}></img>
        <nav>
          <h3 onClick={() => navigate("/Home")}>Home</h3>
          <h3 onClick={() => navigate("/inventory")} className="in">
            Inventory
          </h3>
          <h3 onClick={() => navigate("/supply")}>Supply Requests</h3>
        </nav>
      </div>
      {current === "" ? (
        <div className="Dabba">
          <div
            className="card"
            onClick={() => {
              setCurrent("Food");
              fetchFoodItems();
            }}
          >
            <p>Food</p>
          </div>
          <div className="card" onClick={() => setCurrent("Medicines")}>
            <p>Clothes</p>
          </div>
          <div className="card" onClick={() => setCurrent("Clothes")}>
            <p>Medicines</p>
          </div>
        </div>
      ) : current === "Food" ? (
        <div className="foodPage">
          <h2
            className="back"
            onClick={() => {
              setCurrent("");
            }}
          >
            Back
          </h2>

          <h1>Food Inventory</h1>
          {add === false ? (
            <button className="Add" onClick={() => setAdd(true)}>
              Add Item
            </button>
          ) : (
            <div className="addInputs">
              <h3>Add Item</h3>
              <form onSubmit={handleFoodSubmit}>
                <label className="block mb-2">Item Name</label>
                <input
                  type="text"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  className="w-full p-2 border rounded mb-4"
                  required
                />

                <label className="block mb-2">Quantity</label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full p-2 border rounded mb-4"
                  required
                />

                <label className="block mb-2">Units</label>
                <input
                  type="text"
                  value={units}
                  onChange={(e) => setUnits(e.target.value)}
                  className="w-full p-2 border rounded mb-4"
                  required
                />

                <button className="button" type="submit">
                  Submit
                </button>
              </form>
            </div>
          )}
          <div className="fItems">
            {fItems.map((item) => (
              <div key={item._id} className="fItem">
                <p>{item.name}</p>
                <p>
                  {item.quantity} {item.units}
                </p>
                <div className="buttons">
                  <button>Edit</button>
                  <button onClick={() => delFoodItem(item._id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : current === "Medicines" ? (
        <div className="foodPage">
          <h2
            className="back"
            onClick={() => {
              setCurrent("");
            }}
          >
            Back
          </h2>

          <h1>Clothes Inventory</h1>
          {add === false ? (
            <button className="Add" onClick={() => setAdd(true)}>
              Add Item
            </button>
          ) : (
            <div className="addInputs">
              <h3>Add Item</h3>
              <form onSubmit={handleMedicineSubmit}>
                <label className="block mb-2">Item Name</label>
                <input
                  type="text"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  className="w-full p-2 border rounded mb-4"
                  required
                />

                <label className="block mb-2">Quantity</label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full p-2 border rounded mb-4"
                  required
                />

                <label className="block mb-2">Units</label>
                <input
                  type="text"
                  value={units}
                  onChange={(e) => setUnits(e.target.value)}
                  className="w-full p-2 border rounded mb-4"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
          <div className="fItems">
            {mItems.map((item) => (
              <div key={item._id} className="fItem">
                <p>{item.name}</p>
                <p>
                  {item.quantity} {item.units}
                </p>
                <div className="buttons">
                  <button>Edit</button>
                  <button onClick={() => delMedicineItem(item._id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : current === "Clothes" ? (
        <div>Clothens</div>
      ) : (
        <></>
      )}
    </>
  );
};
