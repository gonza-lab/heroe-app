import React from 'react';

export const Searcher = React.memo(({ handleChange, handleSearch }) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Name of superhero"
        aria-label="Name of superhero"
        aria-describedby="button-addon2"
        name="hero"
        onChange={handleChange}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-primary"
          type="button"
          id="button-addon2"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
});
