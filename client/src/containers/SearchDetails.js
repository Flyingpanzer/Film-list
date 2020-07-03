import { connect } from "react-redux";

import SearchDetails from "../components/SearchDetails";

const mapStateToProps = ({ filmState }) => ({
  searchedFilms: filmState.searchedFilms
});

export default connect(mapStateToProps, null)(SearchDetails);
