import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Header";
import { FormLabel, TextField, Box, Button } from "@mui/material";

function BookDetail() {
  const [inputs, setInputs] = useState();
  const id = useParams().id;
  const [checked, setChecked] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/books/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.book));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/books/${id}`, {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/"));
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <Header />
      {inputs && (
        <form onSubmit={handleSubmit}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            maxWidth={700}
            alignContent={"center"}
            alignItems={"center"}
            marginLeft={"auto"}
            marginRight={"auto"}
            marginTop={10}
          >
            <FormLabel>Name</FormLabel>
            <TextField
              value={inputs.name}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="name"
            />

            <FormLabel>Author</FormLabel>
            <TextField
              value={inputs.author}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="author"
            />

            <FormLabel>Description</FormLabel>
            <TextField
              margin="normal"
              fullWidth
              variant="outlined"
              name="description"
              value={inputs.description}
              onChange={handleChange}
            />

            <FormLabel>Price</FormLabel>
            <TextField
              type="number"
              margin="normal"
              fullWidth
              variant="outlined"
              name="price"
              value={inputs.price}
              onChange={handleChange}
            />
            <FormLabel>Image</FormLabel>
            <TextField
              margin="normal"
              fullWidth
              variant="outlined"
              name="image"
              value={inputs.image}
              onChange={handleChange}
            />

            <Button variant="contained" type="submit">
              Update Book
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
}

export default BookDetail;
