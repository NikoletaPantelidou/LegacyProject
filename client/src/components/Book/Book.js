import React from "react";
import { Button } from "@mui/material";
import "./Book.css";
import { Link } from "react-router-dom";
import axios from "axios";
function Book(props) {
  const { _id, name, author, description, price, image } = props.book;
  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((data) => {
        window.alert("Are you sure you want to delete this item?");
        console.log(data);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>

      <h3>Rs: {price} $</h3>
      <Button LinkComponent={Link} to={`/books/${_id}`}>
        Update
      </Button>
      <Button onClick={deleteHandler}>Delete</Button>
    </div>
  );
}

export default Book;
