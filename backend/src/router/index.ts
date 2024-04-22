import express from "express";
import { filterSchoolData, getSchoolData, schoolData, updateSchoolData } from "../controllers";

const app = express.Router();

app.route("/add-data").post(schoolData);
app.route("/").get(getSchoolData);
app.route("/:id").put(updateSchoolData);
app.route("/filter").get(filterSchoolData);


export default app;