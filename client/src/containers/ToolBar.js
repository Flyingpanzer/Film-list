import { connect } from 'react-redux';

import { sortFilm } from '../actions/filmActions';
import ToolBar from '../components/ToolBar';

export default connect(
  null,
  {
    sortFilm: filter => sortFilm(filter),
  },
)(ToolBar);
