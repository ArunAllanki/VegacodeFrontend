import React from "react";
import { useNavigate } from "react-router-dom";
import "./Supply.css";
import logo from "../Images/NewLogo.png";

export const Supply = () => {
  const navigate = useNavigate();

  const data = [
    {
      _id: { $oid: "67ddd9535c750fee739d07e9" },
      Name: "Divakar",
      Item: "Rice",
      quantity: "500kg",
      Description: "Need an Help",
      Emergency: "True",
      contact: "+91 12345 67890",
    },
    {
      _id: { $oid: "67ddd9855c750fee739d07f1" },
      Name: "Ravi",
      Item: "Milk",
      Description: "lack of milk",
      Emergency: "False",
      quantity: "30lit",
      contact: "+91 12345 67890",
    },
    {
      _id: { $oid: "67ddd9855c750fee739d07f1" },
      Name: "Kumar",
      Item: "Milk",
      Description: "lack of milk",
      Emergency: "False",
      quantity: "60lit",
      contact: "+91 12345 67890",
    },
    {
      _id: { $oid: "67ddd9855c750fee739d07f1" },
      Name: "Vennela",
      Item: "Milk",
      Description: "lack of milk",
      Emergency: "True",
      quantity: "60lit",
      contact: "+91 12345 67890",
    },
    {
      _id: { $oid: "67ddd9855c750fee739d07f1" },
      Name: "Srinivasulu",
      Item: "Rice",
      Description: "lack of milk",
      Emergency: "True",
      quantity: "for 40 members",
      contact: "+91 12345 67890",
    },
  ];
  return (
    <>
      <div className="header">
        <img className="logo" src={logo}></img>
        <nav>
          <h3 onClick={() => navigate("/Home")}>Home</h3>
          <h3 onClick={() => navigate("/inventory")}>Inventory</h3>
          <h3 onClick={() => navigate("/supply")} className="in">
            Supply Requests
          </h3>
        </nav>
      </div>
      <div className="SupplyContainer">
        {data.map((item) => (
          <div className="supplyCard">
            {item.Emergency === "True" ? <h3>Emergency</h3> : <></>}
            <span>
              Request from<p> {item.Name}</p>
            </span>
            <span>
              Requested for<p> {item.Item}</p>
            </span>
            <span>
              of quantity<p> {item.quantity}</p>
            </span>
            <span>
              contact through <p>{item.contact}</p>
            </span>
            <span>
              Note : <p>{item.Description}</p>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};
