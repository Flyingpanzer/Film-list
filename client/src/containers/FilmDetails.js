import { connect } from "react-redux";

import FilmDetails from "../components/FilmDetails";

const mapStateToProps = ({ filmState }) => {
  return {
    film: filmState.film
  };
};

export default connect(mapStateToProps, null)(FilmDetails);
