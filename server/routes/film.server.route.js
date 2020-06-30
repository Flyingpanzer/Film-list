import express from "express";

import {
  getFilms,
  addFilm,
  deleteFilm
} from "../controllers/film.server.controller";

const router = express.Router();

router
  .route("/")
  .get(getFilms)
  .post(addFilm);
router.route("/:id").delete(deleteFilm);

export default router;
