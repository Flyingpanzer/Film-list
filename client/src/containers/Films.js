import { connect } from "react-redux";

import Films from "../components/Films";
import {
  fetchFilms,
  displayFilmById,
  showDeleteModal,
  deleteFilm,
  hideDeleteModal
} from "../actions/filmActions";

const mapStateToProps = ({ filmState }) => ({
  isShowingDeleteModal: filmState.showDeleteModal,
  isFetching: filmState.isFetching,
  films: filmState.films,
  error: filmState.error,
  successMsg: filmState.successMsg,
  filmToDelete: filmState.filmToDelete
});

export default connect(mapStateToProps, {
  fetchFilms,
  hideDeleteModal,
  displayFilmById: filmId => displayFilmById(filmId),
  deleteFilm: filmToDelete => deleteFilm(filmToDelete),
  showDeleteModal: filmToDelete => showDeleteModal(filmToDelete)
})(Films);
