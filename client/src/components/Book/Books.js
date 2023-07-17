import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";
import "./Book.css";

const URL = "http://localhost:5000/books";

const fetchHandler = async () => {
  try {
    return await axios.get(URL).then((res) => res.data);
  } catch (error) {
    console.log(error);
  }
};

const Books = () => {
  const [books, setBooks] = useState();

  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
      // console.log(data.books);
  }, []);

  console.log(books);
  return (
    <div className="book-container">
      <ul>
        {books &&
          books.map((book, i) => (
            <li key={i}>
              <Book book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;
