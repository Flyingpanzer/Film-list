import mongoose from 'mongoose';
import fs from 'fs';

import Film from '../models/film.server.model';
import { parseFilmFile } from './utils';

export const getFilms = (req, res) => {
  Film.find().exec((err, films) => {
    if (err) {
      return res.json({ success: false, message: 'Some Error' });
    }

    return res.json({
      success: true,
      message: 'Films fetched successfully',
      films,
    });
  });
};

export const addFilm = (req, res) => {
  const splitFilmStars = req.body.filmStars.split(',').map(el => el.trim());
  const newBody = Object.assign({}, req.body, { filmStars: splitFilmStars });
  const newFilm = new Film(newBody);

  Film.find({ filmTitle: req.body.filmTitle }, (err, film) => {
    if (!err && film.length > 0) {
      return res.json({
        success: false,
        message: 'The film with this title already exists',
      });
    } else {
      newFilm.save((err, film) => {
        if (err) {
          return res.json({ success: false, message: 'Some Error' });
        }

        return res.json({
          success: true,
          message: 'Film added successfully',
          film,
        });
      });
    }
  });
};

export const addFile = (req, res) => {
  var text = fs.readFileSync(req.files.file.file).toString('utf-8');

  const parsedData = parseFilmFile(text.trim());

  parsedData.forEach(film => {
    const splitFilmStars = film.filmStars.split(',').map(el => el.trim());

    const newFilmData = Object.assign({}, film, { filmStars: splitFilmStars });
    const newFilm = new Film(newFilmData);
    newFilm.save((err, film) => {
      if (err) {
        return res.json({ success: false, message: 'Some Error' });
      }
    });
  });

  return res.json({
    success: true,
    message: 'Film file has been added successfully',
  });
};

export const searchFilmByType = (req, res) => {
  const { searchInput, inputType } = req.body;
  if (inputType === 'title') {
    Film.find({ filmTitle: searchInput }, (err, film) => {
      if (err) {
        return res.json({ success: false, message: 'Some Error' });
      }

      return res.json({
        success: true,
        message: 'Film fetched by title successfully',
        film,
      });
    });
  } else if (inputType === 'actor') {
    Film.find({ filmStars: searchInput }, (err, film) => {
      if (err) {
        return res.json({ success: false, message: 'Some Error' });
      }

      return res.json({
        success: true,
        message: 'Film fetched by actor successfully',
        film,
      });
    });
  }
};

export const deleteFilm = (req, res) => {
  Film.findByIdAndRemove(req.params.id, (err, film) => {
    if (err) {
      return res.json({ success: false, message: 'Some Error' });
    }

    return res.json({
      success: true,
      message: film.filmTitle + ' deleted successfully',
    });
  });
};
