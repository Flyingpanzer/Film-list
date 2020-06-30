import React, { useEffect, Fragment } from "react";
import { Alert, Glyphicon, Button, Modal } from "react-bootstrap";
import "./App.css";

import FilmDetails from "../containers/FilmDetails";

const Films = ({
  fetchFilms,
  displayFilmById,
  isShowingDeleteModal,
  showDeleteModal,
  deleteFilm,
  hideDeleteModal,
  successMsg,
  films,
  filmToDelete,
  error,
  isFetching
}) => {
  const confirmDeleteFilm = () => {
    deleteFilm(filmToDelete);
  };

  useEffect(() => {
    fetchFilms();
  }, []);

  return (
    <Fragment>
      <div className="container ">
        <div className="row">
          <div className="col-md-3">
            <h3 className="centerAlign">List of films:</h3>
            {isFetching && <p>Loading films....</p>}
            {films && films.length <= 0 && !isFetching && (
              <p>Film list is empty. Add new films</p>
            )}
            {films && films.length > 0 && !isFetching && (
              <table className="table table-bordered ">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {films.map((film, i) => (
                    <tr key={i} className="table-row">
                      <td
                        className="col-md-2"
                        onClick={() => displayFilmById(film._id)}
                      >
                        {film.filmTitle}
                      </td>
                      <td className="col-md-1 text-center align-middle">
                        <Button
                          onClick={() => showDeleteModal(film)}
                          bsStyle="info"
                          bsSize="xsmall"
                        >
                          <Glyphicon glyph="trash" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          <FilmDetails />
        </div>
      </div>

      <Modal show={isShowingDeleteModal} onHide={hideDeleteModal}>
        <Modal.Header>
          <Modal.Title>Delete film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {filmToDelete && !error && !isFetching && (
            <Alert bsStyle="warning">
              Are you sure you want to delete this film{" "}
              <strong className="text-capitalize">
                {filmToDelete.filmTitle}{" "}
              </strong>{" "}
              ?
            </Alert>
          )}
          {filmToDelete && error && (
            <Alert bsStyle="warning">
              Failed. <strong>{error} </strong>
            </Alert>
          )}

          {filmToDelete && !error && isFetching && (
            <Alert bsStyle="success">
              <strong>Deleting.... </strong>
            </Alert>
          )}

          {!filmToDelete && !error && !isFetching && (
            <Alert bsStyle="success">
              Film <strong>{successMsg} </strong>
            </Alert>
          )}
        </Modal.Body>
        <Modal.Footer>
          {!successMsg && !isFetching && (
            <div>
              <Button onClick={confirmDeleteFilm}>Yes</Button>
              <Button onClick={hideDeleteModal}>No</Button>
            </div>
          )}
          {successMsg && !isFetching && (
            <Button onClick={hideDeleteModal}>Close</Button>
          )}
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Films;
