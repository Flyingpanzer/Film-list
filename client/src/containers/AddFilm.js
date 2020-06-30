import { connect } from 'react-redux';

import AddFilm from '../components/AddFilm';
import { addNewFilm } from '../actions/filmActions';

export default connect(
  null,
  {
    addNewFilm: film => addNewFilm(film),
  },
)(AddFilm);
