import React from 'react';
import Button from '@material-ui/core/Button';

const Movie = props => {
  const { movie, onEdit, onDelete } = props;
  const buttonsMap = [
    { classname: 'edit-btn mr-1', handler: onEdit, text: 'Edit' },
    { classname: 'delete-btn', handler: onDelete, text: 'Delete' },
  ];
  return (
    <div className="movie-box d-flex align-items-center align-items-sm-start rounded border flex-column  flex-sm-row">
      <img src={movie.Poster} alt="" className="rounded scaleDown img-poster" />
      <div className="d-flex flex-column col-12 py-2 movie-info col-sm-7">
        <h5>{movie.Title}</h5>
        <p className="m-0">
          <strong>Year:</strong>
          {movie.Year}
        </p>
        <p className="m-0">
          <strong>Runtime:</strong>
          {movie.Runtime}
        </p>
        <p className="m-0">
          <strong>Genre:</strong>
          {movie.Genre}
        </p>
        <p className="mb-auto">
          <strong>Director:</strong>
          {movie.Director}
        </p>
        <div className="mt-auto m-top-100">
          {buttonsMap.map((btn, i) => (
            <Button
              variant="contained"
              color="primary"
              key={i}
              type="button"
              className={`btn btn-primary ${btn.classname}`}
              onClick={btn.handler}
            >
              {btn.text}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;
