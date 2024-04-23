import express from "express";
import {createBook, getBooks, deleteBook} from "../controllers";

const app = express.Router();

app.route("/").post(createBook).get(getBooks);
app.route("/:id").delete(deleteBook);


export default app;