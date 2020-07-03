import React, { useState } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

const SearchForm = ({ findFilm }) => {
  const [searchInput, setSearchInput] = useState('');
  const onChange = e => {
    setSearchInput(e.target.value);
  };

  const onSubmit = (e, inputType) => {
    e.preventDefault();

    if (searchInput) {
      findFilm(searchInput, inputType);
    }
  };

  return (
    <form className="form form-horizontal">
      <div className="row">
        <h3 className="centerAlign">Search film</h3>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Title: </ControlLabel>
            <FormControl
              value={searchInput}
              onChange={onChange}
              type="text"
              placeholder="Enter film title"
              name="filmTitle"
            />
          </FormGroup>
        </div>
      </div>
      <FormGroup>
        <Button
          type="submit"
          onClick={e => onSubmit(e, 'title')}
          bsStyle="success"
          bsSize="large"
          block
        >
          Search film by Title
        </Button>
        <Button
          type="submit"
          onClick={e => onSubmit(e, 'actor')}
          bsStyle="success"
          bsSize="large"
          block
        >
          Search film film by actor name
        </Button>
      </FormGroup>
    </form>
  );
};

export default SearchForm;
