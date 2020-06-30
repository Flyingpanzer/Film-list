import React, { Fragment } from 'react';

const FilmDetails = ({ film }) => {
  return (
    <div className="col-md-8">
      <div>
        {film && (
          <Fragment>
            <h3>Film Details</h3>
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Release Year</th>
                  <th>Format</th>
                  <th>Stars</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{film.filmTitle}</td>
                  <td>{film.filmYear}</td>
                  <td>{film.filmFormat}</td>
                  <td>{film.filmStars.join(', ')}</td>
                </tr>
              </tbody>
            </table>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default FilmDetails;
