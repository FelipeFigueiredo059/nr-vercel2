import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function List() {
  const navigateTo = useNavigate();

  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");

    if (!accessToken) {
      navigateTo("/");
    }
  }, [navigateTo]);

  const [listOfEmployees, setListOfEmployees] = useState([]);
  useEffect(() => {
    axios.get("https://nr-control.vercel.app/register").then((response) => {
      setListOfEmployees(response.data);
    });
  }, []);

  return (
    <div>
      {listOfEmployees.map((value, key) => {
        return (
          <div className="post">
            <div className="name">{value.name}</div>
            <div className="cpf">{value.cpf}</div>
          </div>
        );
      })}
    </div>
  );
}

export default List;
