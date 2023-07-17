import React, { useState } from "react";
import { FormLabel, TextField, Box, Button } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import {useNavigate} from "react-router-dom"
const AddBook = () => {
  const history =useNavigate()
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    author: "",

    image: "",
  });
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "value", e.target.value);
  };
  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/books", {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
      alert("Book Created")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(()=>history("/"))
  };
  return (
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
        {/* <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          }
          label="Available"
        /> */}
        <Button variant="contained" type="submit">
          Add Book
        </Button>
      </Box>
    </form>
  );
};

export default AddBook;
