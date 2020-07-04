import express from "express";

import {
  getFilms,
  addFilm,
  deleteFilm,
  searchFilmByType,
  addFile
} from "../controllers/film.server.controller";

const router = express.Router();

router
  .route("/")
  .get(getFilms)
  .post(addFilm);
router.route("/:id").delete(deleteFilm);
router.route("/search").post(searchFilmByType);
router.route("/upload").post(addFile);

export default router;
