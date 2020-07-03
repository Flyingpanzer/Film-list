import React, { Fragment } from "react";

const SearchDetails = ({ searchedFilms }) => {
  const renderFilms = () =>
    searchedFilms.map(film => {
      const { filmTitle, filmYear, filmFormat, filmStars, _id } = film;
      return (
        <tr key={_id}>
          <td>{filmTitle}</td>
          <td>{filmYear}</td>
          <td>{filmFormat}</td>
          <td>{filmStars && filmStars.join(", ")}</td>
        </tr>
      );
    });

  return (
    <div className="filmDetail">
      {searchedFilms.length > 0 && (
        <Fragment>
          <h2>Search Details</h2>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>Release Year</th>
                <th>Format</th>
                <th>Stars</th>
              </tr>
            </thead>
            <tbody>{renderFilms()}</tbody>
          </table>
        </Fragment>
      )}
    </div>
  );
};

export default SearchDetails;
