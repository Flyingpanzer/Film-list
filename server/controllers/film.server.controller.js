import mongoose from "mongoose";

import Film from "../models/film.server.model";

export const getFilms = (req, res) => {
  Film.find().exec((err, films) => {
    if (err) {
      return res.json({ success: false, message: "Some Error" });
    }

    return res.json({
      success: true,
      message: "Films fetched successfully",
      films
    });
  });
};

export const addFilm = (req, res) => {
  const splitFilmStars = req.body.filmStars.split(",").map(el => el.trim());
  const newBody = Object.assign({}, req.body, { filmStars: splitFilmStars });
  console.log("newBody", newBody);
  const newFilm = new Film(newBody);
  console.log("newFilm", newFilm);

  newFilm.save((err, film) => {
    if (err) {
      return res.json({ success: false, message: "Some Error" });
    }

    return res.json({
      success: true,
      message: "Film added successfully",
      film
    });
  });
};

export const deleteFilm = (req, res) => {
  Film.findByIdAndRemove(req.params.id, (err, film) => {
    if (err) {
      return res.json({ success: false, message: "Some Error" });
    }

    return res.json({
      success: true,
      message: film.filmTitle + " deleted successfully"
    });
  });
};
