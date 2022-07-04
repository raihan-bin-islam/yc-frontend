import React from "react";
import Books from "../../../Components/Books/Books";
import useFetch from "../../../Components/Hooks/useFetch";

const BooksPage = () => {
  const [bookIsPending, books] = useFetch("/books");
  console.log(books);
  return <>{books.length > 0 && <Books booksData={books} />}</>;
};

export default BooksPage;
