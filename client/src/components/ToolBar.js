import React from "react";

const ToolBar = ({ sortFilm }) => {
  const onSortedByTitle = () => {
    sortFilm("filmTitle");
  };

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="toolbar">
          <button
            id="btn"
            className="btn btn-default"
            onClick={onSortedByTitle}
          >
            <i className="icon fa fa-sort-alpha-asc" />
            Sort by Title
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
