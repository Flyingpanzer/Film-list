import { connect } from 'react-redux';

import AddFilm from '../components/AddFilm';
import { addNewFilm, showAddModal, hideAddModal } from '../actions/filmActions';

const mapStateToProps = ({ filmState }) => ({
  errorAdd: filmState.errorAdd,
  success: filmState.success,
  successAddMsg: filmState.successAddMsg,
  isShowingAddModal: filmState.isShowingAddModal,
});

export default connect(mapStateToProps, {
  addNewFilm: film => addNewFilm(film),
  showAddModal,
  hideAddModal,
})(AddFilm);
