import { connect } from "react-redux";

import SearchFilm from "../components/SearchFilm";
import { searchFilm } from "../actions/filmActions";

export default connect(null, {
  searchFilm: (searchInput, inputType) => searchFilm(searchInput, inputType)
})(SearchFilm);
