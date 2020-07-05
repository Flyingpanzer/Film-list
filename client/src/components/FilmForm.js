import React, { useState } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

const FilmForm = ({ addFilm, inputFields, setInputFields }) => {
  const onChange = e => {
    e.preventDefault();

    const {
      target: { name, value },
    } = e;

    setInputFields({
      ...inputFields,
      [name]: {
        value,
      },
    });
  };

  return (
    <div className="container">
      <form
        className="form form-horizontal"
        onSubmit={e => addFilm(e, inputFields)}
      >
        <div className="row">
          <h3 className="centerAlign">Add a new film</h3>
          <div className="col-md-12">
            <FormGroup>
              <ControlLabel>Title: </ControlLabel>
              <FormControl
                value={inputFields.filmTitle.value}
                onChange={onChange}
                type="text"
                placeholder="Enter film title"
                name="filmTitle"
              />
              {inputFields.filmTitle.error && (
                <div className="text-danger">{inputFields.filmTitle.error}</div>
              )}
            </FormGroup>
          </div>

          <div className="col-md-12">
            <FormGroup>
              <ControlLabel>Release Year: </ControlLabel>
              <FormControl
                value={inputFields.filmYear.value}
                onChange={onChange}
                type="text"
                placeholder="Enter release year"
                name="filmYear"
              />
              {inputFields.filmYear.error && (
                <div className="text-danger">{inputFields.filmYear.error}</div>
              )}
            </FormGroup>
          </div>

          <div className="col-md-12">
            <FormGroup>
              <ControlLabel>Format: </ControlLabel>
              <FormControl
                size="1"
                value={inputFields.filmFormat.value}
                onChange={onChange}
                componentClass="select"
                placeholder="select"
                name="filmFormat"
              >
                <option value="" hidden>
                  Select film format
                </option>
                <option value="DVD">DVD</option>
                <option value="VHS">VHS</option>
                <option value="Blu-Ray">Blu-Ray</option>
              </FormControl>
              {inputFields.filmFormat.error && (
                <div className="text-danger">
                  {inputFields.filmFormat.error}
                </div>
              )}
            </FormGroup>
          </div>

          <div className="col-md-12">
            <FormGroup>
              <ControlLabel>Stars: </ControlLabel>
              <FormControl
                value={inputFields.filmStars.value}
                onChange={onChange}
                componentClass="textarea"
                placeholder="Enter stars"
                name="filmStars"
              />
              {inputFields.filmStars.error && (
                <div className="text-danger">{inputFields.filmStars.error}</div>
              )}
            </FormGroup>
          </div>
        </div>
        <FormGroup>
          <Button type="submit" bsStyle="success" bsSize="large" block>
            Submit
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default FilmForm;
